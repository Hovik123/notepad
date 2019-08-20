import {Component, OnDestroy, OnInit} from '@angular/core';
import {GistService} from '@core/services/gist.service';
import {BehaviorSubject, timer} from 'rxjs';
import {concatMap, distinctUntilChanged, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-gist-charting',
  templateUrl: './gist-charting.component.html',
  styleUrls: ['./gist-charting.component.scss']
})
export class GistChartingComponent implements OnInit, OnDestroy {
  load$ = new BehaviorSubject('');
  subscriber$: any;

  constructor(private gistService: GistService) {
  }

  gistSeries = [
    {
      name: 'Gists',
      data: [],
      type: 'line'
    }
  ];
  fileSeries = [
    {
      name: 'Files',
      data: [],
      type: 'line'
    }
  ];

  ngOnInit() {
    const gists$ = this.gistService.getGists();
    const subscriber$ = this.load$.pipe(
      switchMap(() => timer(0, 5000).pipe(
        concatMap(() => gists$),
        distinctUntilChanged(),
        map((response: any[]) => {
          return {
            gistsCount: response.length,
            files: response.map((item) => item.files)
          };
        })
        )
      ),
    );

    this.subscriber$ = subscriber$.subscribe((data) => {
      const calculateFilesCount = () => {
        return data.files.map((file) => {
          return Object.keys(file).length;
        });
      };
      this.gistSeries[0].data = [data.gistsCount];
      this.fileSeries[0].data = calculateFilesCount();
      this.gistService.updateChart.next();
    });
  }

  loadMoreGists() {
    this.load$.next('');
  }

  loadMoreFiles() {
    this.load$.next('');
  }

  ngOnDestroy(): void {
    this.subscriber$.unsubscribe();
  }
}

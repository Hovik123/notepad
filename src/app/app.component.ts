import {Component, OnInit} from '@angular/core';
import {GistService} from '@core/services/gist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private gistService: GistService) {

  }

  ngOnInit(): void {
    this.gistService.getGists().subscribe((gists) => {
      console.log(gists);
    });
  }
}

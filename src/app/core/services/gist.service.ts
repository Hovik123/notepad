import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GistService {

  updateChart: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {
  }
  // Todo add models for return correct type and remove any type
  getGists(): Observable<any> {
    return this.http.get('gists');
  }
  // Todo add models for return correct type and remove any type
  createGist(params: any): Observable<any> {
    return this.http.post('gists', params);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistService {

  constructor(private http: HttpClient) {
  }

  getGists() {
    return this.http.get('gists/public');
  }
}

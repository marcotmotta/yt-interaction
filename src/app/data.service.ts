import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(param) {
      return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=' + param + '&type=video&key=AIzaSyBZm5IzVbmsF61woZ-JRhKxhiRujcdp9iU')
  }
}

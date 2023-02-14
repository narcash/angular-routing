import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  sayNamePost(postName: string) {
    console.log('This is ' + postName);
  }
  getPosts() {
    return this.http.get('http://localhost:3000/posts')
  }
  getNewPost(postParams: { title: string, author: string }) {
    return this.http.post('http://localhost:3000/posts', postParams)
  }
}

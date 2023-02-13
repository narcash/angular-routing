import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  title = "default title";
  posts: Array<{ title: string }> = []
  // counter = 0;

  // changeTitle() {
  //   this.title = 'new title ' + this.counter++;
  // }
  constructor(private http: HttpClient) {
  }
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit() {
    console.log('parent init');
    this.http.get('http://localhost:3000/posts').subscribe((posts: any) => {
      console.log(posts);
      this.posts = posts;
    })
    // this.http.post('http://localhost:3000/posts', { title: 'newPost', author: 'Nar' }).subscribe((posts: any) => {
    //   console.log(posts);
    //   this.posts.push(posts);
    // })


  }
  // ngOnAfterViewInit() {
  //   console.log('parent view init');
  // }
  // ngAfterViewChecked() {
  //   console.log('parent view checked');
  // }
}

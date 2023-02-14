import { HttpClientModule } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogService } from '../../blog.service';

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
  constructor(private blogService: BlogService) {
  }
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit() {
    this.blogService.getPosts()
      .subscribe((posts: any) => {
        console.log(posts);
        this.posts = posts;
      })
    this.blogService.getNewPost({ title: 'Lesson is over service', author: 'Nar' }).subscribe((posts: any) => {
      console.log(posts);
      this.posts.push(posts);
    })


  }
  // ngOnAfterViewInit() {
  //   console.log('parent view init');
  // }
  // ngAfterViewChecked() {
  //   console.log('parent view checked');
  // }
}

import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() title = '';
  timer = 0;
  timerId: any = 0;
  ngOnChanges(): void {
    // console.log('ngOnChanges');
  }
  ngOnInit(): void {
    this.postService.sayNamePost(this.title);

    // this.timerId = setInterval(() => {
    //   console.log(this.timer++);

    // }, 1000)
  }
  ngOnDestroy(): void {
    // clearInterval(this.timerId)
    console.log('destroy');

  }
  constructor(private http: HttpClient, private postService: BlogService) {


  }
  delete() {
    this.http.delete('http://localhost:3000/posts/2',).subscribe(x => {
      console.log(x);
    })
  }
}

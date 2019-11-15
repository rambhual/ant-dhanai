import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'lib-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  posts: any[];
  constructor(private ps: PostService) {}

  ngOnInit() {
    setTimeout(() => {
      this.ps.getPosts().subscribe(res => {
        this.posts = res;
        console.log(this.posts);
      });
    }, 5000);
  }
}

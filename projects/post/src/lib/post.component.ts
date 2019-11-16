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
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  ngOnInit() {
    setTimeout(() => {
      this.ps.getPosts().subscribe(res => {
        this.posts = res;
        console.log(this.posts);
      });
    }, 5000);
  }
}

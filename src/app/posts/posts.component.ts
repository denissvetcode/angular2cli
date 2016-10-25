import { Component, OnInit } from '@angular/core';
import {Post} from "./post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
 // selectedPost: Post;
  constructor() { }

  ngOnInit() {
  }

}

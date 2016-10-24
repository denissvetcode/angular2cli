import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html'
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  postId: number;

  constructor() { }

  ngOnInit() {
  }

}

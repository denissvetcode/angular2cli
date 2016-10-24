import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'

})
export class PostDetailComponent implements OnInit {
  @Input() selectedPost: Post;

  constructor() { }

  ngOnInit() {

  }

}

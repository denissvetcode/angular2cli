import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Post} from "../post";
import post = http.post;
import {PostService} from "../post.service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
    posts: Post[] = [];
    @Output() postSelected = new EventEmitter<Post>();
    // post = new Post(1, 1, 'Despre Moldova', 'saddsadadadasdadsadasdasd', []);

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.posts = this.postService.getPosts();
    }

    onSelected(post: Post) {
        this.postSelected.emit(post);
    }
}

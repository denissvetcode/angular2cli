import {Component, Input} from '@angular/core';
import {Post} from "../post";

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html'
})
export class PostItemComponent {
    @Input() post: Post;
    @Input() postId: number;
}

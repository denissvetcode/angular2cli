import {Component, OnInit, OnDestroy} from '@angular/core';
import {Post} from "../post";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {PostService} from "../post.service";

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html'

})
export class PostDetailComponent implements OnInit, OnDestroy {

    // @Input() selectedPost: Post;
    selectedPost: Post;   //postul selectat il vom obtine prin service mai jos
    private postIndex: number;    //variabila ce va stoca ID-ul
    private subscription: Subscription;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private postsService: PostService) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.postIndex = params['id'];         // extragem cu (ActivatedRoute) ID-ul din ruta si o initiam variabila postIndex la incarcare(onInit)
                this.selectedPost = this.postsService.getPost(this.postIndex);
            }
        );
    }

    onEdit() {
        // navigam spre pagina editare/
        this.router.navigate(['/posts', this.postIndex, 'edit']);
    }

    onDelete() {
        this.postsService.deletePost(this.selectedPost);
        this.router.navigate(['/posts']);   // dupa ce stergem un post ne directioneaza la lista de poturi ramase
    }

    //trebuie sa eliberam memoria daca folosim subscribe
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

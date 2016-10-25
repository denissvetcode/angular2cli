import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../post";
import {Router} from "@angular/router";

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html'

})
export class PostDetailComponent implements OnInit {
    @Input() selectedPost: Post;
    private postIndex: number = 1;    //variabila ce va stoca ID-ul  o initiam la incarcare(onInit)

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onEdit() {
        // navigam spre pagina editare/
        this.router.navigate(['/posts', this.postIndex, 'edit']);
    }

    onDelete() {
        this.router.navigate(['/posts']);   // dupa ce stergem un post ne directioneaza la lista de poturi ramase
    }

}

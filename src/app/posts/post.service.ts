import {Injectable} from '@angular/core';
import {Post} from "./post";
import {Comment} from "../comment";

@Injectable()
export class PostService {
    private posts: Post[] = [
        new Post(1, 1, 'Despre Moldova', 'saddsadadadasdadsadasdasd', [
            new Comment('Ion', 'hhahahahahah'),
            new Comment('Petea', 'hhahahahahah')
        ]),
        new Post(2, 1, 'Despre Romania', 'saddsadadadasdadsadasdasd', []),
        new Post(3, 2, 'Despre Russia', 'saddsadadadasdadsadasdasd', [])
    ];

    constructor() {
    }

    getPosts() {
        return this.posts;
    }
}

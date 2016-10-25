/**
 * Created by Den on 10/25/2016.
 */
import {Routes} from "@angular/router";
import {PostStartComponent} from "./post-start.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostEditComponent} from "./post-edit/post-edit.component";


// ordinea path-urilor are importanta(in versia curenta!!!)
export const POST_ROUTES: Routes = [
    {path: '', component: PostStartComponent},
    {path: 'new', component: PostEditComponent},
    {path: ':id', component: PostDetailComponent},
    {path: ':id/edit', component: PostEditComponent}
];
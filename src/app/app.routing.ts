/**
 * Created by Den on 10/24/2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {PostsComponent} from "./posts/posts.component";
import {POST_ROUTES} from "./posts/posts.routes";

const APP_ROUTES: Routes = [
    {path: 'posts', component: PostsComponent, children: POST_ROUTES},   //injectam rutele child ruta "posts"
    {path: '', redirectTo: '/posts', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
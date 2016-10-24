
/**
 * Created by Den on 10/24/2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {PostsComponent} from "./posts/posts.component";

const APP_ROUTES: Routes = [
    {path: '', component: AppComponent},
    {path: 'posts', component: PostsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
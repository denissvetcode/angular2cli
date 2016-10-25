import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component';
import {PostsComponent} from './posts/posts.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostItemComponent} from './posts/post-list/post-item.component';
import {PostDetailComponent} from './posts/post-detail/post-detail.component';
import {DropdownDirective} from './dropdown.directive';
import {PostService} from "./posts/post.service";
import {routing} from "./app.routing";
import { PostStartComponent } from './posts/post-start.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PostsComponent,
        PostListComponent,
        PostItemComponent,
        PostDetailComponent,
        DropdownDirective,
        PostStartComponent,
        PostEditComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [PostService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

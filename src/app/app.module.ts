import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'posts', component: PostComponent},
      {path: 'users', component: UserComponent},
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

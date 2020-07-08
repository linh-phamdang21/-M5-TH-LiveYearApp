import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HackerNewComponent } from './hacker-new/hacker-new.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LikeComponent } from './like/like.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {NewService} from './new.service';
import { TimelinesComponent } from './timelines/timelines.component';
import {DateUtilService} from './date-util.service';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewComponent,
    LikeComponent,
    NameCardComponent,
    ProgressBarComponent,
    TodoComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NewService,
    DateUtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

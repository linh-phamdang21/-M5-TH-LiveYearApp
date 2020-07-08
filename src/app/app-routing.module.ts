import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { HackerNewComponent} from './hacker-new/hacker-new.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {TodoComponent} from './todo/todo.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {TimelinesComponent} from './timelines/timelines.component';

const routes: Routes = [
  { path: 'new', component: HackerNewComponent },
  { path: 'namecard', component: NameCardComponent},
  { path: 'progressbar', component: ProgressBarComponent},
  { path: 'todo', component: TodoComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'liveyear', component: TimelinesComponent}
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

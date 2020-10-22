import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserShellRoutingModule } from './user-shell-routing.module';
import { UserShellComponent } from './user-shell/user-shell.component';
import { UserHomeComponent } from './user-home/user-home.component';


@NgModule({
  declarations: [UserShellComponent, UserHomeComponent],
  imports: [
    CommonModule,
    UserShellRoutingModule
  ]
})
export class UserShellModule { }

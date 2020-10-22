import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminShellRoutingModule } from './admin-shell-routing.module';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [AdminShellComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    AdminShellRoutingModule
  ]
})
export class AdminShellModule { }

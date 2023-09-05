import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterOutlet,
    AuthRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
  ]
})
export class AuthModule { }

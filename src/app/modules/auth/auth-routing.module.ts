
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

  {
    path: 'login',
    component: AuthComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [MsalGuard]
      },
      {
        path: '',
        component: LoginComponent
      },
      ]
  },
{
  path:'**',
  redirectTo: 'login',
}



];




@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class AuthRoutingModule { }

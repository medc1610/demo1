import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserUtils } from '@azure/msal-browser';

export const routes: Routes = [
  {
  path: 'auth',
  loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path:'**',
    redirectTo: 'auth',
  }

  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   canActivate: [MsalGuard]
  // },
  // {
  //   path: '',
  //   component: LoginComponent
  // },
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./_metronic/layout/layout.module').then((m) => m.LayoutModule),
  // },
  // { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Don't perform initial navigation in iframes or popups
    initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  })],
})
export class AppRoutingModule {}

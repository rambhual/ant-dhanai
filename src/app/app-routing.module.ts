import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'posts',
    loadChildren: () =>
      import('../../projects/post/src/public-api').then(m => m.PostModule)
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../projects/auth/src/public-api').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

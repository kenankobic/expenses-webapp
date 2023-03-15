import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateRoutes } from './private/private.routes';
import { PublicRoutes } from './public/public.routes';

const routes: Routes = [
  ...PublicRoutes,
  ...PrivateRoutes,
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

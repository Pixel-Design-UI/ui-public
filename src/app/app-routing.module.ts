import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemComponent } from './design-system/design-system.component';

const routes: Routes = [
  //{ path: '', loadChildren: () => import('./interface/interface.module').then(m => m.InterfaceModule) }, 
  //{ path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', component: DesignSystemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
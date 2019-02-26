import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  // { path: 'collect', loadChildren: './pages/collect/collect.module#CollectPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

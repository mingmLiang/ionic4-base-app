import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: '../tabs-page/user/user.module#UserPageModule'
          },
          // {
          //   path: ':id',
          //   loadChildren: '../tabs-page/film-details/film-details.module#FilmDetailsPageModule'
          // }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../tabs-page/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'collect',
        children: [
          {
            path: '',
            loadChildren: '../tabs-page/collect/collect.module#CollectPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

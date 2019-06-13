import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'join', loadChildren: './join/join.module#JoinPageModule' },
  { path: 'sheet', loadChildren: './sheet/sheet.module#SheetPageModule' },
  { path: 'badge', loadChildren: './badge/badge.module#BadgePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

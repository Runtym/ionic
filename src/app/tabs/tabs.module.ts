import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs.page';
import { JoinPageModule } from '../join/join.module';
import { SheetPageModule } from '../sheet/sheet.module';
import { BadgePageModule } from '../badge/badge.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    JoinPageModule,
    SheetPageModule,
    BadgePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatailsPageRoutingModule } from './datails-routing.module';

import { DatailsPage } from './datails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatailsPageRoutingModule
  ],
  declarations: [DatailsPage]
})
export class DatailsPageModule {}

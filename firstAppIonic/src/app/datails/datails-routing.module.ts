import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatailsPage } from './datails.page';

const routes: Routes = [
  {
    path: '',
    component: DatailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatailsPageRoutingModule {}

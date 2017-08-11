import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContributorListPage } from './contributor-list';

@NgModule({
  declarations: [
    ContributorListPage,
  ],
  imports: [
    IonicPageModule.forChild(ContributorListPage),
  ],
})
export class ContributorListPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepositoryListPage } from './repository-list';

@NgModule({
  declarations: [
    RepositoryListPage,
  ],
  imports: [
    IonicPageModule.forChild(RepositoryListPage),
  ],
})
export class RepositoryListPageModule {}

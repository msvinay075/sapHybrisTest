import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { RepositoryListPage } from './../pages/repository-list/repository-list';
import { ContributorListPage } from './../pages/contributor-list/contributor-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GitServiceProvider } from '../providers/git-service/git-service';

@NgModule({
  declarations: [
    MyApp,
    RepositoryListPage,
    ContributorListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RepositoryListPage,
    ContributorListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GitServiceProvider
  ]
})
export class AppModule {}

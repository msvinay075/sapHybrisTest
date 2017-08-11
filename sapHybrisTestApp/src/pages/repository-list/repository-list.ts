import { GitServiceProvider } from './../../providers/git-service/git-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-repository-list',
  templateUrl: 'repository-list.html',
})
export class RepositoryListPage {

  username: any;
  sortBy: any;
  repo: any;
  repoList: any;
  contributorList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gitService: GitServiceProvider) {
  }

  ionViewDidLoad() {

  }

  searchRepo() {
    this.gitService.searchRepos(this.username, this.sortBy).subscribe(
      data => {
        this.repoList = data;
        console.log(this.repoList);
      },
      err => {
        console.log(err);
      },
      () => console.log('Repo Search Complete')
    );
  }

}

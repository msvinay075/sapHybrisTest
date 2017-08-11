import { GitServiceProvider } from './../../providers/git-service/git-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-contributor-list',
  templateUrl: 'contributor-list.html',
})
export class ContributorListPage {

  username: any;
  repo: any;
  contributorList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gitService: GitServiceProvider) {
  }

  ionViewDidLoad() {

  }

  searchContributors() {
    this.gitService.searchContributors(this.username, this.repo).subscribe(
      data => {
        this.contributorList = data;
        console.log(this.contributorList);
      },
      err => {
        console.log(err);
      },
      () => console.log('Contributors Search Complete')
    );
  }

}

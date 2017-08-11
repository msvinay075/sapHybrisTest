import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitServiceProvider {

  constructor(public http: Http) {

  }

  searchRepos(username, sortBy) {
    let url = "http://localhost:3000/git/repos/"+username+"/"+sortBy;
    let response = this.http.get(url).map(res => res.json());
    return response;
  }

  searchContributors(repo, username) {
    let url = "http://localhost:3000/git/repos/"+username+"/"+repo;
    let response = this.http.get(url).map(res => res.json());
    return response;
  }

}

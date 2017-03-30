import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'Thamrongsak';
  private client_id = '80ff24eaea9f13367542';
  private client_secret = 'de68c63e99256525abe0496d4ec5d9c7e4af19ba';

  constructor(private _http:Http) { 
    console.log('Github Service Init...');
  }

  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  updateUsername(username:string){
    this.username = username;
  }

}

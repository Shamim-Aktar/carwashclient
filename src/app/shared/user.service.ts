import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    name: '',
    email: '',
    password: ''
  };
  //noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  tokenHeader = {};
  constructor(private http: HttpClient) {

  }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/user'+'/register', user)
  }



  login(authCredentials) {
    console.log(authCredentials)
    return this.http.post(environment.apiBaseUrl + '/user' + '/login', authCredentials)
  }
  setToken(token: string) {
    console.log(token)
    localStorage.setItem('token', token)
  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token')
  }
  getUserPayLoad() {
    let token = localStorage.getItem('token')
    if(token){
      let userPayload = atob(token.split('.')[1])
      console.log( userPayload)
      return JSON.parse(userPayload)
    } else {
      return null;
    }
  }
  isLoggedIn(){
    let userPayload = this.getUserPayLoad();
    if (userPayload) {
      return true
      } else{
        return false;
      }


  }

  getUserProfile() {
     this.tokenHeader = { headers: new HttpHeaders({ 'auth-token': this.getToken() }) };

     return this.http.get(environment.apiBaseUrl + '/user' + '/userprofile', this.tokenHeader);
  }

}

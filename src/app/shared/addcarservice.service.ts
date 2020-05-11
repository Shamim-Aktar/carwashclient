import { Injectable } from '@angular/core';
import { Cardetail} from './carmodel.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AddcarserviceService {

  cardetail = {
    brandname: '',
    modelname: '',
    vehiclenumberplate: ''
  };

  tokenHeader = {};

  constructor(private http: HttpClient, private userService: UserService ) { }

  postCarDetail(cardetail: Cardetail) {
    this.tokenHeader = { headers: new HttpHeaders({ 'auth-token': this.userService.getToken() }) };
    console.log(cardetail);
    return this.http.post(environment.apiBaseUrl + '/details' + '/vehicle', cardetail, this.tokenHeader);
  }
}


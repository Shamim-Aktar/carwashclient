import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { UserService } from '../shared/user.service';


@Injectable({
  providedIn: 'root'
})
export class BookorderService {
  address = '';

  bookingmodel = {
    carType: '',
      serviceType: '',
      bookingNumber: '',
      paymnentMode: '',
      price: '',
      address: ''
  };

  tokenHeader = {};

  cartypes: any = [];
  servicetypes: any = [];
  cartype: any;
  servicelist: any = [];


  constructor(private http: HttpClient, private userService: UserService) {
    console.log(this.bookingmodel.address)

    this.cartypes = [
  'Mini', 'Prime', 'Sedan', 'Premium'
];
    this.servicelist = ['Water Wash', 'Waterless Wash', 'Detailing'];
   }



  onOptionsSelected() {
    console.log(this.bookingmodel.carType);

    return this.bookingmodel.carType;
  }
  onSelected() {
    console.log(this.bookingmodel.serviceType);
    return this.bookingmodel.serviceType;
  }

  genBookingNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }



  bookordered() {

    this.bookingmodel = {
      carType: this.onOptionsSelected(),
      serviceType: this.onSelected(),
      bookingNumber: this.genBookingNumber().toString(),
      paymnentMode: 'COD',
      price: '200',
      address: this.bookingmodel.address,
  };
    console.log(this.bookingmodel);
    //debugger
    this.tokenHeader = { headers: new HttpHeaders({ 'auth-token': this.userService.getToken() }) };
    return this.http.post(environment.apiBaseUrl + '/order', this.bookingmodel, this.tokenHeader);

}
}

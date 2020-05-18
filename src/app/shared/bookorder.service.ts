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
      paymentMode: '',
      price: '',
      address: '',
      date:''
  };

  tokenHeader = {};

  cartypes: any = [];
  servicetypes: any = [];
  cartype: any;
  servicelist: any = [];


  constructor(private http: HttpClient, private userService: UserService) {
    //console.log(this.bookingmodel.address)

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
      paymentMode: 'COD',
      price: '200',
      address: this.bookingmodel.address,
      date: this.bookingmodel.date
  };
    console.log(this.bookingmodel);
    //debugger
    this.tokenHeader = { headers: new HttpHeaders({ 'auth-token': this.userService.getToken() }) };
    return this.http.post(environment.apiBaseUrl + '/order', this.bookingmodel, this.tokenHeader);

}
getorder() {
  this.tokenHeader = { headers: new HttpHeaders({ 'auth-token': this.userService.getToken() }) };
  return this.http.get(environment.apiBaseUrl + '/order', this.tokenHeader);

        }

        deleteOrder(id: string){
          this.tokenHeader = { headers: new HttpHeaders({ 'auth-token': this.userService.getToken() }) };
          return this.http.delete(environment.apiBaseUrl + '/order' + '/' + id, this.tokenHeader);
        }
}

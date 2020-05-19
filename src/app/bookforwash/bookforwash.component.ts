import { Component, OnInit } from '@angular/core';
import {BookorderService} from '../shared/bookorder.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookforwash',
  templateUrl: './bookforwash.component.html',
  styleUrls: ['./bookforwash.component.css']
})
export class BookforwashComponent implements OnInit {
  cartypes: any = [];
  servicetypes: any = [];
  cartype: any;
  servicelist: any = [];
  constructor(private bookorder: BookorderService, private router: Router) { }





  ngOnInit() {


      }

getModel(form:NgForm ) {
  //console.log(data)
 this.bookorder.bookordered().subscribe(
   (res: any) => {
    //console.log(res._id);
    this.router.navigateByUrl('/thanks')
    this.resetForm(form);
   },
   err=>{
     console.log(err)
   }
 )
}



resetForm(form: NgForm) {
  this.bookorder.bookingmodel = {

    carType: '',
    serviceType: '',
    bookingNumber: '',
    paymentMode: 'COD',
    price: '200',
    address: '',
    vehiclenumber: '',
    date: ''
};
}







}

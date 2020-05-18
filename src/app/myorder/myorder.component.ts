import { Component, OnInit } from '@angular/core';
import {BookorderService} from '../shared/bookorder.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {


orders: any [] = [];

deleteOrder: any[] = [];
  constructor(private bookorder: BookorderService, private router: Router) { }

  ngOnInit() {

this.getmyorder();


  }

  getmyorder() {


    this.bookorder.getorder().subscribe(
      (res: any) => {
        // resultarr=Object.keys(res)
        // console.log(resultarr)
        console.log(res)
        this.orders = res.docs;


        console.log(this.orders);

        // this.router.navigateByUrl('/confirm')
       },
       err => {
         console.log(err);
       }
    );
  }

  cancelOrder(order) {

    this.bookorder.deleteOrder(order._id).subscribe(
      (data: any) => {
        console.log('deleted', data);
        //this.router.redirect('/myorder')
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );

  }

}

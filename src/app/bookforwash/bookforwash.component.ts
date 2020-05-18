import { Component, OnInit } from '@angular/core';
import {BookorderService} from '../shared/bookorder.service';
import {Router} from '@angular/router';

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

getModel( ) {
  //console.log(data)
 this.bookorder.bookordered().subscribe(
   (res: any) => {
    //console.log(res._id);
    this.router.navigateByUrl('/thanks')
   },
   err=>{
     console.log(err)
   }
 )
}









}

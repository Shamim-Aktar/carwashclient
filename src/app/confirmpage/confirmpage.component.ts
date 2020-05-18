import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-confirmpage',
  templateUrl: './confirmpage.component.html',
  styleUrls: ['./confirmpage.component.css']
})
export class ConfirmpageComponent implements OnInit {
  showModal: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.showModal = true;
  }
  modalhide()
  {
    this.showModal = !this.showModal
    console.log(this.showModal)
  }

  viewOrder(){
    this.showModal = !this.showModal
    this.router.navigateByUrl('/myorder')
  }

}

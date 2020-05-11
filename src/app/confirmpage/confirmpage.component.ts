import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-confirmpage',
  templateUrl: './confirmpage.component.html',
  styleUrls: ['./confirmpage.component.css']
})
export class ConfirmpageComponent implements OnInit {
  showModal: boolean;

  constructor() { }

  ngOnInit() {
    this.showModal = true;
  }
  modalhide()
  {
    this.showModal = !this.showModal
    console.log(this.showModal)
  }

}

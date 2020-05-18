import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddcarserviceService } from '../shared/addcarservice.service';
import { BookorderService } from '../shared/bookorder.service';

@Component({
  selector: 'app-addcardetail',
  templateUrl: './addcardetail.component.html',
  styleUrls: ['./addcardetail.component.css']
})
export class AddcardetailComponent implements OnInit {


  showSuccessMessage: boolean;
  serverErrorMessage: string;
  brandname: string;
  constructor(private addcarservcie: AddcarserviceService, private bookorder: BookorderService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.addcarservcie.postCarDetail(form.value).subscribe(
      (res: any) => {
        this.showSuccessMessage = true;
        console.log(res);


        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 400) {
          this.serverErrorMessage = err.error.join('</br>');
        } else {
          this.serverErrorMessage = 'something went wrong';
        }
       }
    );
  }
  resetForm(form: NgForm) {
    this.addcarservcie.cardetail = {
      brandname: '',
      modelname: '',
      vehiclenumberplate: ''
    };
  }

}

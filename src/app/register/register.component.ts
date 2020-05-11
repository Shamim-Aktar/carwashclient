import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // tslint:disable-next-line: max-line-length
 showSuccessMessage: boolean;
 serverErrorMessage: string;
 emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res=>{
        this.showSuccessMessage = true;
        setTimeout(()=>this.showSuccessMessage = false, 4000)
        this.resetForm(form)
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

  resetForm (form: NgForm) {
    this.userService.selectedUser = {
      name: '',
      email: '',
      password: ''
    }
  }

}

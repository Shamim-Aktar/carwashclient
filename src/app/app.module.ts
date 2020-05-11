import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
;
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SigninComponent } from './signin/signin.component';
import { AddcardetailComponent } from './addcardetail/addcardetail.component';
import { BookforwashComponent } from './bookforwash/bookforwash.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';
// //import {AuthGuard} from './auth/auth.guard';
// import { UserService } from './shared/user.service';
// //other
// import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    UserProfileComponent,
    SigninComponent,
    AddcardetailComponent,
    BookforwashComponent,
    ConfirmpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

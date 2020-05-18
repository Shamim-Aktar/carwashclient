import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { MyorderComponent } from './myorder/myorder.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
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
    ConfirmpageComponent,
    MyorderComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

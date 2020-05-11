import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {AuthGuard} from './auth/auth.guard';
import { AddcardetailComponent } from './addcardetail/addcardetail.component';
import { BookforwashComponent } from './bookforwash/bookforwash.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: SigninComponent},
  {path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path:'addcar', component: AddcardetailComponent, canActivate: [AuthGuard]},
  {path: 'book', component: BookforwashComponent, canActivate: [AuthGuard]},
  {path: 'thanks', component: ConfirmpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

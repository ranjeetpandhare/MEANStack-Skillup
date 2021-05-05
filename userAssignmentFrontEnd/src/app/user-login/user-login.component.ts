import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {

  logindata: Array<any>;


  hide = true;
  constructor(
    private http: CrudService,
    private router: Router
  ) {
    this.logindata = new Array<any>();

  }
  ngOnInit(): void { }
  // user login 
  onLogin(): any {
    console.log("data login ");
    this.http.loginData(this.formVar.value).
      subscribe((d) => {
        this.logindata = d;
        if (d.username != this.username || d.password != this.password) {

          console.log(d.message);

          //set username and token from sessionStorage
          let token = sessionStorage.setItem('userToken', d.token);
          let uname = sessionStorage.setItem('userName', d.user.username);
          let role = sessionStorage.setItem('role', d.user.role);
          let id=sessionStorage.setItem('id',d._id);

          // after login then navigate page from dashborad 
          if (token !== d.token || uname !== d.username) {
            this.router.navigateByUrl('/dashboard')
          } else {
            console.log("not logged user ");
          }
        } else if (!d.user.username) {
          console.log("invalid username");
          this.getErrorMessagee_username();
        } else if (!d.user.password) {
          console.log("invalid password");
          this.getErrorMessage_password();
        } else {
          console.log("username & password  incorrect");
        }
      }, (error) => {
        console.log("error occured in login user");
      })
    // alert("User Login successfull");   
  }

  formVar = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  //form field validations
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  //login name error message
  getErrorMessagee_username() {
    if (this.username.hasError('username')) {
      return 'You must enter a Email/Login Name';
    }
    return this.username.hasError('username') ? 'valid username' : 'Not Valid';
  }

  //password error
  getErrorMessage_password() {
    if (this.password.hasError('password')) {
      return 'You must enter a Password';
    }
    return this.password.hasError('password') ? 'valid password' : 'Not Valid';
  }
}

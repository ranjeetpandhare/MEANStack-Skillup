import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(
    private http: CrudService
  ) { }
  ngOnInit(): void { };

  onSubmit(): any {
    this.formVar.value.role="customer";
    this.http.signupdataPost(this.formVar.value).
      subscribe(() => {
        console.log("data add in database")
      }, (error) => {
        console.log(error);
      })
    console.log(this.formVar.value)
    alert('Form submited successfully')
  }

  mobileNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";


  formVar = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.minLength(10)]),
    dob: new FormControl('', [Validators.required]),
    userid: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    varifypassword: new FormControl('', [Validators.required, Validators.minLength(5)])

  });


  username = new FormControl('', [Validators.required, Validators.minLength(6)]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  number = new FormControl('', [Validators.required, Validators.minLength(10)]);
  dob = new FormControl('', [Validators.required]);
  userid = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  varifypassword = new FormControl('', [Validators.required, Validators.minLength(5)]);




  //username error message 
  getErrorMessagee_username() {
    if (this.username.hasError('required') || this.username.hasError('minLength')) {
      return 'You must enter username';
    }
    return this.username.hasError('username') ? '' : 'Username should be 6 character long';
  }
  //firstname error message
  getErrorMessagee_firstname() {
    if (this.firstname.hasError('required')) {
      return 'You must enter firstname';
    }
    return;
  }
  //lastname error message
  getErrorMessagee_lastname() {
    if (this.lastname.hasError('required')) {
      return 'You must enter lastname';
    }
    return;
  }
  //email error message
  getErrorMessagee_email() {
    if (this.email.hasError('required')) {
      return 'You must enter a email ';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  //phone error 
  getErrorMessagee_number() {
    if (this.number.hasError('required') || this.number.hasError('minLength(10)')) {
      return 'You must enter a phone number ';
    }
    return this.number.hasError('number') ? 'please enter 10 digit number' : 'Number is  not  10 digit';
  }
  //date of birth
  getErrorMessagee_dob() {
    if (this.dob.hasError('required')) {
      return 'Please select date of birth';
    }
    return;
  }
  //userid
  getErrorMessagee_userid() {
    if (this.userid.hasError('required')) {
      return 'You must enter user id';
    }
    return;
  }
  //gender
  getErrorMessagee_gender() {
    if (this.gender.hasError('required')) {
      return 'You must enter the gender';
    }
    return;
  }
  //password error
  getErrorMessagee_password() {
    if (this.password.hasError('required')) {
      return 'You must enter a Password';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }
  // varifypassword
  getErrorMessagee_varifypassword() {
    if (this.varifypassword.hasError('required')) {
      return 'You must enter a Password'
    }
    return;
  }
  getErrorMessagee_varifypassword1() {
    if (this.password.value == this.varifypassword.value) {
      return ' password matched'
    } else {
      return 'password not mateched ';

    }
  }
}
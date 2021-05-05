import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { Users } from 'src/app/services/Users'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-create-new',
  templateUrl: './user-create-new.component.html',
  styleUrls: ['./user-create-new.component.css']
})
export class UserCreateNewComponent implements OnInit {
  url: any = '';
  hide = true;
  getUserByid: Users[] = [];
  Users = {
    _id: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    dob: "",
    role: "",
    userid: '',
    gender: '',
    passsword: ''
  }

  constructor(
    private http: CrudService,
    private router: Router,
    private Act_Router: ActivatedRoute
  ) { }
  ngOnInit(): void {
    // console.log(this.Act_Router.snapshot.params.id);

    this.http.getCurrentData(this.Act_Router.snapshot.params.id).subscribe((result) => {
      this.formVar = new FormGroup({
        file: new FormControl(result["file"]),
        username: new FormControl(result["username"], [Validators.required, Validators.minLength(6)]),
        firstname: new FormControl(result["firstname"], [Validators.required]),
        lastname: new FormControl(result["lastname"], [Validators.required]),
        email: new FormControl(result["email"], [Validators.required, Validators.email]),
        number: new FormControl(result["number"], [Validators.required, Validators.minLength(10)]),
        dob: new FormControl(result["dob"], [Validators.required]),
        userid: new FormControl(result["userid"], [Validators.required]),
        gender: new FormControl(result["gender"], [Validators.required]),
        password: new FormControl(result["password"], [Validators.required, Validators.minLength(5)]),
        varifypassword: new FormControl(result["password"], [Validators.required, Validators.minLength(5)]),
        role: new FormControl(result["role"])

      });      

    })
    this.getimagedata();
    // let imgdata = sessionStorage.getItem('image store')

  };

  getimagedata(){
    this.http.getCurrentData(this.Act_Router.snapshot.params.id).subscribe((result)=>{
      this.getUserByid=result;
      this.url=result.file
    })
  }


  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        //store image from base 64 format 
        // console.log(this.url);
        sessionStorage.setItem("image store", this.url)

      }
    }
  }
  // public delete() {
  //   this.url = null;
  // }

  // updateUser() {
  //   this.http.updateUser(this.Act_Router.snapshot.params.id, this.formVar.value)
  //     .subscribe((result) => {
  //       console.log("data updated sucess");
  //     })
  // }

  onSubmit(): any {
    let imgdata = sessionStorage.getItem('image store')
    let idata = imgdata;
    this.url=idata;
    this.formVar.value.file = idata;
    this.formVar.value.role="customer";

    this.http.signupdataPost(this.formVar.value).
      subscribe(() => {
        console.log("data add in database")
      }, (error) => {
        console.log("error");
      })
    console.log(this.formVar.value)
    alert('Form submited successfully')
    this.router.navigateByUrl("/data_table")

  }

  mobileNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";





  formVar = new FormGroup({

    file: new FormControl(''),

    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.minLength(10)]),
    dob: new FormControl('', [Validators.required]),
    userid: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    varifypassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    role: new FormControl('')

  });

  file = new FormControl('');
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
  role = new FormControl("");




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
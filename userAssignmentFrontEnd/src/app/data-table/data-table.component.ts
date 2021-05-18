import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { Users } from 'src/app/services/Users';

// export interface UserData {
//   id: string;
//   username: string;
//   firstname: string;
//   lastname: string;
//   email: string;
//   phone: string;
//   dob: string;
//   userid: string;
//   gender: string;
//   password: string;
//   varifypassword: string;
// }

/** Constants used to fill up our data base. */

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.css'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {
  newuser: Users[] = [];
  showMeTable1: boolean = true;
  showMeTable2: boolean = true;
  showMeTable3: boolean = true;
  showMeTable4: boolean = true;
  showMeTable5: boolean = true;
  showMeTable6: boolean = true;
  showMeTable7: boolean = true;
  showMeTable8: boolean = true;
  showMeTable9: boolean = true;
  hidefilterAction: boolean = false;

  show = true;

  hideShowColumn1() {
    this.showMeTable1 = !this.showMeTable1;
  }
  hideShowColumn2() {
    this.showMeTable2 = !this.showMeTable2;
  }
  hideShowColumn3() {
    this.showMeTable3 = !this.showMeTable3;
  }
  hideShowColumn4() {
    this.showMeTable4 = !this.showMeTable4;
  }
  hideShowColumn5() {
    this.showMeTable5 = !this.showMeTable5;
  }
  hideShowColumn6() {
    this.showMeTable6 = !this.showMeTable6;
  }
  hideShowColumn7() {
    this.showMeTable7 = !this.showMeTable7;
  }
  hideShowColumn8() {
    this.showMeTable8 = !this.showMeTable8;
  }
  hideShowColumn9() {
    this.showMeTable9 = !this.showMeTable9;
  }

  // Users = {
  //   _id: '',
  //   username: '',
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  //   phone: '',
  //   dob: '',
  //   userid: '',
  //   gender: '',
  //   passsword: '',
  // };

  alert: boolean = false;

  index = [
    'User Name',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'DOB',
    'UserId',
    'Gender',
    'Password',
  ];

  displayedColumns = [
    'username',
    'firstname',
    'lastname',
    'email',
    'number',
    'dob',
    'userid',
    'gender',
    'password',
  ];

  data: any = [];
  p: number = 1;

  // search filter field
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  userid: string;
  gender: string;
  password: string;

  constructor(private http: CrudService, private router: Router) {
    this.username = '';
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.userid = '';
    this.gender = '';
    this.password = '';

    this.data = new Array<any>();
  }

  ngOnInit() {
    this.newuser = [];
    this.getTableData();
  }

  hashPassword(password: string) {
    this.password = password;
    return '*'.repeat(this.password.length);
  }
//search function
  Search() {
    if (this.username !== '') {
      this.newuser = this.newuser.filter((res) => {
        return res.username
          .toLocaleLowerCase()
          .match(this.username.toLocaleLowerCase());
      });
    } else if (this.username == '') {
      this.ngOnInit();
    }
  }
  //username filter
  UsernameFilter() {
    if (this.username !== '') {
      this.newuser = this.newuser.filter((res) => {
        return res.username
          .toLocaleLowerCase()
          .match(this.username.toLocaleLowerCase());
      });
    } else if (this.username == '') {
      this.ngOnInit();
    }
  }
  //firstname filter
  firstnameFilter() {
    if (this.firstname !== '') {
      this.newuser = this.newuser.filter((res) => {
        return res.firstname
          .toLocaleLowerCase()
          .match(this.firstname.toLocaleLowerCase());
      });
    } else if (this.firstname == '') {
      this.ngOnInit();
    }
  }
  //lastname filter
  lastnameFilter() {
    if (this.lastname !== '') {
      this.newuser = this.newuser.filter((res) => {
        return res.lastname
          .toLocaleLowerCase()
          .match(this.lastname.toLocaleLowerCase());
      });
    } else if (this.lastname == '') {
      this.ngOnInit();
    }
  }
  //email filter
  emailFilter() {
    if (this.email !== '') {
      this.newuser = this.newuser.filter((res) => {
        return res.email
          .toLocaleLowerCase()
          .match(this.email.toLocaleLowerCase());
      });
    } else if (this.email == '') {
      this.ngOnInit();
    }
  }
  //userid filter
  useridFilter() {
    if (this.userid !== '') {
      this.newuser = this.newuser.filter((res) => {
        return res.userid
          .toLocaleLowerCase()
          .match(this.userid.toLocaleLowerCase());
      });
    } else if (this.userid == '') {
      this.ngOnInit();
    }
  }
  //gender filter
  genderFilter() {
    if (this.gender !== '') {
      this.newuser = this.newuser.filter((res) => {
        return res.gender
          .toLocaleLowerCase()
          .match(this.gender.toLocaleLowerCase());
      });
    } else if (this.gender == '') {
      this.ngOnInit();
    }
  }

  key: string = 'username';
  reverse: boolean = false;
  //sorting 
  sort(key: string) {
    console.log(key);
    this.key = key;
    this.reverse = !this.reverse;
  }
//get data from db
  getTableData() {
    this.http.getData().subscribe((d) => {
      // for(let entry of d){
      //   console.log(entry.password);
      // }
      this.data = d;
      this.newuser = d;
      console.log(d.password);
      console.log(d);
    });
  }

  //delete user
  deleteUser(id: string) {
    this.http.deleteUser(id).subscribe(() => {
      console.log('data deleted in database');
      this.router.navigateByUrl('/dashboard');
      //  this.reloadData();
    });
  }
}

// function d(d: any) {
//   throw new Error('Function not implemented.');
// }

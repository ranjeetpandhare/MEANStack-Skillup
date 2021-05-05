import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  data: Array<any>
  panelOpenState = false;
  constructor(
    private http: CrudService,
    private router: Router,
  ) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.getsessionStorageData();
    this.getTableData();
  }
  //get value from LS and print from the dashboard page 
  get user(): any {
    return sessionStorage.getItem('userName');
  }
  get getUserFLname(): any {
    var t = sessionStorage.getItem('userName')
    let item = JSON.stringify(t);
    var t1 = item.charAt(1).toLocaleUpperCase();
    var t2=item.split('.')[1].charAt(0).toLocaleUpperCase();
    return t1+t2;
  }
  getUserRole(): any {
      return sessionStorage.getItem('role');    
  }
  getsessionStorageData() {
    const getUsernameLSD = sessionStorage.getItem('userData');
    // console.log(getUsernameLSD);
  }
  getTableData() {
    this.http.getData().subscribe((d) => {
      this.data = d;
      // console.log(d);
    })
  }
  onLogout() {
    const username_sessionStorage = sessionStorage.getItem('userData');
    const token_sessionStorage = sessionStorage.getItem("userToken");
    sessionStorage.clear();
    console.log(" The  " + username_sessionStorage + " Log out successfully ");
    this.router.navigateByUrl('');
  }

}

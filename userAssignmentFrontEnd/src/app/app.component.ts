import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'userAssignment';
  activeTab = 'home';
  constructor(private router: Router) { }

  onSelectTab(newTab: string): void {
    this.activeTab = newTab;
    this.router.navigate([newTab]);
  }
  ngOnInit() { }

  gotoLoginPage(pageName: String): void {
    this.router.navigate([`${pageName}`])
  }

}

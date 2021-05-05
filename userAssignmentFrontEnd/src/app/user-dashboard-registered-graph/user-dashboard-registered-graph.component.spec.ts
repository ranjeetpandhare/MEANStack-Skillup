import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardRegisteredGraphComponent } from './user-dashboard-registered-graph.component';

describe('UserDashboardRegisteredGraphComponent', () => {
  let component: UserDashboardRegisteredGraphComponent;
  let fixture: ComponentFixture<UserDashboardRegisteredGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardRegisteredGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardRegisteredGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

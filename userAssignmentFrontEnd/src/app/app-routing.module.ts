import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { UserCreateNewComponent } from './user-create-new/user-create-new.component';
import { UserDashboardRegisteredGraphComponent } from './user-dashboard-registered-graph/user-dashboard-registered-graph.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: 'signup', component: UserSignupComponent },
  { path: '', component: UserLoginComponent },
  { path: 'dashboard', component: UserDashboardRegisteredGraphComponent },
  { path: 'create_new', component: UserCreateNewComponent },
  { path: 'data_table', component: DataTableComponent },
  {path: 'update/:id',component:UserUpdateComponent},
  {path: 'userProfile/:id',component:UserCreateNewComponent},
  
  { path: '**', component: UserNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

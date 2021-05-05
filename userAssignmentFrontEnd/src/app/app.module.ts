import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { UserCreateNewComponent } from './user-create-new/user-create-new.component';
import { UserDashboardRegisteredGraphComponent } from './user-dashboard-registered-graph/user-dashboard-registered-graph.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataTableComponent } from './data-table/data-table.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component'
import { ChartsModule } from 'ng2-charts';
import {MatTabsModule} from '@angular/material/tabs';
// import { UserDashboardDatatableComponent } from './user-dashboard-datatable/user-dashboard-datatable.component';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import{Ng2OrderModule} from 'ng2-order-pipe';
import{NgxPaginationModule} from 'ngx-pagination';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserUpdateComponent } from './user-update/user-update.component';





// const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserDashboardComponent,
    UserCreateNewComponent,
    UserDashboardRegisteredGraphComponent,
    DataTableComponent,
    UserNotFoundComponent,
    UserUpdateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ScrollingModule,
    ChartsModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    MatExpansionModule,
    MatTooltipModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

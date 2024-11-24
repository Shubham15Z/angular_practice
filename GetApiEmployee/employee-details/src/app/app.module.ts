import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UserComponent } from './component/user/user.component';
import { UserdataComponent } from './component/userdata/userdata.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    UserComponent,
    UserdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

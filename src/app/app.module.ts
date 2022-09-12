import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { TeacherComponent } from './teacher/teacher.component';
import { CivilComponent } from './Branch/civil/civil.component';
import { ComputerComponent } from './Branch/computer/computer.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TeacherComponent,
    CivilComponent,
    ComputerComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Single Template driven
    ReactiveFormsModule,// dynamic
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComputerComponent } from './Branch/computer/computer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import{RegistrationComponent} from './registration/registration.component'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'brach',component:ComputerComponent,
  children:[
    {path:'computer',loadChildren:() => 
    import('./Branch/computer/computer.component').then((m)=>m.ComputerComponent)},
    {path:'civil',loadChildren:() => 
    import('./Branch/civil/civil.component').then((m)=>m.CivilComponent)},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

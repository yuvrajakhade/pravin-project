import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/login.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;

  constructor( private formBuilder: FormBuilder,private router:Router) {
    localStorage.setItem('user', JSON.stringify(new LoginModel('a','b')));
  }
   
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  loginModel = new LoginModel('','');

  onSubmit()
  {
    if(!this.loginForm.valid)
    {
      return;
    }
    console.log("Form Submit: "+ this.loginForm.value.username+" ,"+this.loginForm.value.password);
  
    this.loginModel.username = this.loginForm.value.username;
    this.loginModel.password = this.loginForm.value.password;
    
    let storedUSer = JSON.parse(localStorage.getItem('user') || '{}');
    if(storedUSer.username === this.loginForm.value.username && 
      storedUSer.password === this.loginForm.value.password){
        console.log("Login Sucess");
        this.router.navigate(['home']);
      }
      else{
        
        swal('Login Failed','Worong Username or Password');
        return;
      }
  }
}

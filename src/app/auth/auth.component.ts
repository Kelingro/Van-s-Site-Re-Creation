import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public buttonClicked!:string;

  private authObservable!:Observable<AuthResponse>;

  ngOnInit(): void {
  }

  constructor(private authService:AuthService){

  }

  public onSubmit(data: NgForm){

    console.log("Button Clicked = " + this.buttonClicked);
    console.log(data.value);


    if(this.buttonClicked == 'SignUp'){
      this.authObservable = this.authService.signup(data.value.email, data.value.password);
      }
    if(this.buttonClicked == 'Login'){
      this.authObservable = this.authService.login(data.value.email, data.value.password);
      }


    this.authObservable.subscribe((data:AuthResponse) => {
      console.log(data);
    },
    error =>{
      console.log(error.error);
    }
    
    );

    data.resetForm();

  }


  onClick(ButtonType:string){
    console.log(ButtonType);
  }
}

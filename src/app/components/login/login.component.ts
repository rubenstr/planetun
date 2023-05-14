import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  validaFormFlag: boolean = false;

  constructor(private formBuilder : FormBuilder, private router: Router ) {}

  ngOnInit(): void {
    this.loginForm  = this.formBuilder.group({
      user: ['', [Validators.required]],
      senha: ['', [Validators.required]],
    })
  }

  validaForm(event: any){
     if(event.status === "VALID") { this.validaFormFlag = true}
     else this.validaFormFlag = false
  }

  submitLogin( event: any): void {
    console.log(event)
    // debugger
    //   var dadosLogin = this.loginForm.getRawValue() as LoginModel;
  }


}

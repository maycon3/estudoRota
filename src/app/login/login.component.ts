import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
      this.loginForm = this.formBuilder.group({
        nome:[null],
        senha:[null]
      });
  }

  logar(){
    const usuario = this.loginForm.getRawValue() as Usuario;
    this.authService.logar(usuario);
  }

}

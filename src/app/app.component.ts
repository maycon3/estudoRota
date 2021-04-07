import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  idCurso: string;
  mostraMenu:boolean = false;

  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
      this.authService.autenticacao.subscribe((auth:boolean)=>{
        this.mostraMenu = auth;
      });
  }
}

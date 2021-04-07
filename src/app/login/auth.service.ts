import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';


@Injectable({ providedIn: 'root'})
export class AuthService {

  autenticacao = new EventEmitter<boolean>();
  usuarioAutenticado: boolean = false;

  constructor(private router:Router) { }

  logar(usuario:Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      this.autenticacao.emit(true);
      this.router.navigate(['']);
    }else{
      this.usuarioAutenticado = false;
      this.autenticacao.emit(false);
    }
  }

  temAutendicacao(){
    return this.usuarioAutenticado;
  }
}

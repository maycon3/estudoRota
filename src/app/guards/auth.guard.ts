import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate,CanLoad {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree 
    | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
     return this.verficaEstaOnline();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.verficaEstaOnline();
  }

  private verficaEstaOnline(){
    if(this.authService.temAutendicacao()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

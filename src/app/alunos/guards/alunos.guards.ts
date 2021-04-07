import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
        if(state.url.includes('editar')){
            // return false;
        }
        console.log('Estou chamando o guarda de rotas de Alunos.')
        return true;
    }

}
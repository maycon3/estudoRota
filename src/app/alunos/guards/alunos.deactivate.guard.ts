import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IformDeactivate } from './iform.deactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformDeactivate> {

    canDeactivate(component: IformDeactivate, 
        currentRoute:ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
         boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
            console.log('Guarda de rota do deactivate');
            
            console.log(' função ', component.podeDesativar());
            return true;
    }

}
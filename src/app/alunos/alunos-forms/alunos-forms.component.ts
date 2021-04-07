import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';
import { IformDeactivate } from '../guards/iform.deactivate';

@Component({
  selector: 'app-alunos-forms',
  templateUrl: './alunos-forms.component.html',
  styleUrls: ['./alunos-forms.component.css']
})
export class AlunosFormsComponent implements OnInit,OnDestroy,IformDeactivate {

  aluno:any = {};
  inscricao:Subscription;
  formsModou: boolean = false;

  constructor(
    private alunosService:AlunosService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe((param:any)=>{
      let id = param.id;
      this.aluno = this.alunosService.getAluno(id);
      if(this.aluno == null){
        this.aluno = {};
      }
    });
  }

  onInput(){
    this.formsModou = true;
  }

  mudaRota(){
    if(this.formsModou){
      confirm('tem certeza que deseja sair da pagina')
    }
    return true;
  }

  podeDesativar(){
    return this.mudaRota();
  }


  ngOnDestroy(): void{
    this.inscricao.unsubscribe();
  }
}

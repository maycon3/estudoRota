import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-detalhes',
  templateUrl: './alunos-detalhes.component.html',
  styleUrls: ['./alunos-detalhes.component.css']
})
export class AlunosDetalhesComponent implements OnInit, OnDestroy {

  aluno:Aluno;
  inscricao:Subscription;

  constructor(
    private activativatedRoute:ActivatedRoute,
    private router: Router,
    private alunosService:AlunosService
  ) { }

  ngOnInit(): void {
    /*this.inscricao = this.activativatedRoute.params.subscribe((param:any)=>{
      let id = param.id;
      this.aluno = this.alunosService.getAluno(id);
      if(this.aluno == null){
        this.router.navigate(['/alunos']);
      }
    });*/ 
    this.inscricao = this.activativatedRoute.data.subscribe((aluno:{aluno:Aluno})=>{
      this.aluno = aluno.aluno;
      if(this.aluno == null){
        this.router.navigate(['/alunos']);
      }
    });
  }

  editaContado(){
    this.router.navigate(['/alunos', this.aluno.id,'editar']);
  }

  ngOnDestroy(): void{
    this.inscricao.unsubscribe();
  }

}

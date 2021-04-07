import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos:Aluno[] = [
    {id:1, nome:'aluno01', email:'email@email01.com'},
    {id:2, nome:'aluno02', email:'email@email02.com'},
    {id:3, nome:'aluno03', email:'email@email03.com'}
  ];

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAluno(id:number):Aluno{
    const aluno = this.alunos;
     for(let i = 0; i < aluno.length; ++i){
       if(aluno[i].id == id){
         return aluno[i];
       }
      }
    return null;
  }
  
}

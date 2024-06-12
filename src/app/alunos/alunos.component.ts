import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = "Lista de Alunos";
  public alunos = [
    {id: 1, nome: 'Antônio', sobrenome: 'Azevedo', telefone: 32893003},
    {id: 2, nome: 'Giullia', sobrenome: 'Fukuchima', telefone: 32893003},
    {id: 3, nome: 'Angélica', sobrenome: 'Oliveira', telefone: 32893003},
    {id: 4, nome: 'João', sobrenome: 'de Lima', telefone: 32893003},
    {id: 5, nome: 'Daniel', sobrenome: 'Barbosa', telefone: 32893003},
    {id: 6, nome: 'Francielle', sobrenome: 'Cardoso', telefone: 32893003},
    {id: 7, nome: 'Victor', sobrenome: 'Winitskowski', telefone: 32893003},
    {id: 8, nome: 'René', sobrenome: 'Marques', telefone: 32893003}
  ];

  public alunoSelecionado : Aluno | null;

  setAlunoSelecionado(aluno : Aluno | null) {
    this.alunoSelecionado = aluno;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

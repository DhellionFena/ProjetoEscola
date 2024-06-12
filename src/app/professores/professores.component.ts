import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Lista de Professores";
  public professores = [
    {id: 1, nome: 'Carlos', sobrenome: "Mattos", disciplina: "Português"},
    {id: 2, nome: 'Cerise', sobrenome: "Mendonça", disciplina: "Matemática"},
    {id: 3, nome: 'Victor', sobrenome: "Winitskowski", disciplina: "Música"},
    {id: 4, nome: 'Rita', sobrenome: "Carvalho", disciplina: "Programação"}
  ];

  public profSelecionado : Professor | null;

  setProfSelecionado(prof : Professor | null) {
    this.profSelecionado = prof
  }

  constructor() { }

  ngOnInit(): void {
  }

}

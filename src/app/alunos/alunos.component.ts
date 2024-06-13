import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  //criando formulário de aluno
  public alunoForm : FormGroup;
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

  constructor(private fb : FormBuilder, private modalService: BsModalService) {
    this.createAlunoForm()
  }

  ngOnInit(): void {
  }

  createAlunoForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
    })
  }

  submitAlunoForm() {
    console.log(this.alunoForm.value)
  }

  public alunoSelecionado : Aluno | null;

  setAlunoSelecionado(aluno : Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno)
  }

  deselectAluno() {
    this.alunoSelecionado = null;
  }

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }


}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Aluno } from '../models/Aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  //criando formulário de aluno
  public alunoForm : FormGroup;
  public titulo = "Lista de Alunos";
  public alunos : Aluno[];

  constructor(
    private fb : FormBuilder,
    private modalService: BsModalService,
    private alunoService: AlunoService
    ) {
    this.createAlunoForm()
  }

  ngOnInit(): void {
    this.loadAlunos();
  }

  loadAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
      },
      error => {
        console.error(error);
      }
    );
  }

  saveAluno(aluno: Aluno) {
    this.alunoService.update(aluno.id, aluno).subscribe(
      (model: Aluno) => {
        console.log(model);
        this.loadAlunos();
      },
      (err : any) => console.error(err)
    )
  }

  createAlunoForm() {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
    })
  }

  submitAlunoForm() {
    this.saveAluno(this.alunoForm.value);
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

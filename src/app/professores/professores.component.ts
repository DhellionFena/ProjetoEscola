import { ProfessorService } from './professor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Lista de Professores";
  @Input() disable = false;
  public professores : Professor[];

  public profSelecionado : Professor | null;
  public profForm : FormGroup;

  setProfSelecionado(prof : Professor) {
    if (!this.disable) {
      this.profSelecionado = prof
      this.profForm.patchValue(prof)
    }
  }

  deselectProf() {
    this.profSelecionado = null;
  }
  constructor(
    private fb : FormBuilder,
    private profService: ProfessorService
    ) {
    this.createProfessorForm()
  }

  ngOnInit(): void {
    this.loadProfessores();
  }

  loadProfessores() {
    this.profService.getAll().subscribe(
      professores => {
        this.professores = professores;
        console.log(this.professores)
      },
      err => { console.error(err) }
    );
  }

  createProfessorForm() {
    this.profForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      disciplinas: ['', Validators.required],
    })
  }

  submitProfessorForm() {
    console.log(this.profForm.value)
  }

}

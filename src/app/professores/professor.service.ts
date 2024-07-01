import { Professor } from '../models/Professor';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {

  baseUrl : string = environment.baseUrl + '/api/professor';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.baseUrl);
  }

  getById(id: number): Observable<Professor> {
    return this.http.get<Professor>(this.baseUrl + `/${id}`);
  }

  create(prof: Professor) {
    return this.http.post(this.baseUrl, prof);
  }

  update(id: number, prof: Professor) {
    return this.http.put<Professor>(this.baseUrl + `/${id}`, prof);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

}

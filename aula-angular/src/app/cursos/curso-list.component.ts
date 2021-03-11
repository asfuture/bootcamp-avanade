import { Component, OnInit } from '@angular/core';
import {Curso} from './curso';
import { CursoService } from './curso-service';

@Component({
  templateUrl:'./curso-list.component.html'
})
export class CursoListComponent implements OnInit {

  filteredCursos:Curso[]=[];
  _cursos:Curso [] = [];

 _filterBy!: string;

  constructor(private cursoService: CursoService){}

  ngOnInit(): void {
    this._cursos = this.cursoService.retrieveAll();
    this.filteredCursos = this._cursos;
  }
  set filter(value:string){
    this._filterBy = value;
    this.filteredCursos = this._cursos.filter((curso:Curso)=>Curso.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)!;
  }
  get filter() {
    return this._filterBy;

  }
}


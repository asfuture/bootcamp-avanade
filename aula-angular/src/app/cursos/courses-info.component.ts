import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Curso } from "./curso";
import { CursoService } from "./curso-service";

@Component({
  templateUrl:'./courses-info.component.html'
})

export class CoursesInfoComponent implements OnInit{

  cursos: Curso | undefined;
  activatedtoRoute: any;

  constructor(private activetoRoute:ActivatedRoute,private cursoService:CursoService){}

  ngOnInit():void {

    this.cursoService.retrieveById(+this.activatedtoRoute.snapshot.paramMap.get('id'));
  }

}

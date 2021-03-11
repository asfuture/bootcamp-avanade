import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { CursoListComponent } from './cursos/curso-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { Error404Component } from './error404/error-404.component';
import{ NavBarComponent } from './nav-bar/nav-bar.component';
import { CoursesInfoComponent } from './cursos/courses-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CoursesInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'curso',component:CursoListComponent
      },
      {
        path: 'cursos/info/:Id',component:CoursesInfoComponent
      },
      {
        path: '',redirectTo:'courses',pathMatch:'full'
      },
      {
        path: '**',component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

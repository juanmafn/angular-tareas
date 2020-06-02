import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { TareaComponent } from './componentes/tarea/tarea.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    TareaComponent,
    NuevaTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

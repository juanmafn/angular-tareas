import { Component, ViewChild } from "@angular/core";
import { Tarea } from "./modelo/tarea.model";
import { ListaTareasComponent } from "./componentes/lista-tareas/lista-tareas.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "todo";

  @ViewChild("listaTareas", { static: false })
  listaTareas: ListaTareasComponent;

  nuevaTarea(tarea: Tarea) {
    console.log(tarea);
    this.listaTareas.nuevaTarea(tarea);
  }
}

import { Component, OnInit } from "@angular/core";
import { Tarea } from "src/app/modelo/tarea.model";

@Component({
  selector: "app-lista-tareas",
  templateUrl: "./lista-tareas.component.html",
  styleUrls: ["./lista-tareas.component.css"],
})
export class ListaTareasComponent implements OnInit {
  listaTareas: Tarea[] = [];

  constructor() {}

  ngOnInit() {
    this.listaTareas.push(
      Tarea.newInstance("tarea 1", "Cambiar icono", "todo")
    );
    this.listaTareas.push(
      Tarea.newInstance(
        "tarea 2",
        "Mejora del sistema de sincronización",
        "done"
      )
    );
  }

  nuevaTarea(tarea: Tarea) {
    this.listaTareas.push(tarea);
  }

  borrarTarea(idTarea: string) {
    const index = this.listaTareas.findIndex((x) => x.id === idTarea);
    if (index > -1) {
      this.listaTareas.splice(index, 1);
    }
  }
}

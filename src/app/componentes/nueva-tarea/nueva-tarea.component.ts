import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Tarea } from "src/app/modelo/tarea.model";

@Component({
  selector: "app-nueva-tarea",
  templateUrl: "./nueva-tarea.component.html",
  styleUrls: ["./nueva-tarea.component.css"],
})
export class NuevaTareaComponent implements OnInit {
  @Output("nuevaTarea")
  tareaEvent: EventEmitter<Tarea> = new EventEmitter<Tarea>();

  tarea: Tarea = new Tarea();

  opciones = [
    {
      id: "todo",
      display: "Todo",
    },
    {
      id: "doing",
      display: "Doing",
    },
    {
      id: "done",
      display: "Done",
    }
  ];

  constructor() {}

  ngOnInit() {}

  crearTarea() {
    this.tareaEvent.emit(this.tarea);
    this.tarea = new Tarea();
  }
}

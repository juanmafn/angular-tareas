import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/modelo/tarea.model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input()
  tarea: Tarea;

  @Output('borrarTarea')
  borrarEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  obtenerColorTarea() {
    switch (this.tarea.tipo) {
      case 'todo':
        return 'bg-warning text-dark';
      case 'doing':
        return 'bg-primary text-white';
      case 'done':
        return 'bg-success text-white';
      default:
        return 'bg-light text-dark';
    }
  }

  editarTarea() {}

  borrarTarea() {
    this.borrarEvent.emit(this.tarea.id);
  }
}

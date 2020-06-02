import { Guid } from "guid-typescript";

export class Tarea {
    id: string;
    titulo: string;
    descripcion: string;
    tipo: string;

    constructor() {
        this.id = Guid.raw();
        this.titulo = null;
        this.descripcion = null;
        this.tipo = 'todo';
    }

    static newInstance(titulo: string, descripcion: string, tipo: string): Tarea {
        const tarea = new Tarea();
        tarea.titulo = titulo;
        tarea.descripcion = descripcion;
        tarea.tipo = tipo;
        return tarea;
    }
}
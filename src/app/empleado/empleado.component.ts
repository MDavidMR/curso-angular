import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Componente empleados: ';
    public empleado: Empleado;
    public trabajadores:Array<Empleado>;

    constructor() {
        this.empleado = new Empleado('Moises', 31, 'Desarrollador', true);
        this.trabajadores = [
            new Empleado('Moises', 31, 'Desarrollador', true),
            new Empleado('David', 32, 'QA', false),
            new Empleado('Morales', 33, 'PM', true)
        ]
    }

    ngOnInit() {
        console.log(this.trabajadores);

    }

}
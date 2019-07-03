import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent {
    public titulo = 'Componente empleados: ';
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajadorExterno: boolean;
    public color: string;
    public colorSeleccionado: string;

    constructor() {
        this.empleado = new Empleado('Moises', 31, 'Desarrollador', false);
        this.trabajadores = [
            new Empleado('Rivera', 31, 'Developer', true),
            new Empleado('David', 32, 'QA', false),
            new Empleado('Morales', 33, 'PM', true)
        ]

        this.trabajadorExterno = false;
        this.color = 'blue';
        this.colorSeleccionado = '#ccc'
    }

    ngOnInit() {
        console.log(this.trabajadores);

    }

    cambiarExterno(externo) {
        this.trabajadorExterno = externo;
    }

    logColorSeleccionado() {
        console.log(this.colorSeleccionado);
    }

}
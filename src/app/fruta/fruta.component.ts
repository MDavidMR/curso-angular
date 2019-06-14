import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandía';

    public nombre: string = 'Moises';
    public edad: number = 55;
    public mayorDeEdad: boolean = true;
    public trabajos: Array<string> = ['carpintero', 'albañil', 'fontanero'];
    public info: Array<any> = [66, 'albañil', 'fontanero'];
    public comodin: any = 'Comodin'

    constructor() {
        console.log(this.nombre);
        console.log(this.info);
        console.log(this.trabajos)

    }

    ngOnInit() {
        this.cambiarNombre();
        this.cambiarEdad(14);
        // alert(this.nombre + ' ' + this.edad);

        var uno = 8;
        var dos = 15;

        if (uno === 8) {

            let uno = 3;
            var dos = 88;
            console.log("Dentro del IF " + uno);
        }
        console.log("Fuera  del IF " + uno);

    }

    cambiarEdad(arg0: number) {
        this.edad = arg0;
    }
    cambiarNombre() {
        this.nombre = "David";
    }

    holaMundo() {
        alert('Hola mundo');
    }
}
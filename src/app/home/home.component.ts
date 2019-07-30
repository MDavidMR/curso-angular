import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent {
    public titulo = 'Página principal';
    public listado_ropa: Array<string>;
    public prendaNueva: string;
    public fecha:Date;

    constructor(
        private _ropaService: RopaService
    ) {
        this.fecha = new Date();
     }

    ngOnInit() {
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    agregarPrenda() {
        this._ropaService.addRopa(this.prendaNueva);
        this.prendaNueva = "";
    }

    eliminarPrenda(index:number) {
        this._ropaService.deleteRopa(index);
    }

}

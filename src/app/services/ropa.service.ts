import { Injectable } from '@angular/core';


@Injectable()
export class RopaService {

    public nombrePrenda = 'Pantalones vaqueros';
    public coleccionRopa = ['Pantalones blancos', 'Camiseta roja'];

    prueba(nombrePrenda) {
        return nombrePrenda;
    }

    addRopa(nombrePrenda) {
        this.coleccionRopa.push(nombrePrenda);
        return this.getRopa();
    }

    deleteRopa(index: number) {
        this.coleccionRopa.splice(index, 1);
    }

    getRopa() {
        return this.coleccionRopa;
    }

}
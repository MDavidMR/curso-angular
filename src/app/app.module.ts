import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { routing, appRoutingProvider } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    routing //Módulo de rutas
  ],
  providers: [
    appRoutingProvider //Servicio que hace que el router se lance y funcionen ls rutas cuando se llamen
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

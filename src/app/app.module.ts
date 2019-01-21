import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

//Rutas
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
    UsuarioNuevoComponent,
    UsuarioDetalleComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

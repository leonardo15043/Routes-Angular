import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: "<h2>Editar Usuario<h2>"
})
export class UsuarioEditarComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe( params => {
      console.log("Rutas Hija");
      console.log(params);
    });
  }

}

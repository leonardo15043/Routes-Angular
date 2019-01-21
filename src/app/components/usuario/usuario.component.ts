import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      console.log("Rutas Padre");
      console.log(params);
    });
    
  }

}

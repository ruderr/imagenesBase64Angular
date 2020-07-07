import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../publicaciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publicaciones: any;

  constructor(private publicacionesService: PublicacionesService) {
    this.publicacionesService.obtenerPublicacion().subscribe(resultado => {
      this.publicaciones = resultado.publicacion;
    })
   }

  ngOnInit(): void {
  }

}

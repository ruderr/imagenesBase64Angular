import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../publicaciones.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  titulo: any;
  texto: any;
  imagenSeleccionada: any;
  imagen: any;

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
  }

  agregarPublicacion() {
    console.log('Evento agregar publicación');
    let identificador = '5edee15bd00b484088b31388';

    var publicacion: any = {
      Titulo: this.titulo,
      Texto: this.texto,
      IdPersona: identificador,
      Imagen: this.imagen
    }

    this.publicacionesService.agregarPublicacion(publicacion).subscribe(resultado => {
      alert('Operación Exitosa');
    })
  }

  onFileChange(event) {
    console.log('Evento imagen');
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagen = reader.result.toString().split(',')[1];
        console.log(file.name);
        console.log(file.type);
        console.log(reader.result.toString().split(',')[1]);
        this.imagenSeleccionada = reader.result.toString().split(',')[1];
      };
    }
  }

  clearFile(){

  }

}

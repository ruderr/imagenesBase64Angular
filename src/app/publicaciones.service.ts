import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private httpClient: HttpClient) { }

  agregarPublicacion(publicacion: any): Observable<any> {
    let json = JSON.stringify(publicacion);
    let headers = new HttpHeaders().set('Content-Type', 'Application/json');
    return this.httpClient.post('http://localhost:3000/publicacion', json, { headers: headers })
  }

  obtenerPublicacion(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/publicacion');
  }
}

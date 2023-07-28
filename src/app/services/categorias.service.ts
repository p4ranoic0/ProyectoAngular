import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  constructor(private http: HttpClient) { }

  categoriasSelect(){
    const ruta = "https://servicios.campus.pe/categorias.php";
    return this.http.get(ruta);
  }
}

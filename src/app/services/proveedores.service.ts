import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http: HttpClient) { }

  proveedoresSelect(){
    const ruta = "https://servicios.campus.pe/proveedores.php";
    return this.http.get(ruta);
  }
}

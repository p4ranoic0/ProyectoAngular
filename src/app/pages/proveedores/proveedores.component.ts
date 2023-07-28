import { Proveedor } from 'src/app/entities/proveedor';
import { ProveedoresService } from './../../services/proveedores.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  mensaje = 'Sólo sé que nada sé';
  listaProveedores: Proveedor[] = [];
  p: number = 1;
  order: string = 'nombreempresa';
  reverse: boolean = false;

  proveedoresFilter: any = { nombreempresa: '' };

  constructor(private proveedoresService: ProveedoresService) {}

  ngOnInit(): void {
    this.proveedoresService.proveedoresSelect().subscribe((res) => {
      console.log(res);
      this.listaProveedores = JSON.parse(JSON.stringify(res));
    });
  }

  setOrder(nombreColumna: string) {
    if (this.order == nombreColumna) {
      this.reverse = !this.reverse;
    } else {
      this.reverse = false;
    }
    this.order = nombreColumna;
  }
}

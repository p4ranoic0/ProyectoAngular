import { Component, Input } from '@angular/core';
import { ItemCarrito } from 'src/app/entities/ItemCarrito';
import { Categoria } from 'src/app/entities/categoria';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  @Input() categoriaX: Categoria | undefined;

  listaProductos: Producto[] | undefined;

  constructor(private productosService: ProductosService) {}

  ngOnChanges(): void {
    //console.log(this.categoriaX);
    this.productosService
      .productosSelect(this.categoriaX?.idcategoria)
      .subscribe((res) => {
        //console.log(res);
        this.listaProductos = JSON.parse(JSON.stringify(res));
      });
  }

  agregarCarrito(item: Producto) {
    let iCarrito: ItemCarrito = {
      idproducto: item.idproducto,
      nombre: item.nombre,
      precio: Number(item.precio),
      cantidad: 1,
    };
    if (localStorage.getItem('carrito') === null) {
      let carrito: ItemCarrito[] = [];
      carrito.push(iCarrito);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito = JSON.parse(carritoStorage);
      let index = -1;
      for (let i = 0; i < carrito.length; i++) {
        let itemC: ItemCarrito = carrito[i];
        if (iCarrito.idproducto === itemC.idproducto) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        carrito.push(iCarrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
      } else {
        let itemCarrito: ItemCarrito = carrito[index];
        itemCarrito.cantidad!++;
        carrito[index] = itemCarrito;
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
    }
  }
}

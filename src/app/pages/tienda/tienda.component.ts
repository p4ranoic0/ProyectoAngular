import { Component } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent {
  listaCategorias: Categoria[] | undefined;
  itemElegido: Categoria | undefined;
  constructor(private categoriasService: CategoriasService) {}
  ngOnInit(): void {
    this.categoriasService.categoriasSelect().subscribe((res) => {
      //console.log(res);
      this.listaCategorias = JSON.parse(JSON.stringify(res));
    });
  }
  seleccionarCategoria(itemSeleccionado: Categoria) {
    //console.log(itemSeleccionado);
    this.itemElegido = itemSeleccionado;
  }
}

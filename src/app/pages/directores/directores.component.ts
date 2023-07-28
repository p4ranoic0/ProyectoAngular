import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Director } from 'src/app/entities/director';
import { DirectoresService } from 'src/app/services/directores.service';

@Component({
  selector: 'app-directores',
  templateUrl: './directores.component.html',
  styleUrls: ['./directores.component.css'],
})
export class DirectoresComponent {
  listaDirectores: Director[] | undefined;
  directorActualizar: Director | undefined;
  directorEliminar: Director | undefined;

  directoresInsertForm = new FormGroup({
    nombres: new FormControl(),
    peliculas: new FormControl(),
  });

  directoresUpdateForm = new FormGroup({
    codigo: new FormControl(),
    nombres: new FormControl(),
    peliculas: new FormControl(),
  });

  constructor(private directorsService: DirectoresService) {}

  ngOnInit(): void {
    this.directorsService.directoresSelect().subscribe((res) => {
      console.log(res);
      this.listaDirectores = JSON.parse(JSON.stringify(res));
    });
  }

  directoresInsert(values: any) {
    this.directorsService
      .directoresInsert(values.nombres, values.peliculas)
      .subscribe((res) => {
        console.log(res);
        this.ngOnInit();
        this.directoresInsertForm.reset();
      });
  }

  editarDirector(item: Director) {
    this.directorActualizar = item;
  }
  directoresUpdate(values: any) {
    this.directorsService
      .directoresUpdate(values.codigo, values.nombres, values.peliculas)
      .subscribe();
  }
  eliminarDirector(item: Director) {
    this.directorEliminar = item;
  }

  directoresDelete() {
    this.directorsService
      .directoresDelete(this.directorEliminar!.iddirector!)
      .subscribe();
    this.ngOnInit();
  }
}

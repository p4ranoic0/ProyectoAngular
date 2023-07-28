import { Component } from '@angular/core';
import { Empleado } from 'src/app/entities/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  listaEmpleados: Empleado[] | undefined;

  constructor(private empleadosService: EmpleadosService){}
  ngOnInit(): void{
    this.empleadosService.empleadosSelect().subscribe(
      (res) => {
        console.log(res);
        this.listaEmpleados = JSON.parse(JSON.stringify(res));
      }
    )
  }
}

import { Component } from '@angular/core';
import { Cliente } from 'src/app/entities/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  listaClientes: Cliente[] = [];
  order: string = 'nombres';
  p: number = 1;
  reverse: boolean = false;

  clientesFilter: any = { nombres: '' };
  constructor(private clientesService: ClientesService) {}
  ngOnInit(): void {
    this.clientesService.clientesAll().subscribe((res) => {
      console.log(res);
      this.listaClientes = JSON.parse(JSON.stringify(res));
    });
  }
}

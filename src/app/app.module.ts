import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { EnviosComponent } from './home/envios/envios.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectoresComponent } from './pages/directores/directores.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    NosotrosComponent,
    NoticiasComponent,
    MainBannerComponent,
    MainNavComponent,
    ProyectosComponent,
    ProveedoresComponent,
    TiendaComponent,
    EmpleadosComponent,
    InicioComponent,
    ProductosComponent,
    EnviosComponent,
    ClientesComponent,
    CarritoComponent,
    DirectoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    OrderModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

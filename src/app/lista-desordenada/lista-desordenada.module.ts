import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDesordenadaComponent } from './lista-desordenada.component';
import { ListaDesordenadaRoutingModule } from './lista-desordenada-routing.module';

@NgModule({
  declarations: [ListaDesordenadaComponent],
  imports: [CommonModule, ListaDesordenadaRoutingModule],
})
export class ListaDesordenadaModule {}

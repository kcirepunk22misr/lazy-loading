import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaOrdenadaComponent } from './lista-ordenada.component';
import { ListaOrdenadaRoutingModule } from './lista-ordenada-routing.module';

@NgModule({
  declarations: [ListaOrdenadaComponent],
  imports: [CommonModule, ListaOrdenadaRoutingModule],
})
export class ListaOrdenadaModule {}

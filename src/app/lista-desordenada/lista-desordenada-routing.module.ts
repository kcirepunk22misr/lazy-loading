import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDesordenadaComponent } from './lista-desordenada.component';

const listarDesordenadaRouing: Routes = [
  {
    path: '',
    component: ListaDesordenadaComponent,
    data: { lista: 'Desordenada' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(listarDesordenadaRouing)],
  exports: [RouterModule],
})
export class ListaDesordenadaRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaOrdenadaComponent } from './lista-ordenada.component';

/**
 * Como lazy loading cada modulo debe tener su propia ruta
 * no las diferencia de las demas, se defina como siempre se a echo
 * la unica diferencia es que en vez de forRoot se coloca el forChild
 * que yo solamente se puede tener una ruta principal en tu aplicacion
 * y puedes tener cuanta quieras de hijas
 */
const listaOrdenadaRouting: Routes = [
  {
    path: '',
    component: ListaOrdenadaComponent,
    // Con la propiedad data, extraemos ese datos en los
    // evento del router para cambiar el titulo dinamicamente
    data: { lista: 'Ordenada' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(listaOrdenadaRouting)],
  exports: [RouterModule],
})
export class ListaOrdenadaRoutingModule {}

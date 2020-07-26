import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * La propiedad loadChildren es la que se encargar de hacer la magia
 * de cargar los modulos por rutas especifica, la manera en la que se
 * importa es una de las caracteristica del stack de javascript moderna
 * la cual carga los modulo de forma perezosa osea, que solo lo cargar
 * si es necesarip, y solo carga el modulo que especifico en la ruta
 */
const routes: Routes = [
  {
    path: 'lista-ordenada',
    loadChildren: () =>
      import('./lista-ordenada/lista-ordenada.module').then(
        (m) => m.ListaOrdenadaModule
      ),
  },
  {
    path: 'lista-desordenada',
    loadChildren: () =>
      import('./lista-desordenada/lista-desordenada.module').then(
        (m) => m.ListaDesordenadaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

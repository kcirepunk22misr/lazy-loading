import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  // Bonus cambiar titulo dinamicamente
  title = 'lazy-loading';
  pageTitle: Subscription;
  lista: string;

  constructor(private router: Router, private pagTitle: Title) {
    /**
     * Nos suscribimos al observable que retorna la data como tal
     */
    this.pageTitle = this.setTitle().subscribe(
      ({ lista }: { lista: string }) => {
        this.lista = lista;
        this.pagTitle.setTitle(`LazyLoading App - ${lista}`);
      }
    );
  }

  ngOnDestroy() {
    // Nos desuscribimos cuando se elimine el compontente
    // para evitar fuga de memoria
    this.pageTitle.unsubscribe();
  }

  setTitle() {
    /**
     * La importacion del router trae los evento de la navegacion
     * y en los routing de la lista-ordenada y lista desordenada
     * declaramos una propiedad data donde le asignamos el tipo de lista
     * y aqui los extraemos
     */
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}

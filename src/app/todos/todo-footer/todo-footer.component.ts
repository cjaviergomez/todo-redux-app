import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.FiltrosValidos = 'todos';
  filtros: actions.FiltrosValidos[] = ['todos', 'pendientes', 'completados'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: actions.FiltrosValidos): void {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }

  borrarCompletados(): void {
    this.store.dispatch(borrarCompletados());
  }
}

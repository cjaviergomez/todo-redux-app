import { ActionReducerMap } from '@ngrx/store';

// Modelos o tipos
import { Todo } from './todos/models/todo.model';
import { FiltrosValidos } from './filtro/filtro.actions';

// Reducers
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filtro: FiltrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
};

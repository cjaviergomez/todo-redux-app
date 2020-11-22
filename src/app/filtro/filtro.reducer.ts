import { createReducer, on } from '@ngrx/store';
import { FiltrosValidos, setFiltro } from './filtro.actions';

export const initialState: FiltrosValidos = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}

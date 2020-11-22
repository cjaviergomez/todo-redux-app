import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Derrotar a Thanos'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crearTODO, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.borrarCompletados, (state) =>
    state.filter((todo) => !todo.completado)
  ),
  on(actions.borrarTODO, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),

  on(actions.editarTODO, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),

  on(actions.marcarTodos, (state, { completado }) =>
    state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    })
  )
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}

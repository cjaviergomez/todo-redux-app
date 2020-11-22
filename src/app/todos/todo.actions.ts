import { createAction, props } from '@ngrx/store';

export const borrarCompletados = createAction('[TODO] BorrarCompletados Todo');

export const crearTODO = createAction(
  '[TODO] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const editarTODO = createAction(
  '[TODO] Editar Todo',
  props<{ id: number; texto: string }>()
);

export const borrarTODO = createAction(
  '[TODO] Borrar Todo',
  props<{ id: number }>()
);

export const marcarTodos = createAction(
  '[TODO] MarcarTodos Todo',
  props<{ completado: boolean }>()
);

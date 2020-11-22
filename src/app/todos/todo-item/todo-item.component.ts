import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { toggle, editarTODO, borrarTODO } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  checkCompletado: FormControl;
  inputText: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompletado = new FormControl(this.todo.completado);
    this.inputText = new FormControl(this.todo.texto, Validators.required);

    this.checkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  editarTodo(): void {
    this.editando = true;
    this.inputText.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  /**
   * Método que se ejecuta cuando se sale de un item (input)
   */
  terminarEdicion(): void {
    this.editando = false;

    if (this.inputText.invalid || this.inputText.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(
      editarTODO({ id: this.todo.id, texto: this.inputText.value })
    );
  }

  borrarTodo(): void {
    this.store.dispatch(borrarTODO({ id: this.todo.id }));
  }
}

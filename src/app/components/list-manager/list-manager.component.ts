import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item';
import { TodoListService } from '../../services/todo-list.service';
import * as fromGlobalStore from '../../reducers/global-config.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent {

  todoList: TodoItem[];

  constructor(
    private todoListService: TodoListService,
    private globalStore: Store<fromGlobalStore.State>
    ) {
    let globalStoreSelector = fromGlobalStore.globalConfigFeatureKey as any;
    this.globalStore.select(globalStoreSelector)
      .subscribe(res => {
        this.todoList = JSON.parse(JSON.stringify(res.todoList));
      });
   }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  removeItem(item) {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes) {
    this.todoListService.updateItem(item, changes);
  }
}

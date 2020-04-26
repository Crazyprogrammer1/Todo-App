import { addTodoItem } from './../actions/global-configs.actions';
import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import * as fromGlobalStore from '../reducers/global-config.reducer';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[];

  constructor(
    private globalStore: Store<fromGlobalStore.State>,
    ) {
    let globalStoreSelector = fromGlobalStore.globalConfigFeatureKey as any;
    this.globalStore.select(globalStoreSelector)
      .subscribe(res => {
        this.todoList = JSON.parse(JSON.stringify(res.todoList));
      });
  }

  saveList() {
    this.globalStore.dispatch(addTodoItem({data : this.todoList}));
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: TodoItem) {
    this.todoList.push(item);
    this.saveList();
  }

  updateItem(item: TodoItem, changes) {
    this.todoList.forEach((listItem, listIndex) => {
      if(listItem.title == item.title) {
        const index = listIndex;
        this.todoList[index] = { ...item, ...changes };
        this.saveList();
      }
    })
  }

  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}

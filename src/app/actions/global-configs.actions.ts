import { TodoItem } from './../interfaces/todo-item';
import {createAction, props} from '@ngrx/store';

export enum GlobalConfigsActionTypes {
  addTodoItem = '[GlobalConfigs] Add TodoItem',
  ResetGlobalConfig = '[GlobalConfigs] Reset Global Config',
}


export const addTodoItem = createAction<GlobalConfigsActionTypes,
  {}>(GlobalConfigsActionTypes.addTodoItem, props<{ item: TodoItem }>());
  export const resetGlobalConfig = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.ResetGlobalConfig, props<{}>());
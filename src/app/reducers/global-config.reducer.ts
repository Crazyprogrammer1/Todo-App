import { TodoItem } from './../interfaces/todo-item';
import { Action } from '@ngrx/store';
import { GlobalConfigsActionTypes } from '../actions/global-configs.actions';

export const globalConfigFeatureKey = 'globalConfig';

export interface State {
  todoList: TodoItem[];
}

export const initialState: State = {
  todoList: []
};


export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case GlobalConfigsActionTypes.addTodoItem:
      return { ...state, todoList: (action as any).data } as State;
    case GlobalConfigsActionTypes.ResetGlobalConfig:
      return { ...initialState } as State;
    default:
      return state;
  }
}

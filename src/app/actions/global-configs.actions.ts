import { TodoItem } from './../interfaces/todo-item';
import {createAction, props} from '@ngrx/store';

export enum GlobalConfigsActionTypes {
  addTodoItem = '[GlobalConfigs] Add TodoItem',
  ResetGlobalConfig = '[GlobalConfigs] Reset Global Config',
  updateResumePageBounds = '[GlobalConfigs] Update Resume Page Bounds',
  updateUserRegistrationKey = '[GlobalConfigs] Update User registration key',
  updateUserResetPasswordData = '[GlobalConfigs] Update User Password rest data'
}


export const addTodoItem = createAction<GlobalConfigsActionTypes,
  {}>(GlobalConfigsActionTypes.addTodoItem, props<{ item: TodoItem }>());
  export const resetGlobalConfig = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.ResetGlobalConfig, props<{}>());
  export const updateResumePageBounds = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.updateResumePageBounds, props<{resumePageBounds: any}>());
  export const updateUserRegistrationKey = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.updateUserRegistrationKey, props<{key: string}>());
  export const updateUserResetPasswordData = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.updateUserResetPasswordData, props<{data : any}>());

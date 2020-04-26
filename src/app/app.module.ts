import { reducers } from './reducers/index';
import { environment } from './../environments/environment.prod';
import { globalConfigFeatureKey } from './reducers/global-config.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './components/input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ListManagerComponent } from './components/list-manager/list-manager.component';
import { ActionReducer, StoreModule, MetaReducer } from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import * as fromGlobalConfig from './reducers/global-config.reducer';
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: [globalConfigFeatureKey], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromGlobalConfig.globalConfigFeatureKey, fromGlobalConfig.reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

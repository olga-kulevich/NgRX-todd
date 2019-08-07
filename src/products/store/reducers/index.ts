import { ActionReducerMap, createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzasState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

//pizzas state
export const getPizzasState = createSelector(
  getProductsState,
(state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzasState,
  fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities: any) => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getPizzasLoaded = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoaded
);

export const getPizzasLoading = createSelector(
  getPizzasState,
  fromPizzas.getPizzasLoading
);

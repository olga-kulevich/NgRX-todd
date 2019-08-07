import * as fromPizzas from '../actions/pizzas.action'
import {Pizza} from "../../models/pizza.model";

export interface PizzasState {
  entities: {[id: number]: Pizza};
  data: Pizza[],
  loaded: boolean,
  loading: boolean
}

export const initialState: PizzasState = {
  data: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzasState {

  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      }
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload;
      const entities =  pizzas.reduce((entities: {[id: number]: Pizza}, pizza) => {
        return {
          ...entities,
          [pizza.id]: pizza
        }
      }, {...state.entities});
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    }
  }
  return state;
}

export const getPizzasLoading = (state: PizzasState) => {
  state.loading;
};

export const getPizzasLoaded = (state: PizzasState) => {
  state.loaded;
};

export const getPizzasEntities = (state: PizzasState) => {
  state.entities;
};

import { createStore } from "redux";
import { ICartState } from "./modules/cart/types";
import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./modules/rootReducer";

// informação disponivel em toda a aplicação
export interface IState {
  cart: ICartState
}

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;

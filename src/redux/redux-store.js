import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import supportReducer from "./supportReducer";

let reducers = combineReducers({
  usersReducer,
  dialogsReducer,
  supportReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

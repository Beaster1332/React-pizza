import { combineReducers, legacy_createStore as createStore } from "redux";
import itemsFieldReducer from "./itemsFieldReducer";

const reducers = combineReducers({
    itemsFieldReducer
});

const store = createStore(reducers);

export default store;
import { combineReducers } from "redux";
import ingredientReducer from "./ingredients";
import recipesReducer from "./recipes";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientReducer
});

export default rootReducer;

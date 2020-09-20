import { ADD_RECIPE, SET_RECIPES } from "../constants/actionTypes";

const initialState = [{ name: 'Omelette' }];
const recipesReducer = (recipes = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat({ name: action.name });
    case SET_RECIPES:
      return action.recipes;
  }
  return recipes;
};

export default recipesReducer;

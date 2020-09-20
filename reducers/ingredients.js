import { ADD_INGREDIENT, SET_INGREDIENTS } from "../constants/actionTypes";

const initialState = [{ recipe: 'Omelette', name: 'Egg', quantity: 2 }];
const ingredientReducer = (ingredients = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity
      };
      return ingredients.concat(newIngredient);
    case SET_INGREDIENTS:
      return action.ingredients;
  }
  return ingredients;
};

export default ingredientReducer;

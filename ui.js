import $ from 'jquery';
import { addIngredient } from './actions/ingredient';
import { addRecipe } from './actions/recipes';
import store from './store';
function updateUI() {
  const { recipes, ingredients } = store.getState();
  const renderRecipe = (recipe) => `<li>${recipe.name}</li>`;
  const renderIngredients = (ingredient) => `<li>
  <span>Recipe: ${ingredient.recipe}</span>
  <span>Name : ${ingredient.name}</span>
  <span>Quantity: ${ingredient.quantity}</span>
  </li>`;
  $('.recipes > #recipeList').html(recipes.map(renderRecipe));
  $('.recipes > #ingredientsList').html(ingredients.map(renderIngredients));
}

function handleAdd() {
  const $recipeName = $('.recipes > #recipeInput');
  store.dispatch(addRecipe($recipeName.val()));
  $recipeName.val('');
}
function handleAddIngredient() {
  const $ingredient = $('.recipes > #ingredientRecipe');
  const $ingredientName = $('.recipes > #ingredientName');
  const $ingredientQnty = $('.recipes > #ingredientQuantity');
  if (!$ingredient.val() || !$ingredientName.val() || !$ingredientQnty.val()) return;
  store.dispatch(addIngredient($ingredient.val(), $ingredientName.val(), $ingredientQnty.val()));
  $ingredient.val('');
}


export default function loadUI() {
  $('#app').append(`
<div class="recipes">
<h2>Recipes:</h2>
<ul id="recipeList"></ul>
<h2>Ingredients</h2>
<ul id="ingredientsList"></ul>
<h3>Add Recieps</h3>
<input placeholder="Recipe" id="recipeInput" type="text" />
<button id="addRecipeBtn">Add</button>
<br/>
<h3>Add Ingredients</h3>
<input placeholder="Recipe name" id="ingredientRecipe" type="text" />
<input placeholder="Ingredient name" id="ingredientName" type="text" />
<input placeholder="Ingredient quantity" id="ingredientQuantity" type="text" />
<button id="addIngredientBtn">Add Ingredient</button>
</div>
`);

  const unsubscribe = store.subscribe(updateUI);

  $(document).on('click', '.recipes > #addRecipeBtn', handleAdd);
  $(document).on('click', '.recipes > #addIngredientBtn', handleAddIngredient);
  updateUI();

  $(window).on('beforeunload', function () {
    unsubscribe();
    return '';
  });
}

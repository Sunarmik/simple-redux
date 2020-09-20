import axios from 'axios';
import { setIngredients } from '../actions/ingredient';
import { setRecipes } from '../actions/recipes';
import { FETCH_RECIPES } from "../constants/actionTypes";
import db from '../db.json';
const URL = 'https://s3.amazonaws.com/500tech-shared/db.json';


const fetchData = (url, type, callback) => {
  axios.get(url)
    .then(callback)
    .catch((err) => {
      if (type === FETCH_RECIPES) {
        callback({ data: db }); //fallback to default data just for demo
      }
      console.log(`ERROR while fetching data: ${err}`);
    });
};

const apiMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === FETCH_RECIPES) {
    fetchData(URL, action.type, ({ data }) => {
      dispatch(setRecipes(data.recipes));
      dispatch(setIngredients(data.ingredients));
    });
  }
  next(action);
};

export default apiMiddleware;

import { Route, Switch } from 'react-router-dom';
import DoneRecipes from './components/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './components/Profile';
import Login from './pages/Login';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import Recipes from './pages/Recipes';
// import RecipesProvider from './context/RecipesProvider';

function App() {
  return (
    // <RecipesProvider>
    <Switch>
      <Route exact path="/recipes-app" component={ Login } />
      <Route exact path="/recipes-app/meals" component={ Recipes } />
      <Route exact path="/recipes-app/drinks" component={ Recipes } />
      <Route exact path="/recipes-app/meals/:id" component={ RecipeDetails } />
      <Route exact path="/recipes-app/drinks/:id" component={ RecipeDetails } />
      <Route exact path="/recipes-app/profile" component={ Profile } />
      <Route exact path="/recipes-app/done-recipes" component={ DoneRecipes } />
      <Route exact path="/recipes-app/favorite-recipes" component={ FavoriteRecipes } />
      <Route
        exact
        path="/recipes-app/meals/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route
        exact
        path="/recipes-app/drinks/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route path="/recipes-app/profile" component={ Profile } />
    </Switch>
    // </RecipesProvider>
  );
}

export default App;

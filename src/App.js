import Categories from './components/Categories';
import Meals from './components/Meals';
import { Switch, Route } from 'react-router-dom';
import MealsDetails from './MealsDetails';
import './App.css';


const App = ()=>{
  
  
    return (
      <Switch>
        <Route exact path ="/" component = {Categories} />
        <Route exact path = "/:category" component = {Meals}/>
        <Route path = "/:category/:idMeal" component = {MealsDetails} />
      </Switch>
    )
  
}

export default App;
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import VegRecipe from './components/VegRecipe';
import PopularRecipies from './components/PopularRecipies';
import Nonveg from './components/Nonveg'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/veg-recipe' element={<VegRecipe/>}/>
          <Route path='/popular-recipe' element={<PopularRecipies/>}/>
          <Route path='/nonveg-recipe' element={<Nonveg/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

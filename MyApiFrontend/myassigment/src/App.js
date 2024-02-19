import Home from './components/home'
import Navbar from './components/navbar';
import Countries from './components/countries';
import Weather from './components/weather';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventInfo from './components/eventinfo';
function App() {
  return (
    <BrowserRouter>
    <div className="App">


      
      
      <Navbar/>
      <Routes>
        <Route exact path= "/" element = {<Home/>}></Route>
        <Route exact path= "home" element = {<Home/>}></Route>
        <Route exact path= "weather" element = {<Weather/>}></Route>
        <Route exact path= "countries" element = {<Countries/>}></Route>
        <Route exact path= "eventinfo" element = {<EventInfo/>}></Route>

      </Routes>


    </div>
    </BrowserRouter>
  );
}

export default App;

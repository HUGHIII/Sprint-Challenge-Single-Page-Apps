import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';
import SearchForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage';



export default function App() {
  return (
    <main>
      <Header />

      <Route exact path='/'>
        <WelcomePage />
        </Route>

      <Route path='/characters'>
        <CharacterList/>
        </Route>
      
    </main>
  );
}



import React from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {createGlobalStyle} from 'styled-components'
import Home from './components/Home/index'
import Perfil from './components/Perfil/index'

const GlobalStyle = createGlobalStyle`
    body{
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
        font-family: ${props => props.font};
    }
`

const Navigation = () =>{
  return(
    <nav>
      <NavLink to='/' exact activeClassName='active'>Home</NavLink>
      <NavLink to='/perfil' activeClassName='active'>Perfil</NavLink>
    </nav>
  )
}

const App = () => {
  return (
    <div className="container">
      <GlobalStyle font="'Open Sans', sans-serif"/>
      <BrowserRouter>
        <Navigation />
        <Route path='/' exact render={Home} />
        <Route path='/perfil' render={Perfil} />
      </BrowserRouter>
    </div>
  );
}

export default App;

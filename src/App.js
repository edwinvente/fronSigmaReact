import React from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
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
      <a className="float">
          <NavLink to='/perfil' activeClassName='active'>
            <i className="fa fa-user my-float"></i>
          </NavLink>
        </a>
    </nav>
  )
}

const App = () => {
  return (
    <div className="container">
      <GlobalStyle font="'Open Sans', sans-serif"/>
      <BrowserRouter>
        <Route path='/' exact render={Home} />
        <Route path='/perfil' render={Perfil} />
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;

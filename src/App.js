import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Home from './components/Home/index'
import Perfil from './components/Perfil/index'
import Navegacion from './components/Navegacion/index'
import Usuarios from './components/Usuarios/index'

const GlobalStyle = createGlobalStyle`
    body{
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
        font-family: ${props => props.font};
    }
`
const App = () => {
  return (
    <div className="container">
      <GlobalStyle font="'Open Sans', sans-serif"/>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/perfil' component={Perfil} />
          <Route path='/usuarios' component={Usuarios} />
        </Switch>
        <Navegacion />
      </BrowserRouter>
    </div>
  );
}

export default App;

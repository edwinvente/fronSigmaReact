import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navegacion = () => {
    return(
        <nav className='float'>
            <NavLink to='/' activeClassName='active'>
                    <i className="fa fa-home my-float2"></i>
            </NavLink>
            <NavLink to='/perfil' activeClassName='active'>
                    <i className="fa fa-user my-float"></i>
            </NavLink>
            <NavLink to='/usuarios' activeClassName='active'>
                    <i className="fa fa-file my-float"></i>
            </NavLink>
        </nav>
    )
}

export default Navegacion
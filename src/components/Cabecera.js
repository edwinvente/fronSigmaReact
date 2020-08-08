import React from 'react'
import logo from './Home/sigma-logo.png';

const Cabecera = ({ title, description }) => {
    return(
        <div>
            <div className='row ustify-cjontent-md-center mt-5'>
                <img 
                    className='logo' 
                    src={logo}
                    alt='Sigma Studios'
                />
            </div>

            <div className='row mt-4'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <h1 className='text-center mb-4 title'>{title}</h1>
                    <div className='p-2'> {description} </div>
                </div>
            </div>
        </div>
    )
}

export default Cabecera
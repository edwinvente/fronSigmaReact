import React from 'react'
import imagen from '../Home/sigma-image.png';
import Formulario from '../Formulario/index'
import Cabecera from '../Cabecera'


const Home = () => {
    
    const title = 'Prueba de desarrollo Sigma'
    const mesagge = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum <br /> ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N.   los mezcló de tal manera que logró hacer un libro.'
    
    return(
        <div>
            <Cabecera 
                title={title}
                description={mesagge}
            />
            <div className='container p-5'>
                <div className='row'>
                <div className='col-md-6'>
                    <img 
                        className='imagen' 
                        src={imagen}
                        alt='Sigma Studios'
                    />
                </div>
                <div className='col-md-6'>
                    <Formulario />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
import React, {useState, useEffect} from 'react'
import Cabecera from '../Cabecera'

const Perfil = () => {

    const ninja = {
        width:'50%',
        borderRadius:'50%'
    }

    return(
        <React.Fragment>
        <Cabecera 
            title='Edwin Caicedo Venté'
            description='Web Developer PHP y JAVASCRIPT'
        />
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <p>
                        Me gusta trabajar en equipo,esto ayuda a nuestro crecimiento personal y profesional, soy una persona alegre y apasionada por lo que hace, me gustan los retos y amo la programación...
                    </p>
                    <img 
                        src='https://somoscreandola.com/storage/providers/July2020/J9uRtNGBVzirOEJTJJvj.jpg'
                        alt='Edwin Venté'
                        style={ninja}
                    />
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Perfil
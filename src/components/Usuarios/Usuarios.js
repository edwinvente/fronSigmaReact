import React, {useState, useEffect} from 'react'
import Cabecera from '../Cabecera'
import DataTable from 'react-data-table-component'

//const url = window.location.origin
const url = 'http://localhost:8000/api/'

const Usuarios = () => {

    const [usuarios, setData] = useState([])
    const [inFetching, setFetch] = useState(true)

    useEffect(() => {
        console.log(url)
        fetch(url+'test').
                then(res => res.json()).
                then(usuarios => {
                  setData(usuarios.users)
                  setFetch(false)
                }).
                catch(err => {
                    console.log('Hay un error http');
                })
    
      }, [])

    const customStyles = {
        rows: {
            style: {
            minHeight: '72px', // override the row height
            }
        },
        headCells: {
            style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            },
        },
        cells: {
            style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            },
        },
    }

    const columns = [
        {
          name: 'Id',
          selector: 'id',
          sortable: true,
        },
        {
          name: 'Nombre',
          selector: 'name',
          sortable: true,
          right: true,
        },
        {
          name: 'Estado',
          selector: 'state',
          sortable: true,
          right: true,
        },
        {
          name: 'Ciudad',
          selector: 'city',
          sortable: true,
          right: true,
        },
    ]

    const data = usuarios
   
    return(
        <div className='container'>
            <Cabecera 
                title='Lista de developers'
                description='Listado de desarrolladores que se presentaron para la prueba de desarollo web de Sigma'
            />
            
            <div className='container mt-3 justify-content-center'>
                <div className='col-md-12 m-4'>
                    {inFetching 
                    ? <h3>Cargando...</h3>
                    : <DataTable
                        columns={columns}
                        data={data}
                        customStyles={customStyles}
                        pagination
                    />}
                </div>
            </div>

        </div>
    )
}

export default Usuarios
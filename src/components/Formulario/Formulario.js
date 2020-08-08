import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import styled from 'styled-components'
import axios from 'axios'

const Formulario = () => {
  const url = 'http://localhost:8000/api/'

  const [data, setData] = useState({})
  const [deparments, setDeparments] = useState([])
  const [citys, setCity] = useState([])
  const [isFetching, setFetch] = useState(false)

  useEffect(() => {
    fetch(url+'test').
            then(res => res.json()).
            then(data => {
              setData(data)
              console.log(data)
              setFetch(true)
            }).
            catch(err => {
                console.log('Hay un error http');
            })

  }, [])

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (data, e) => {
    handleSave(data)
    e.target.reset()
  }

  const handleSave = (props) =>{
    axios.post(url+`user`, { json: JSON.stringify(props)})
            .then(res => {
                console.log(res);
                console.log(res.data);      
                if(res.data){
                  alert('Registro exitoso')
                }
    }).catch(err => {
      console.log('error')
    }) 
  }

  const handleDeparments = () =>{
      let keys = []
      for (var k in data.departaments) keys.push(k);
      setDeparments(keys)
  }

  const handleTest = (e) => {
    let region = e.target.value
    setCity(data.departaments[region])
  }

  if (!isFetching) {
    return 'Esperando los datos del api...'
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {<div className='container'>
          <p>Departamento*</p>
          <select ref={register({required:true})} name='department' className='form-control' onClick={handleDeparments} onChange={handleTest}>
            <option>Selecciona tu departamento</option>
            {!deparments ? null :  deparments.map((item, i) => (
              <option 
                key={i}
                value={item}
              > 
                {item} 
              </option>
            ))}
          </select>
          {errors.name && <span>seleccionar departamento</span>}
        </div>}
        <div className='container'>
          <p>Ciudad*</p>
          <select ref={register({required:true})} name='city' className='form-control'>
            <option>Selecciona tu ciudad</option>
            {!citys ? null :  citys.map((item, i) => (
              <option 
                key={i}
                value={item}
              > 
                {item} 
              </option>
            ))}
          </select>
          {errors.name && <span>seleccionar ciudad</span>}
        </div>
        <div className='container'>
          <p>Nombre*</p>
          <input ref={register({required:true})} name='name' className='form-control' />
          {errors.name && <span>Por favor ingresa tu nombre</span>}
        </div>
        <div className='container'>
          <p>Correo*</p>
          <input ref={register({required:true})} name='email' className='form-control' />
          {errors.name && <span>Por favor ingresa tu email</span>}
        </div>
        <div className='container'>
          <button className='btn mt-4 text-center' >
            ENVIAR
          </button>
        </div>
      </form>
      {/* {!data.users ? null :  data.users.map((item, i) => (
        <li key={i}> { item.name} - { item.created_at} </li>
      ))} */}
    </div>
  )
}

export default Formulario
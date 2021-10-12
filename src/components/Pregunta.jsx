import React,{useState} from 'react'

const Pregunta = ({guardarPresupuesto,guardarRestante,guardarPregunta}) => {
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)
  const definirPresupuesto = e =>{
    guardarCantidad(parseInt(e.target.value))
  }
  //submit para definir presupuesto
  const agregarPresupuesto = e =>{
    e.preventDefault()

    //Validar
    if(cantidad<1 || isNaN(cantidad)){
      guardarError(true)
      return;
    }
    //validaciones listas
    guardarError(false)

    guardarPresupuesto(cantidad)
    guardarRestante(cantidad)
    guardarPregunta(false)
  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error?<h2 className="alert-danger">Debe llenar el campo</h2>:null}
       <form onSubmit={agregarPresupuesto}>
        <input
        type="number"
        placeholder="coloca tu presupuesto"
        className="u-full-width"
        onChange={definirPresupuesto}
        />
        <input
        type="submit"
        value="Definir tu presupuesto"
        className="u-full-width button-primary"
        /> 
       
       </form> 
    </>
  )
}
export default Pregunta
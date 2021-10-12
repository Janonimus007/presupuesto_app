import React,{useState} from 'react';
import shortid from 'shortid';
const Formulario = ({agregarNuevoGasto}) => {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)
  const agregarGasto =e =>{
    e.preventDefault();
    //validar
    if(cantidad<1 ||isNaN(cantidad)||nombre.trim()===''){
      guardarError(true)
      return;
    }
    guardarError(false)
    //construir el gasto
    const gasto ={
      nombre,
      cantidad,
      id:shortid.generate()
    }
    
    //pasar el gasto al componente principal
    agregarNuevoGasto(gasto)
    //resetear el form
    guardarNombre('')
    guardarCantidad(0)
  }
  return (  
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error?<p className="error">todos los campos son obligatorios</p>:
       null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
        type="text"
        className="u-full-width"
        placeholder="Ej. Transporte"
        value={nombre}
        onChange={e=>guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
        type="number"
        className="u-full-width"
        placeholder="Ej. 300"
        value={cantidad}
        onChange={e=>parseInt(guardarCantidad(e.target.value)) }
        />
      </div>
     <input type="submit" value="Agregar gasto"
      className="u-full-width button-primary" /> 
    </form>
  );
}
 
export default Formulario;
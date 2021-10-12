import React from 'react';
const Gasto = ({gasto}) => {
  return ( <div className="contenedorListado">
        <p className="listado">{gasto.nombre}</p>
        <p className="listadoInferior">{gasto.cantidad}</p>

  </div> );
}
 
export default Gasto;
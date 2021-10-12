import React,{useState} from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta,guardarPregunta]=useState(true)
  const [gastos, guardarGastos] = useState([])
  const agregarNuevoGasto = gasto =>{
    guardarGastos([
      ...gastos,
      gasto
    ])
  }
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header>
      {mostrarpregunta?(
        <Pregunta
        guardarPresupuesto={guardarPresupuesto}
        guardarRestante={guardarRestante}
        guardarPregunta={guardarPregunta}
        />
      ):(

        <div className="row">
        <div className="one-half column">
            <Formulario
            agregarNuevoGasto={agregarNuevoGasto}
            />
        </div>
        <div className="one-half column">
            <Listado
            gastos={gastos}
            />
            <ControlPresupuesto
            presupuesto={presupuesto}
            restante={restante}
            />
        </div>
      </div>
      )}
   
      

    </div>
    
    
  );
}

export default App;

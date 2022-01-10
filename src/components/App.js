import React, { useState } from 'react';
import Formulario from './Formulario';
import Header from './Header';
import '../css/App.css'
import Listado from './Listado';
import { validarPresupuesto } from '../helper';
import ControlPresupuesto from './ControlPresupuesto';
import Total from './Total';

function App() {
  const [isloading, setIsloading] = useState(false);
  const [presupuesto, setPresupuesto] = useState('');
  const [restante, setRestante] = useState('');
  const [gastos, setGastos] = useState({});

  const obtenerPresupuesto = (number) => {
    const resultado = validarPresupuesto(number);

    if (resultado) {
      setPresupuesto(number);
      setRestante(number)
      setIsloading(true);
    }
  };

  const agregarGasto = (gasto) => {
    let objgastos = gastos;
    objgastos[`gasto${Date.now()}`] = gasto;

    restarPrusupuesto(gasto.cantidadGasto);
    setGastos(objgastos);
  }

  const restarPrusupuesto = (cantidad) => {
    let res = Number(cantidad);
    let restan = restante;

    restan -= res;

    setRestante(restan);
  }

  return (
    <div className='App container'>
      <Header
        titulo={"Gasto Semanal"}
      />
      <div className="contenido-principal contenido">
        <div className="row">
          {
          !isloading ? (
              <Total obtenerPresupuesto={obtenerPresupuesto} />
            ) : (
              <>
                <div className='one-half column'>
                  <Formulario agregarGasto={agregarGasto} />
                </div>
                <div className='one-half column'>
                  <Listado gastos={gastos} />
                  <ControlPresupuesto presupuesto={presupuesto} restante={restante}/>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';

function Formulario({agregarGasto}) {
    const nombreGasto = React.createRef();
    const cantidadGasto = React.createRef();

    const CrearGasto = (e) => {
        e.preventDefault();

        const gasto = {
            nombreGasto: nombreGasto.current.value,
            cantidadGasto: cantidadGasto.current.value
        }

        agregarGasto(gasto)
        e.currentTarget.reset();
    }

    return(
        <form onSubmit={CrearGasto}>
            <h2>Agrega tus gastos aquí</h2>
            <div className='campo'>
                <label>Nombre del gasto</label>
                <input ref={nombreGasto} className='u-full-width' type='text' placeholder='Ej. Transporter' />
            </div>
            <div className='campo'>
                <label>Cantidad</label>
                <input ref={cantidadGasto} className='u-full-width' type='number' placeholder='Ej. 300'/>
            </div>
            <input className='button-primary u-full-width' type='submit' value='Agregar' />
        </form>
    )
}

export default Formulario;
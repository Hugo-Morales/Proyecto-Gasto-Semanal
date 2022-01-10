import React from 'react';

function Gasto({gasto}) {
    const { nombreGasto, cantidadGasto } = gasto;

    return (
        <li className='gastos'>
            <p>
                {nombreGasto}
                <span className='gasto'>$ {cantidadGasto}</span>
            </p>
        </li>
    );
}

export default Gasto;
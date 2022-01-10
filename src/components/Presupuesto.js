import React from 'react';

export default function Presupuesto({ presupuesto }) {
    return (
        <div className='alert alert-primary'>
            <p>Presupuesto: ${presupuesto}</p>
        </div>
    )
}
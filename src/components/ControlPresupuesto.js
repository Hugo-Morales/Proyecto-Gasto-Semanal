import React from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';

export default function ControlPresupuesto({ presupuesto, restante }) {
    return (
        <>
            <Presupuesto presupuesto={presupuesto} />
            <Restante presupuesto={presupuesto} restante={restante} />
        </>
    )
}
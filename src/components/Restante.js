import React from 'react';
import { revisarPresupuesto } from '../helper';


export default function Restante({ restante, presupuesto }) {
    return (
        <div className={revisarPresupuesto(presupuesto, restante)}>
            <p>Restante: ${restante}</p>
        </div>
    )
}
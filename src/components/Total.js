import React from 'react';

function Total({ obtenerPresupuesto }) {
    const input = React.createRef();

    const presupuesto = (e) => {
        e.preventDefault();
        obtenerPresupuesto(input.current.value);
    }

    return (
        <form onSubmit={presupuesto} className="form-total">
            <div className=''>
                <label className='total'>Ingrese Presupuesto Total</label>
                <input ref={input} className='u-full-width-total' type='number' placeholder='$1000' />
            </div>
        </form>
    )
}

export default Total;
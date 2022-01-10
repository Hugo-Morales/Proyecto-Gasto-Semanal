import Gasto from './Gasto';

function Listado({ gastos }) {
    return (
        <div className='gastos-realizados'>
            <h2>Listado</h2>
            {
                Object.keys(gastos).map((g, index) => {
                    return (<Gasto
                        key={index}
                        gasto={gastos[g]}
                    />)
                })
            }
        </div>
    )
}

export default Listado;
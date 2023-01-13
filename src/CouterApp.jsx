// cuando cambia el estado se vuelve a renderear

import PropTypes from 'prop-types';
import { useState } from 'react';
export const CounterApp = ({ value }) => {
    
    const  [ counter, setCounter ] = useState( value );
    const handleAdd = (e) => {
        setCounter( counter + 1)
        // Se puede usar de etsa manera
        // setCounter( ()=> 2000)
    }
    const handleLess = () => setCounter( counter - 1);
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            
            {/* Se puede usar solo el handleAdd y se pasa el eveto principal porque solo tenemos un parametro 
            Si se requieren mas parametros ya de coloca como ...handledAdd(event, param2, param3)  */}
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleLess }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
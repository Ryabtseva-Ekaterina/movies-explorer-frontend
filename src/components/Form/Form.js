import React from 'react';
import './Form.css';

function Form (props) {
    return (
        <section>
        <form className='form'>

            { props.children }
    
        </form>
    </section>
    )
}

export default Form;
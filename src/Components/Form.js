import React from 'react';
function Form(props){
    return (
     <form onSubmit={props.getWeather}>
         <input className='inp' type='text'name='city' placeholder='enter city' />
        <input className='inp' type='text' name='country' placeholder='enter country' />
        <button>Get Weather</button>
     </form>
    )
    }
  export default Form;
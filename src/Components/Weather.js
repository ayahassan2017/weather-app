import React from 'react';
function Weather(props) {
       return (
         <div className='info'>
          {
            props.temperature && 
            <p className='info_key'> Temperature :
            <span className='infoValue'> {props.temperature}</span>
             </p>
          }
         {
            props.city &&
            <p className='info_key'>City :
            <span className='infoValue'>{props.city}</span>
            </p>
         }
   
        {
            props.country &&
            <p className='info_key'>Country :
            <span className='infoValue'>{props.country}</span>
            </p>
         }
   
         {
            props.humidity &&
            <p className='info_key'>Humidity :
            <span className='infoValue'>{props.humidity}</span>
            </p>
          }
   
         {
           props.description && 
           <p className='info_key'>Description : 
           <span className='infoValue'>{props.description}</span>
           </p>
         }
          {/* {props.error && <p>Error : {props.error}</p>} */}
   
      </div>
    );
  }
  
  export default Weather;
  
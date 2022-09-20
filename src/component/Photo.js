import React from 'react'; 
import amit from '../images/amit.jpg'; 
import './Photo.css';
function Photo(){ 
    return(
        <>
          <div className='photo'>
            < img src ={ amit } alt ="this is car image" /> 
         </div>
         <div className='content'>
         <h1>Amitabh Bachchan</h1>
         <p>Amitabh Bachchan is an Indian actor, film producer, television host, occasional playback singer and former politician known for his work in Hindi cinema.
         </p>
         </div>
         </>
 ) } 
export default Photo;
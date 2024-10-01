
import {FaStar} from 'react-icons/fa'

import './App.css'
import { useState } from 'react'

function App({noOfStars = 5 }) {
  
   
     const [rating, setRating] = useState(0);
     const [hover, setHover] = useState(0);

     function handelClick(getCrrentIndex) {
      setRating(getCrrentIndex)
     }

     function handeMouseEnter(getCrrentIndex) {
      setHover(getCrrentIndex)
     }

     function handeMouseLeave()  { 
      setHover(rating)
     }

    
  
  return <div className='star-rating'>
    
   {
      [...Array(noOfStars)].map((_,index) => {
          index += 1
          return <FaStar
            
          key={index}
          className={index <= (hover || rating) ? 'active' : 'inactive'}
          onClick={()=> handelClick(index)}
          onMouseMove={()=> handeMouseEnter(index)}
          onMouseLeave={()=> handeMouseLeave()}
          size={40}

          />
      })
      
      
   }


  </div>
   
  
}

export default App

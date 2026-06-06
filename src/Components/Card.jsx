import React from 'react'

const Card = (props) => {
  
  return (
   
   <div className="gallery">
     <div className='Cards'>
      <img src={props.img}>
      </img>
      <h1>
    {props.user}
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit.</p>
      <button>View Profile</button>
      </div> 
    </div>
    
  )
}

export default Card
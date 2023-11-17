import React, { useState } from 'react'
import img from './images/inst.jpg'

const Body = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      
     <img src={inst.jpg} alt='insta'/>
     <button onClick={()=>setCount(count+1)}>Like</button>
     <p>Likes: {count}</p>
    </div>
  )
}

export default Body

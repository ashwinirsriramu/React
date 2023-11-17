import React, { useState } from 'react'

const Body = () => {
  const [count,setCount]=useState(0)
  return (
    <div>
      <a target="_blank" href="inst.jpg">
     <img src="inst.jpg" alt="instagram" height="400" width="600"></img></a>
     <button onClick={()=>setCount(count+1)}>Like</button>
     <p>Likes: {count}</p>
    </div>
  )
}

export default Body

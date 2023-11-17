
/*import React, {Component} from 'react';
class Header extends Component{
    render() {
        return <h2>Header</h2>;
    }

}
export default Header*/


/*import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>This is my Instagram page.</h1>
    </div>
  )
}

export default Header*/

import React, { useState } from 'react'

const Header = () => {
    const [name,setName]=useState("Ashwini")
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={()=>setName("Usha")}>Click here</button>
    </div>
  )
}

export default Header


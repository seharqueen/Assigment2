import React from 'react'
import "./style2.css"
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'

export default function Newspaper() {
  return (
    <div className='parent'>Newspaper
   <Component1/>
   <div className="flex">
   <Component2/>
   <Component3/>
   </div>
  
    <Component4/>

    </div>
  )
}

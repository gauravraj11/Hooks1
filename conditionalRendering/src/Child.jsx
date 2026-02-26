import React, { useState } from 'react'
import './Child.css'

// {asd, asdf}
export default function Child({abc}) {

  const [count, setCount] = useState(100);
  return (
    <div id='child'>
      <h1>Child Component {count} {abc.name} {abc.desig} </h1>
      <button onClick={()=> setCount(count+11)}>Click</button>
    </div>
  )
}

  // xyz = {
  //   "con" = (a = {})
  // }
  // const x = xyz.con;
  // console.log(x.name);
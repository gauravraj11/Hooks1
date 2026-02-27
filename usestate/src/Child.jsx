import React from 'react'

function Child({abc}) {
    let a = Math.random();
  return (
    <div style={{border:"2px solid black"}}>
        <h1>{a}</h1>
      <h1>Child Component {abc}</h1>
    </div>
  )
}

export default Child

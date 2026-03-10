import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {
 
  const [count, setCount] = useState(10);
 useEffect(() => {
  console.log("Home Page is mounting");
   return () => {
     console.log("Home is unmounting");  
   };
 }, []);

 useEffect(() => {
  console.log("Count Updated");
 
 }, [count]);

  return (
    <div >
      <h1>Home Page</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+5)}>Change Count</button>
    </div>
  )
}

export default Home

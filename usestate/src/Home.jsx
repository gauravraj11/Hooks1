import React, { useEffect } from 'react'
import './Home.css'

function Home() {

 useEffect(() => {
  console.log("Home Page is mounting");
   return () => {
     console.log("Home is unmounting");  
   };
 }, []);

  return (
    <div >
      <h1>Home Page</h1>
    </div>
  )
}

export default Home

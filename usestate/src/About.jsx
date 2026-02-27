import React, { useEffect } from 'react'

function About() {

   useEffect(() => {
    console.log("About Page is mounting");
     return () => {
       
     };
   }, []);
  return (
    <div>
        <h1>About Page</h1>
    </div>
  )
}

export default About

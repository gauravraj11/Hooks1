import React, { useEffect } from 'react'

function Contact() {

   useEffect(() => {
    console.log("Contact Page is mounting");
     return () => {
       
     };
   }, []);
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  )
}

export default Contact

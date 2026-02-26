import { useState } from 'react';
import './App.css'
import Child from './Child.jsx'

function App() {
 var count1 = Math.random();
  // const [count, setCount] = useState({"name" : "gaurav", "desig": "student"});
  const count = {"name" : "gaurav", "desig": "student"}
  const [flag, setFlag] = useState(false);
  var content2;

  if(flag){
      content2 = <></> ;
  }else{
     content2 = <Child abc = {count}/> ;
  }

  var content = <h4>MERN Stack</h4>;
 
  return (
    <div id='app'>
      <h1>App Component {count1}</h1>
      <h1>App Component {count.name} {count.desig}</h1>
      <button onClick={()=> setFlag(!flag)}>Click</button>
      
       {content2}
    </div>
  )
}

export default App

 // const abc=()=>{
  //       console.log(count);
  //       count = count + 1;
  //       console.log(count)};
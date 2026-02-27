import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Child from './Child'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    // localhost:5173/contact
    // /home / /contact /about
    <BrowserRouter>
    
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
     
    </BrowserRouter>
  )
}
export default App

// useEffect(() => {
//   return () => {
//     effect
//   };
// }, [input]);
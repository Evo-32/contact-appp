import React from "react";
import Navbar from './assets/components/Navbar'
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom" ;
import Createcontact from "./assets/components/Createcontact";
import Contactlist from "./assets/components/Contactlist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/"  element = {<Navbar/>}/>
        <Route path ="/Createcontact"  element = {<Createcontact/>}/>
        <Route path ="/Contactlist" element = {<Contactlist/>}/>
      </Routes>
    </Router>
  )
}

export default App;

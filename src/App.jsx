import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import "./App.css"


function App() {  
   
    return (
     
        <Router>
        <div className="App">
       
           <Header/>
        <Routes>
        
        <Route  path="/" element={<Photos />} />          
        <Route path="/cart" element={ <Cart />}/>
                   
        
        </Routes>
       
        </div>
        </Router>
    )
}

export default App

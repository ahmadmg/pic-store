import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import "./App.css"


function App() {  
   
    return (
     

        <div className="App">
        <Router>
           <Header/>
        <Routes>
        
        <Route  path="/" element={<Photos />} />          
        <Route path="/cart" element={ <Cart />}/>
                   
        
        </Routes>
        </Router>
        </div>
        
    )
}

export default App

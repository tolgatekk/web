import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavigationBar'
import { ProductContextProvider } from './context/ProductContext';
import Homepage from './pages/Homepage';
import Productpage from './pages/Productspage';
import Slider from './components/Slider/Slider';


function App() {
  

  return (
    <>
    <ProductContextProvider>
      <div className="App">
        <BrowserRouter> <NavBar /><Slider/>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='/products' element={<Productpage/>}/>
        </Routes>
         </BrowserRouter>

        
      </div>
    </ProductContextProvider>
       
    </>
  )
}

export default App;

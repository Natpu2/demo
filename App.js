import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rent from './Pages/Rent';
import Pay from './Pages/Pay';
import Bill from './Pages/Bill';
import Conf from './Pages/Conf';
import Rinfo from './Pages/Rinfo';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Rent/>}/>
      <Route path='/Bill' element={<Bill/>}/>
      <Route path='/Rinfo' element={<Rinfo/>}/>
      <Route path='/Pay' element={<Pay/>}/>
      <Route path='/Conf' element={<Conf/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
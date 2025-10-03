import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './../pages/Home';
import Appropos from './../pages/PagePrincimpale/Appropos';
import Services from './../pages/PagePrincimpale/Services.';
import Contact from './../pages/PagePrincimpale/Contact';


export default function Navbar() {
  return (
     <div>
      <Header />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/apropos' element={ <Appropos /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/contact' element={ <Contact />  } />
          <Route path='/savoirPlus' element={ <Appropos /> } />
          {/* <Route path='/savoirPlus' element={ <Contact /> } /> */}
      </Routes>
    </div>
  )
}

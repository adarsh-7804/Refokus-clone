import React from 'react'   
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Product from './components/Product'
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import { Footer } from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-[100%] h-full bg-zinc-900 text-white  font-["satoshi"] ' >
      <Navbar />
      <Work />
      <Stripes/>
      <Product />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
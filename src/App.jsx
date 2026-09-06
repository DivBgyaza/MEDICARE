import { useCallback, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Collections from './components/Collections.jsx'
import SizeGuide from './components/SizeGuide.jsx'
import BusinessPolicy from './components/BusinessPolicy.jsx'
import WhyMK from './components/WhyMK.jsx'
import OrderJourney from './components/OrderJourney.jsx'
import ComingSoon from './components/ComingSoon.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  const [guide,setGuide]=useState('female-regular')
  const chooseGuide=useCallback(id=>{setGuide(id);requestAnimationFrame(()=>document.getElementById('size-guide')?.scrollIntoView({behavior:'smooth'}))},[])
  return <><a className="skip-link" href="#main">Skip to main content</a><Navbar/><main id="main"><Hero/><About/><Collections onSelect={chooseGuide}/><SizeGuide selected={guide} setSelected={setGuide}/><BusinessPolicy/><WhyMK/><OrderJourney/><ComingSoon/><Contact/></main><Footer/></>
}

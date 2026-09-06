import { useEffect, useState } from 'react'
import BrandMark from './BrandMark.jsx'

const links = [['Home','home'],['About','about'],['Collections','collections'],['Size Guide','size-guide'],['Policy','policy'],['Why MK','why-mk'],['Contact','contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const close = e => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close)
  }, [])
  return <header className={`navbar${scrolled || open ? ' navbar--solid' : ''}`}>
    <div className="container navbar__inner">
      <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}><BrandMark /></a>
      <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(v => !v)}>
        <span/><span/><span/>
      </button>
      <nav id="main-navigation" className={`navbar__nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" className="button button--small" onClick={() => setOpen(false)}>Order / Enquire</a>
      </nav>
    </div>
  </header>
}

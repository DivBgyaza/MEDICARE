import { useEffect, useRef } from 'react'
export default function Modal({ open, onClose, title, image, available, alt, width, height }) {
  const dialog = useRef(null)
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement
    const key = e => { if (e.key === 'Escape') onClose(); if (e.key === 'Tab') { const els=dialog.current?.querySelectorAll('button,[href]'); if(!els?.length)return; const first=els[0],last=els[els.length-1]; if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()} } }
    document.body.classList.add('modal-open'); document.addEventListener('keydown',key); requestAnimationFrame(()=>dialog.current?.querySelector('button')?.focus())
    return ()=>{ document.body.classList.remove('modal-open'); document.removeEventListener('keydown',key); previous?.focus?.() }
  },[open,onClose])
  if(!open)return null
  return <div className="modal" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><div ref={dialog} className="modal__dialog" role="dialog" aria-modal="true" aria-label={title}><div className="modal__head"><h2>{title}</h2><button className="modal__close" onClick={onClose} aria-label="Close image">×</button></div><div className="modal__body">{available?<img src={image} alt={alt} width={width} height={height}/>:<AssetPlaceholder title={title}/>}</div></div></div>
}
import AssetPlaceholder from './AssetPlaceholder.jsx'

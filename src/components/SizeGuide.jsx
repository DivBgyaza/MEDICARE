import { useState } from 'react'
import { sizeGuides } from '../data/brandData.js'
import AssetPlaceholder from './AssetPlaceholder.jsx'
import Modal from './Modal.jsx'
export default function SizeGuide({ selected, setSelected }) {
  const [modal,setModal]=useState(false); const current=sizeGuides.find(x=>x.id===selected)||sizeGuides[0]
  const key=e=>{const i=sizeGuides.findIndex(x=>x.id===selected); if(['ArrowRight','ArrowLeft'].includes(e.key)){e.preventDefault();const n=e.key==='ArrowRight'?(i+1)%3:(i+2)%3;setSelected(sizeGuides[n].id);document.getElementById(`tab-${sizeGuides[n].id}`)?.focus()}}
  return <section id="size-guide" className="section"><div className="container narrow"><div className="center-heading"><p className="eyebrow">Official measurements</p><h2>Find Your Perfect Fit</h2><p>Please choose your size based on your body measurements. If you are between sizes, we recommend choosing the larger size for a more comfortable fit.</p><strong>All measurements are in inches.</strong></div>
  <div className="tabs" role="tablist" aria-label="Scrub size guides" onKeyDown={key}>{sizeGuides.map(x=><button id={`tab-${x.id}`} key={x.id} role="tab" aria-selected={selected===x.id} aria-controls="size-panel" tabIndex={selected===x.id?0:-1} onClick={()=>setSelected(x.id)}>{x.label}</button>)}</div>
  <div id="size-panel" className="chart-frame" role="tabpanel" aria-labelledby={`tab-${current.id}`}>{current.available?<button className="chart-button" onClick={()=>setModal(true)} aria-label={`Open larger ${current.label} size chart`}><img src={current.image} alt={current.alt} loading="lazy"/></button>:<><AssetPlaceholder title={`${current.label} Size Chart`} message="The original size-chart artwork has not yet been supplied."/><button className="button button--outline chart-preview" onClick={()=>setModal(true)}>View chart area</button></>}</div>
  </div><Modal open={modal} onClose={()=>setModal(false)} title={`${current.label} Size Chart`} image={current.image} available={current.available} alt={current.alt}/></section>
}

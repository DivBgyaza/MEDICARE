import { useState } from 'react'
import { assets, sizeGuides } from '../data/brandData.js'
import Modal from './Modal.jsx'
export default function SizeGuide({ selected, setSelected }) {
  const [modal,setModal]=useState(null); const current=sizeGuides.find(x=>x.id===selected)||sizeGuides[0]
  const key=e=>{const i=sizeGuides.findIndex(x=>x.id===selected); if(['ArrowRight','ArrowLeft'].includes(e.key)){e.preventDefault();const direction=e.key==='ArrowRight'?1:-1;const n=(i+direction+sizeGuides.length)%sizeGuides.length;setSelected(sizeGuides[n].id);document.getElementById(`tab-${sizeGuides[n].id}`)?.focus()}}
  return <section id="size-guide" className="section"><div className="container narrow"><div className="center-heading"><p className="eyebrow">Official measurements</p><h2>Find Your Perfect Fit</h2><p>Please choose your size based on your body measurements. If you are between sizes, we recommend choosing the larger size for a more comfortable fit.</p><strong>All measurements are in inches.</strong></div>
  <div className="tabs" role="tablist" aria-label="Scrub size guides" onKeyDown={key}>{sizeGuides.map(x=><button id={`tab-${x.id}`} key={x.id} role="tab" aria-selected={selected===x.id} aria-controls="size-panel" tabIndex={selected===x.id?0:-1} onClick={()=>setSelected(x.id)}>{x.label}</button>)}</div>
  <div id="size-panel" className="chart-frame" role="tabpanel" aria-labelledby={`tab-${current.id}`}><button className="chart-button" onClick={()=>setModal('current')} aria-label={`Open larger ${current.label} size chart`}><img src={current.image} alt={current.alt} loading="lazy" width={current.width} height={current.height}/></button></div>
  <div className="center-action"><button className="text-link text-link--center" onClick={()=>setModal('all')}>View All Size Charts</button></div>
  </div><Modal open={modal==='current'} onClose={()=>setModal(null)} title={`${current.label} Size Chart`} image={current.image} available alt={current.alt} width={current.width} height={current.height}/><Modal open={modal==='all'} onClose={()=>setModal(null)} title="All MK Medi Care Size Charts" image={assets.combinedSizeChart} available alt="Combined MK Medi Care size charts" width="1536" height="1024"/></section>
}

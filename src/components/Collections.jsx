import Icon from './Icon.jsx'
const items = [
  ['01','Regular Scrub — Female','A professional scrub collection designed for women.','female-regular'],
  ['02','Modest Scrub Set — Female','A modest scrub collection designed for women.','female-modest'],
  ['03','Regular Scrub — Male','A professional scrub collection designed for men.','male-regular'],
]
export default function Collections({ onSelect }) { return <section id="collections" className="section section--tint"><div className="container">
  <div className="section-heading"><div><p className="eyebrow">Our collections</p><h2>Our Scrub Collections</h2></div><p>Purposeful healthcare apparel, presented with the clarity your shift deserves.</p></div>
  <div className="collection-grid">{items.map(([num,title,desc,id])=><article className="collection-card" key={num}><span className="collection-card__num">{num}</span><div className="collection-card__symbol" aria-hidden="true"><span>MK</span></div><h3>{title}</h3><p>{desc}</p><button className="text-link" onClick={()=>onSelect(id)}>View Size Guide <Icon name="arrow"/></button></article>)}</div>
  </div></section> }

import Icon from './Icon.jsx'
import femaleRegular from '../assets/mk-medicare/collections/regular-scrub-female.png'
import femaleModest from '../assets/mk-medicare/collections/modest-scrub-set-female.png'
import maleRegular from '../assets/mk-medicare/collections/regular-scrub-male.png'
import collectionFour from '../assets/mk-medicare/collections/scrub-collection-4.png'

const items = [
  { number: '01', title: 'Regular Scrub — Female', description: 'The official MK Medi Care regular scrub collection for women.', image: femaleRegular, guide: 'female-regular' },
  { number: '02', title: 'Modest Scrub Set — Female', description: 'The official MK Medi Care modest scrub collection for women.', image: femaleModest, guide: 'female-modest' },
  { number: '03', title: 'Regular Scrub — Male', description: 'The official MK Medi Care regular scrub collection for men.', image: maleRegular, guide: 'male-regular' },
  { number: '04', title: 'Scrub Collection 4', description: 'Explore this official MK Medi Care collection visual and enquire for verified details.', image: collectionFour },
]
export default function Collections({ onSelect }) { return <section id="collections" className="section section--tint"><div className="container">
  <div className="section-heading"><div><p className="eyebrow">Our collections</p><h2>Our Scrub Collections</h2></div><p>Purposeful healthcare apparel, presented with the clarity your shift deserves.</p></div>
  <div className="collection-grid">{items.map(item=><article className="collection-card" key={item.number}><span className="collection-card__num">{item.number}</span><div className="collection-card__image"><img src={item.image} alt={`${item.title} official MK Medi Care artwork`} loading="lazy" width="1024" height="1536"/></div><h3>{item.title}</h3><p>{item.description}</p>{item.guide?<button className="text-link" onClick={()=>onSelect(item.guide)}>View Size Guide <Icon name="arrow"/></button>:<a className="text-link" href="#contact">Enquire About This Style <Icon name="arrow"/></a>}</article>)}</div>
  </div></section> }

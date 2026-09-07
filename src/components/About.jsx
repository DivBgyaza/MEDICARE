import Icon from './Icon.jsx'
import { brand, providedCategories } from '../data/brandData.js'
const qualities = [['quality','Premium Quality Scrubs'],['comfort','Comfortable & Durable'],['people','Made for Healthcare Heroes'],['confidence','Style. Comfort. Confidence.']]
export default function About() { return <section id="about" className="section"><div className="container about">
  <div><p className="eyebrow">About MK Medicare</p><h2>{brand.aboutHeading}</h2></div>
  <div>{brand.aboutParagraphs.map((paragraph, index) => <p className={index === 0 ? 'lead' : undefined} key={paragraph}>{paragraph}</p>)}<h3 className="provide-heading">WHAT WE PROVIDE</h3><div className="provide-grid">{providedCategories.map(([icon, text]) => <div className="provide-item" key={text}><span className="icon-box"><Icon name={icon}/></span><h3>{text}</h3></div>)}</div><div className="quality-grid">{qualities.map(([icon,text])=><div className="quality" key={text}><span className="icon-box"><Icon name={icon}/></span><h3>{text}</h3></div>)}</div></div>
  </div></section> }

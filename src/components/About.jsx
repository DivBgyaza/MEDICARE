import Icon from './Icon.jsx'
const qualities = [['quality','Premium Quality Scrubs'],['comfort','Comfortable & Durable'],['people','Made for Healthcare Heroes'],['confidence','Style. Comfort. Confidence.']]
export default function About() { return <section id="about" className="section"><div className="container about">
  <div><p className="eyebrow">About MK Medi Care</p><h2>Designed Around the People Who Care for Others.</h2></div>
  <div><p className="lead">Welcome to MK Medi Care. We are committed to providing quality, comfortable, and reliable healthcare essentials for every healthcare professional.</p><div className="quality-grid">{qualities.map(([icon,text])=><div className="quality" key={text}><span className="icon-box"><Icon name={icon}/></span><h3>{text}</h3></div>)}</div></div>
  </div></section> }

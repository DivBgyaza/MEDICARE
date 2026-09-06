import BrandMark from './BrandMark.jsx'

export default function Hero() {
  return <section id="home" className="hero">
    <div className="container hero__grid">
      <div className="hero__copy reveal">
        <p className="eyebrow">Healthcare apparel</p>
        <h1>Made for<br/><em>Every Shift.</em></h1>
        <p className="hero__tagline">Every Shift Matters.</p>
        <p className="hero__intro">Quality, comfortable and reliable healthcare essentials for healthcare professionals.</p>
        <div className="button-row"><a className="button" href="#collections">Explore Our Collection</a><a className="button button--outline" href="#size-guide">View Size Guide</a></div>
      </div>
      <div className="hero__art" aria-label="MK Medi Care brand composition">
        <div className="hero__ring hero__ring--one"/><div className="hero__ring hero__ring--two"/>
        <div className="hero__card"><span className="hero__cross" aria-hidden="true">+</span><BrandMark/><span className="hero__line"/><p>Professional apparel<br/>for the people who care.</p></div>
        <span className="hero__shift">SHIFT / 01</span>
      </div>
    </div>
  </section>
}

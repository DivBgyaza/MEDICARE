export default function BrandMark({ light = false }) {
  return (
    <span className={`brand-mark${light ? ' brand-mark--light' : ''}`} aria-label="MK Medi Care">
      <span className="brand-mark__monogram" aria-hidden="true"><b>M</b><i>K</i></span>
      <span className="brand-mark__name">MK <strong>MEDI CARE</strong></span>
    </span>
  )
}

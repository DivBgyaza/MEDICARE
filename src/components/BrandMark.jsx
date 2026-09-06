import { assets } from '../data/brandData.js'

export default function BrandMark({ light = false }) {
  if (!light) return <span className="brand-mark brand-mark--official"><img src={assets.logo} width="712" height="532" alt="MK Medi Care — Every Shift Matters" /></span>
  return (
    <span className={`brand-mark${light ? ' brand-mark--light' : ''}`} aria-label="MK Medi Care">
      <span className="brand-mark__monogram" aria-hidden="true"><b>M</b><i>K</i></span>
      <span className="brand-mark__name">MK <strong>MEDI CARE</strong></span>
    </span>
  )
}

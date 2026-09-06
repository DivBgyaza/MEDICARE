import logo from '../assets/mk-medicare/MK MEDI CARE LOGO.png'
import femaleRegular from '../assets/mk-medicare/MK CHAT 3.png'
import femaleModest from '../assets/mk-medicare/MK CHAT 2.png'
import maleRegular from '../assets/mk-medicare/MK CHAT 1.png'
import combinedSizeChart from '../assets/mk-medicare/MK FULL CHAT.png'
import businessPolicy from '../assets/mk-medicare/MK BUSINESS POLICY.jpeg'
import comingSoon from '../assets/mk-medicare/MK COMING SOON.jpeg'

export const brand = {
  name: 'MK Medi Care',
  tagline: 'Every Shift Matters.',
  statement: 'We are committed to providing quality, comfortable, and reliable healthcare essentials for every healthcare professional.',
  contacts: {
    phone: { label: 'Phone', display: '0912 603 4647', href: 'tel:+2349126034647' },
    email: { label: 'Email', display: 'Maikudimaryam16@gmail.com', href: 'mailto:Maikudimaryam16@gmail.com' },
  },
}

export const assets = {
  logo, femaleRegular, femaleModest, maleRegular, combinedSizeChart, businessPolicy, comingSoon,
}

export const sizeGuides = [
  { id: 'female-regular', label: 'Female Regular', image: assets.femaleRegular, available: true, alt: 'MK Medi Care Female Regular Scrub size chart', width: 1024, height: 1536 },
  { id: 'female-modest', label: 'Female Modest', image: assets.femaleModest, available: true, alt: 'MK Medi Care Female Modest Scrub Set size chart', width: 1024, height: 1536 },
  { id: 'male-regular', label: 'Male Regular', image: assets.maleRegular, available: true, alt: 'MK Medi Care Male Regular Scrub size chart', width: 1024, height: 1536 },
]

export const policyCategories = [
  'Ordering', 'Payment', 'Fitting & Sizing', 'Exchange Policy',
  'Returns & Refunds', 'Delivery', 'Pre-Orders', 'Product Colours',
  'Product Availability', 'Material & Fabrics', 'Customer Responsibility', 'Customer Service',
]

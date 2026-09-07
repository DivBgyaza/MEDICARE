import logo from '../assets/mk-medicare/MK MEDI CARE LOGO.png'
import femaleRegular from '../assets/mk-medicare/MK CHAT 3.png'
import femaleModest from '../assets/mk-medicare/MK CHAT 2.png'
import maleRegular from '../assets/mk-medicare/MK CHAT 1.png'
import combinedSizeChart from '../assets/mk-medicare/MK FULL CHAT.png'
import businessPolicy from '../assets/mk-medicare/MK BUSINESS POLICY.jpeg'
import comingSoon from '../assets/mk-medicare/MK COMING SOON.jpeg'
import collectionFour from '../assets/mk-medicare/collections/scrub-collection-4.png'

export const brand = {
  name: 'MK Medi Care',
  tagline: 'Every Shift Matters.',
  statement: 'MK Medicare is a Nigerian healthcare apparel and accessories brand providing premium, practical work essentials for healthcare professionals and students.',
  aboutHeading: 'A Healthcare Lifestyle Brand Built for Every Shift',
  aboutParagraphs: [
    'MK Medicare is a Nigerian healthcare apparel and accessories brand established to provide premium-quality medical scrubs, healthcare footwear, work bags, and medical accessories to healthcare professionals and students.',
    'We are a healthcare lifestyle brand created with a simple vision: to make quality, stylish, and practical work essentials accessible to healthcare professionals.',
    'At MK Medicare, we believe healthcare professionals deserve products that are functional and durable, as well as comfortable and stylish.',
  ],
  contacts: {
    phone: { label: 'Phone', display: '0912 603 4647', href: 'tel:+2349126034647' },
    email: { label: 'Email', display: 'Maikudimaryam16@gmail.com', href: 'mailto:Maikudimaryam16@gmail.com' },
  },
}

export const providedCategories = [
  ['quality', 'Medical Scrubs'],
  ['comfort', 'Clogs & Sneakers'],
  ['people', 'Stethoscopes'],
  ['confidence', 'Badge Reels'],
  ['quality', 'Work Bags'],
  ['comfort', 'Nursing & Medical Accessories'],
]

export const assets = {
  logo, femaleRegular, femaleModest, maleRegular, combinedSizeChart, businessPolicy, comingSoon, collectionFour,
}

export const sizeGuides = [
  { id: 'female-regular', label: 'Female Regular', image: assets.femaleRegular, available: true, alt: 'MK Medi Care Female Regular Scrub size chart', width: 1024, height: 1536 },
  { id: 'female-modest', label: 'Female Modest', image: assets.femaleModest, available: true, alt: 'MK Medi Care Female Modest Scrub Set size chart', width: 1024, height: 1536 },
  { id: 'male-regular', label: 'Male Regular', image: assets.maleRegular, available: true, alt: 'MK Medi Care Male Regular Scrub size chart', width: 1024, height: 1536 },
  { id: 'scrub-collection-4', label: 'Scrub Collection 4', image: assets.collectionFour, available: true, alt: 'Scrub Collection 4 official MK Medi Care artwork', width: 1024, height: 1536 },
]

export const policyCategories = [
  'Ordering', 'Payment', 'Fitting & Sizing', 'Exchange Policy',
  'Returns & Refunds', 'Delivery', 'Pre-Orders', 'Product Colours',
  'Product Availability', 'Material & Fabrics', 'Customer Responsibility', 'Customer Service',
]

const assetRoot = '/src/assets/mk-medicare'

export const brand = {
  name: 'MK Medi Care',
  tagline: 'Every Shift Matters.',
  statement: 'We are committed to providing quality, comfortable, and reliable healthcare essentials for every healthcare professional.',
  contacts: {
    instagram: '',
    facebook: '',
    tiktok: '',
    whatsapp: '',
    website: '',
  },
}

export const assets = {
  logo: '',
  femaleRegular: `${assetRoot}/MK CHAT 3.png`,
  femaleModest: `${assetRoot}/MK CHAT 2.png`,
  maleRegular: `${assetRoot}/MK CHAT 1.png`,
  combinedSizeChart: `${assetRoot}/MK FULL CHAT.png`,
  businessPolicy: `${assetRoot}/MK BUSINESS POLICY.png`,
  comingSoon: `${assetRoot}/MK COMING SOON.png`,
}

export const sizeGuides = [
  { id: 'female-regular', label: 'Female Regular', image: assets.femaleRegular, available: false, alt: 'MK Medi Care Female Regular Scrub size chart' },
  { id: 'female-modest', label: 'Female Modest', image: assets.femaleModest, available: false, alt: 'MK Medi Care Female Modest Scrub Set size chart' },
  { id: 'male-regular', label: 'Male Regular', image: assets.maleRegular, available: false, alt: 'MK Medi Care Male Regular Scrub size chart' },
]

export const policyCategories = [
  'Ordering', 'Payment', 'Fitting & Sizing', 'Exchange Policy',
  'Returns & Refunds', 'Delivery', 'Pre-Orders', 'Product Colours',
  'Product Availability', 'Material & Fabrics', 'Customer Responsibility', 'Customer Service',
]

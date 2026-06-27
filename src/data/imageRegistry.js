import strkImgConfig from '@/strk-img-config.json'

export const generatedImageUrl = (imgId, resultIndex = 0) =>
  strkImgConfig?.[imgId]?.results?.[resultIndex]?.url ?? strkImgConfig?.[imgId]?.results?.[0]?.url ?? ''

const asset = (fileName) => `/images/${fileName}`

export const heroImage = asset('hero.svg')

export const imageFor = {
  'vivid-aura-jewels': {
    primary: asset('vivid-aura-primary.svg'),
    hover: asset('vivid-aura-hover.svg'),
    detail: asset('vivid-aura-primary.svg'),
    lifestyle: asset('vivid-aura-hover.svg'),
    packaging: asset('heirloom-hover.svg'),
  },
  'majestic-flora-nectar': {
    primary: asset('flora-primary.svg'),
    hover: asset('flora-hover.svg'),
    detail: asset('flora-primary.svg'),
    lifestyle: asset('flora-hover.svg'),
    packaging: asset('heirloom-hover.svg'),
  },
  'golden-sphere-huggies': {
    primary: asset('sphere-primary.svg'),
    hover: asset('sphere-hover.svg'),
    detail: asset('sphere-primary.svg'),
    lifestyle: asset('sphere-hover.svg'),
    packaging: asset('heirloom-hover.svg'),
  },
  'amber-lace-earrings': {
    primary: asset('amber-primary.svg'),
    hover: asset('amber-hover.svg'),
    detail: asset('amber-primary.svg'),
    lifestyle: asset('amber-hover.svg'),
    packaging: asset('heirloom-hover.svg'),
  },
  'royal-heirloom-set': {
    primary: asset('heirloom-primary.svg'),
    hover: asset('heirloom-hover.svg'),
    detail: asset('heirloom-primary.svg'),
    lifestyle: asset('heirloom-hover.svg'),
    packaging: asset('heirloom-hover.svg'),
  },
}

export const categoryImageFor = {
  earrings: asset('category-earrings.svg'),
  necklaces: asset('category-necklaces.svg'),
  huggies: asset('category-huggies.svg'),
}

export const editorialImageFor = {
  story: asset('brand-story.svg'),
}

export const ugcImageFor = {
  'ugc-neck-stack': asset('ugc-neck-stack.svg'),
  'ugc-gold-huggies': asset('ugc-gold-huggies.svg'),
  'ugc-gift-box': asset('ugc-gift-box.svg'),
  'ugc-ear-cuff': asset('ugc-ear-cuff.svg'),
}

const CDN_BASE = 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom'

const FALLBACK_IMAGES = {
  'vivid-aura-jewels': {
    main: `${CDN_BASE}/photo-1631017666042-64ca242bc02d`,
    gallery: [
      `${CDN_BASE}/photo-1572438468702-6ef505497aa1`,
      `${CDN_BASE}/photo-1646222852531-51bd0de47a83`,
      `${CDN_BASE}/photo-1593769834537-485ba69f1bb9`,
    ],
  },
  'majestic-flora-nectar': {
    main: `${CDN_BASE}/photo-1509421498469-4377a5e21226`,
    gallery: [
      `${CDN_BASE}/photo-1653465393585-2595df80b769`,
      `${CDN_BASE}/photo-1614113753022-06b86c8b554d`,
      `${CDN_BASE}/photo-1679930171427-d1a164589b9c`,
    ],
  },
  'golden-sphere-huggies': {
    main: `${CDN_BASE}/photo-1653376142552-497627e49d3e`,
    gallery: [
      `${CDN_BASE}/photo-1658786335157-6bee9492bcb1`,
      `${CDN_BASE}/photo-1519814482364-3318b412886e`,
      `${CDN_BASE}/photo-1584839404042-8bc21d240e91`,
    ],
  },
  'amber-lace-earrings': {
    main: `${CDN_BASE}/photo-1662376569307-b9a56a9adc98`,
    gallery: [
      `${CDN_BASE}/photo-1609252907817-fad418fb02ed`,
      `${CDN_BASE}/photo-1536062027785-7fd4249294b7`,
      `${CDN_BASE}/photo-1559555699-37cc57ca04e3`,
    ],
  },
  'royal-heirloom-set': {
    main: `${CDN_BASE}/photo-1643865853716-eeb6d02daede`,
    gallery: [
      `${CDN_BASE}/photo-1602792474517-753a7f4ead74`,
      `${CDN_BASE}/photo-1635521215608-d16bd0a26135`,
      `${CDN_BASE}/photo-1606605069469-ec1ba406fcae`,
    ],
  },
}

export function getProductImageFallback(slug) {
  return FALLBACK_IMAGES[slug]?.main || `${CDN_BASE}/photo-1662376569307-b9a56a9adc98`
}

export function getProductGalleryFallback(slug) {
  const entry = FALLBACK_IMAGES[slug]
  if (!entry) return { main: `${CDN_BASE}/photo-1662376569307-b9a56a9adc98`, alts: [] }
  return { main: entry.main, alts: entry.gallery }
}

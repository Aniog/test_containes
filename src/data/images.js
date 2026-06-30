const CDN = 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom'

export const imageMap = {
  // Hero background
  'hero-bg': `${CDN}/photo-1515562141589-67f0d569b6c4`,

  // Product images - Vivid Aura Jewels
  'vivid-aura-primary': `${CDN}/photo-1599822896904-f11c699160e2`,
  'vivid-aura-secondary': `${CDN}/photo-1677578329676-7296dd3d1083`,
  'vivid-aura-thumb': `${CDN}/photo-1680532176435-8b9194314447`,

  // Product images - Majestic Flora Nectar
  'majestic-flora-primary': `${CDN}/photo-1599672302765-6d5f52f8578e`,
  'majestic-flora-secondary': `${CDN}/photo-1611591437281-460bfbe1220a`,

  // Product images - Golden Sphere Huggies
  'golden-sphere-primary': `${CDN}/photo-1630019852942-f89202989a59`,
  'golden-sphere-secondary': `${CDN}/photo-1617038260897-41a1f14a8ca0`,

  // Product images - Amber Lace Earrings
  'amber-lace-primary': `${CDN}/photo-1535632066927-ab7c9ab60908`,
  'amber-lace-secondary': `${CDN}/photo-1602173574767-37ac01994b2a`,

  // Product images - Royal Heirloom Set
  'royal-heirloom-primary': `${CDN}/photo-1611591437281-460bfbe1220a`,
  'royal-heirloom-secondary': `${CDN}/photo-1515562141589-67f0d569b6c4`,

  // Category images
  'cat-earrings': `${CDN}/photo-1535632066927-ab7c9ab60908`,
  'cat-necklaces': `${CDN}/photo-1599672302765-6d5f52f8578e`,
  'cat-huggies': `${CDN}/photo-1630019852942-f89202989a59`,

  // UGC images
  'ugc-1': `${CDN}/photo-1630019852942-f89202989a59`,
  'ugc-2': `${CDN}/photo-1599672302765-6d5f52f8578e`,
  'ugc-3': `${CDN}/photo-1599822896904-f11c699160e2`,
  'ugc-4': `${CDN}/photo-1535632066927-ab7c9ab60908`,
  'ugc-5': `${CDN}/photo-1611591437281-460bfbe1220a`,
  'ugc-6': `${CDN}/photo-1617038260897-41a1f14a8ca0`,

  // Brand story
  'brand-story': `${CDN}/photo-1515562141589-67f0d569b6c4`,
}

export const getImage = (key) => imageMap[key] || ''

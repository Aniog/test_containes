import strkImgConfig from '@/strk-img-config.json'

const fallbackImage = 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_1600/unsplashcom/photo-1625169012734-1ac1abe05fd6'

export function getStrkImageUrl(slotId) {
  const entry = strkImgConfig?.[slotId]
  const results = Array.isArray(entry?.results) ? entry.results : []
  const selected = results.find((result) => result.id === entry?.picked) || results[0]
  return selected?.url || fallbackImage
}

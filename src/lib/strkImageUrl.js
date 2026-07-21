// Resolves a `data-strk-img-id` (or background id) to a public asset URL by
// reading the precomputed strk-img-config.json. The runtime normally mutates
// the DOM `src` of <img> elements directly, but some images render after the
// initial scan (cart drawer, modals, etc.) and need a synchronous URL to
// avoid showing the SVG placeholder for a frame.
import strkImgConfig from '@/strk-img-config.json'

const CDN_BASE = 'https://user-images.strikinglycdn.com'
const TRANSFORM = 'f_auto,q_auto,w_4096'
const FOLDER = 'unsplashcom'

export function getPickedId(imgId) {
  const entry = strkImgConfig?.[imgId]
  if (!entry) return ''
  return entry.picked || ''
}

export function getStrkImageUrl(imgId) {
  const entry = strkImgConfig?.[imgId]
  if (!entry) return ''
  // Prefer the runtime-provided full URL from the first result. The runtime
  // already includes the `unsplashcom/` folder segment and the f_auto transform
  // in `results[i].url`, so the page-level and cart-drawer paths stay in sync.
  const fromResult = entry?.results?.find?.((r) => r?.id && entry.picked && String(r.id) === String(entry.picked))?.url
    || entry?.results?.[0]?.url
  if (fromResult) return fromResult
  const picked = entry.picked
  if (!picked) return ''
  return `${CDN_BASE}/res/hrscywv4p/image/upload/${TRANSFORM}/${FOLDER}/${picked}`
}

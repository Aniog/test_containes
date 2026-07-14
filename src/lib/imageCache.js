// Global cache for resolved image URLs
// Maps data-strk-img-id -> resolved CDN URL
const cache = new Map()

// Set up a MutationObserver to watch for src attribute changes on images
// with data-strk-img-id attributes
if (typeof document !== 'undefined') {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        const img = mutation.target
        const imgId = img.getAttribute('data-strk-img-id')
        const src = img.getAttribute('src') || ''
        if (imgId && !src.includes('data:image/svg+xml')) {
          cache.set(imgId, src)
        }
      }
    }
  })

  // Start observing after DOM is ready
  const start = () => {
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ['src'],
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start)
  } else {
    start()
  }
}

/**
 * Get a resolved image URL by its data-strk-img-id or any variant
 * @param {string[]} imgIds - Array of possible data-strk-img-id values to look up
 * @returns {string} The resolved CDN URL, or empty string if not found
 */
export function getResolvedImageUrl(imgIds) {
  for (const id of imgIds) {
    const url = cache.get(id)
    if (url) return url
  }
  return ''
}

/**
 * Get all cached image URLs
 * @returns {Map} The cache map
 */
export function getAllCachedImages() {
  return new Map(cache)
}

export default { getResolvedImageUrl, getAllCachedImages }

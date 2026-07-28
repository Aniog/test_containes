// Loads the image config at runtime via fetch() to avoid Vite's JSON plugin
// pre-transform race condition with the strk-img plugin's config file write.

let config = null

export default async function loadStrkImgConfig() {
  if (config) return config
  try {
    const res = await fetch('/src/strk-img-config.json?' + Date.now())
    config = await res.json()
    return config
  } catch (e) {
    console.error('[strk-img-config] Failed to load config:', e)
    return {}
  }
}

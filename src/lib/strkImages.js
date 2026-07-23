import strkImgConfig from '@/strk-img-config.json'

export function getStrkImage(id) {
  const entry = strkImgConfig[id]
  if (!entry?.results?.length) return undefined
  const selected = entry.picked ? entry.results.find((image) => String(image.id) === String(entry.picked)) : null
  return selected?.url || entry.results[0]?.url
}

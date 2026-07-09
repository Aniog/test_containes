import strkImgConfig from '../strk-img-config.json'

export const getConfiguredImageUrl = (imageId) => {
  const entry = strkImgConfig[imageId]
  const selected = entry?.results?.find((result) => result.id === entry.picked)
  return selected?.url ?? entry?.results?.[0]?.url ?? undefined
}

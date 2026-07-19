import strkImgConfig from "@/strk-img-config.json"

const unavailableImageIds = new Set(["photo-1609971919698-283e897e56a4"])

function pickAvailableImage(entry) {
  return entry?.results?.find((result) => result?.url && !unavailableImageIds.has(result.id))
}

const fallbackImage = pickAvailableImage(Object.values(strkImgConfig).find((entry) => pickAvailableImage(entry)))?.url || ""

export function getStrkImageUrl(imageId) {
  return pickAvailableImage(strkImgConfig[imageId])?.url || fallbackImage
}

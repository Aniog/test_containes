import strkImgConfig from '@/strk-img-config.json'

export const getStrkImageSrc = (imageId) => strkImgConfig?.[imageId]?.results?.[0]?.url || undefined

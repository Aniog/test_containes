import { imageUrls } from '../data/imageUrls'

export const getStrkImageUrl = (imageId) => imageUrls[imageId] || ''

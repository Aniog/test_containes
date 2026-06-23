import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

const uniqueText = new Set()

const addText = (value) => {
  if (typeof value !== 'string') return

  const normalized = value.trim()
  if (!normalized) return

  uniqueText.add(normalized)
}

Object.values(strkImgConfig).forEach((entry) => {
  addText(entry?.query)
  entry?.results?.forEach((result) => addText(result?.alt))
})

products.forEach((product) => {
  product.images?.forEach((image) => addText(image?.query))
})

export const stockImageInjectedText = Array.from(uniqueText)

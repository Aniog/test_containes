export const formatPrice = (price) => `$${price.toFixed(0)}`

export const normalizeCategory = (category) => {
  if (category === 'Gift Sets') return 'Sets'
  return category
}

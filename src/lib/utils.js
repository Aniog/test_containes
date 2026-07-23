export const formatPrice = (value) => `$${value.toFixed(0)}`

export const renderStars = (rating) => {
  const fullStars = Math.round(rating)
  return Array.from({ length: 5 }, (_, index) => index < fullStars)
}

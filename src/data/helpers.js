export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const formatPrice = (value) => currencyFormatter.format(value)

export const getAverageRatingLabel = (value) => value.toFixed(1)

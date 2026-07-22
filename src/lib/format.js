export const formatPrice = (value) => `$${value}`

export const getProductById = (products, id) =>
  products.find((product) => product.id === id) || products[0]

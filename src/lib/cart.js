import { products } from '@/data/products'

export const getCartItemProduct = (item) =>
  products.find((product) => product.id === item.productId)

export const getCartCount = (items) =>
  items.reduce((total, item) => total + item.quantity, 0)

export const getCartSubtotal = (items) =>
  items.reduce((total, item) => {
    const product = getCartItemProduct(item)
    return product ? total + product.price * item.quantity : total
  }, 0)

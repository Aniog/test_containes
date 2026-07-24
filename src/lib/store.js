import { atom } from 'jotai'

export const cartAtom = atom([])
export const isCartOpenAtom = atom(false)

export const cartTotalAtom = atom((get) => {
  const cart = get(cartAtom)
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
})

export const cartCountAtom = atom((get) => {
  const cart = get(cartAtom)
  return cart.reduce((count, item) => count + item.quantity, 0)
})

export const addToCartAtom = atom(null, (get, set, product) => {
  const cart = get(cartAtom)
  const existingItem = cart.find((item) => item.id === product.id)
  
  if (existingItem) {
    set(cartAtom, cart.map((item) => 
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  } else {
    set(cartAtom, [...cart, { ...product, quantity: 1 }])
  }
  set(isCartOpenAtom, true)
})

export const removeFromCartAtom = atom(null, (get, set, productId) => {
  const cart = get(cartAtom)
  set(cartAtom, cart.filter((item) => item.id !== productId))
})

export const updateQuantityAtom = atom(null, (get, set, { productId, quantity }) => {
  const cart = get(cartAtom)
  if (quantity < 1) return
  set(cartAtom, cart.map((item) => 
    item.id === productId ? { ...item, quantity } : item
  ))
})

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { products } from '@/data/storeData'

const StoreContext = createContext(null)

const defaultSelection = products.reduce((accumulator, product) => {
  accumulator[product.id] = product.toneOptions[0]
  return accumulator
}, {})

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedToneByProduct, setSelectedToneByProduct] = useState(defaultSelection)

  useEffect(() => {
    console.log('[Velmora] Cart updated', cartItems)
  }, [cartItems])

  const setToneForProduct = (productId, tone) => {
    setSelectedToneByProduct((current) => ({
      ...current,
      [productId]: tone,
    }))
  }

  const addToCart = (product, quantity = 1, tone) => {
    const selectedTone = tone || selectedToneByProduct[product.id] || product.toneOptions[0]

    setCartItems((current) => {
      const existingItem = current.find(
        (item) => item.productId === product.id && item.tone === selectedTone,
      )

      if (existingItem) {
        return current.map((item) =>
          item.productId === product.id && item.tone === selectedTone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          productId: product.id,
          tone: selectedTone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
    toast.success(`${product.name} added to cart`)
  }

  const removeFromCart = (productId, tone) => {
    setCartItems((current) =>
      current.filter((item) => !(item.productId === productId && item.tone === tone)),
    )
    toast.success('Item removed from cart')
  }

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, tone)
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.productId === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const cartDetails = useMemo(
    () =>
      cartItems.map((item) => {
        const product = products.find((entry) => entry.id === item.productId)
        return {
          ...item,
          product,
          lineTotal: product.price * item.quantity,
        }
      }),
    [cartItems],
  )

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const cartSubtotal = useMemo(
    () => cartDetails.reduce((total, item) => total + item.lineTotal, 0),
    [cartDetails],
  )

  const value = {
    cartItems: cartDetails,
    cartCount,
    cartSubtotal,
    isCartOpen,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    selectedToneByProduct,
    setToneForProduct,
    addToCart,
    removeFromCart,
    updateQuantity,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used inside StoreProvider')
  }

  return context
}

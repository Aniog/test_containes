import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora_cart')
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error('Failed to parse cart')
      }
    }
  }, [])

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(items))
  }, [items])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const addItem = (product, quantity = 1, tone = 'Gold') => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(i => i.id === product.id && i.tone === tone)
      
      if (existingItemIndex > -1) {
        const newItems = [...currentItems]
        newItems[existingItemIndex].quantity += quantity
        return newItems
      }
      
      // If we don't have images dynamically from state right now when calling addItem via quick actions,
      // fallback to searching elements for a string
      let imgRef = product.image || (product.images && product.images[0]) || `[${product.id}-title]`

      return [...currentItems, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        image: imgRef,
        quantity, 
        tone 
      }]
    })
    openCart()
  }

  const removeItem = (id, tone) => {
    setItems(current => current.filter(item => !(item.id === id && item.tone === tone)))
  }

  const updateQuantity = (id, tone, newQuantity) => {
    if (newQuantity < 1) return
    setItems(current => 
      current.map(item => 
        (item.id === id && item.tone === tone) ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const cartSubtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{ 
      items, 
      isOpen, 
      openCart, 
      closeCart, 
      addItem, 
      removeItem, 
      updateQuantity,
      cartCount,
      cartSubtotal
    }}>
      {children}
    </CartContext.Provider>
  )
}
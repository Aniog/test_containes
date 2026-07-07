import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'
import About from '@/pages/About'
import Journal from '@/pages/Journal'

function App() {
  // Cart state
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora_cart')
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (e) {
        console.error('Failed to parse cart from localStorage')
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cartItems))
  }, [cartItems])

  // Add item to cart
  const addToCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variant || product.variants?.[0] || 'Gold',
      image: product.image || product.images?.[0],
      quantity: product.quantity || 1,
    }

    setCartItems((prev) => {
      // Check if same product + variant already exists
      const existingIndex = prev.findIndex(
        (item) => item.id === cartItem.id && item.variant === cartItem.variant
      )

      if (existingIndex !== -1) {
        // Increment quantity
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + cartItem.quantity,
        }
        return updated
      } else {
        return [...prev, cartItem]
      }
    })

    toast.success(`${product.name} added to cart`, {
      description: `${cartItem.variant} · Qty ${cartItem.quantity}`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    })

    // Auto-open cart on mobile for better UX
    if (window.innerWidth < 768) {
      setTimeout(() => setIsCartOpen(true), 300)
    }
  }

  // Update quantity
  const updateCartQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return
    setCartItems((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], quantity: newQuantity }
      return updated
    })
  }

  // Remove item
  const removeFromCart = (index) => {
    const removed = cartItems[index]
    setCartItems((prev) => prev.filter((_, i) => i !== index))
    toast.info(`Removed ${removed.name}`)
  }

  // Clear cart (after checkout simulation)
  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem('velmora_cart')
  }

  // Handle checkout (simulated)
  const handleCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    toast.success('Thank you for your order!', {
      description: `Total: $${total} · This is a demo storefront.`,
    })
    setIsCartOpen(false)
    // Clear cart after "purchase"
    setTimeout(() => {
      clearCart()
    }, 1500)
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Search handler (simple: navigate to shop with query)
  const handleSearch = (query) => {
    // For now, just navigate to shop - could enhance with search param
    window.location.href = `/shop?q=${encodeURIComponent(query)}`
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[var(--color-offwhite)]">
        <Navbar 
          onCartOpen={() => setIsCartOpen(true)} 
          cartCount={cartCount}
          onSearch={handleSearch}
        />

        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<Home onAddToCart={addToCart} />} 
            />
            <Route 
              path="/shop" 
              element={<Shop onAddToCart={addToCart} />} 
            />
            <Route 
              path="/product/:slug" 
              element={<Product onAddToCart={addToCart} />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
            <Route 
              path="/journal" 
              element={<Journal />} 
            />
            {/* Fallback to home */}
            <Route path="*" element={<Home onAddToCart={addToCart} />} />
          </Routes>
        </main>

        <Footer />

        {/* Cart Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />

        {/* Toast Notifications */}
        <Toaster 
          position="top-center" 
          richColors 
          closeButton
          className="font-sans"
        />
      </div>
    </BrowserRouter>
  )
}

export default App

import { useEffect, useMemo, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/layout/Header?velmora=20260714b'
import Footer from '@/components/layout/Footer?velmora=20260714b'
import CartDrawer from '@/components/cart/CartDrawer?velmora=20260714b'
import strkImgConfig from '@/strk-img-config.json'

const CART_STORAGE_KEY = 'velmora-cart'

function AppShell({ cartItems, cartCount, subtotal, onUpdateQuantity, onRemoveFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const rootRef = useRef(null)
  const previousCartCountRef = useRef(cartCount)
  const location = useLocation()

  useEffect(() => {
    let disconnect = () => {}
    const frameId = window.requestAnimationFrame(() => {
      disconnect = ImageHelper.loadImages(strkImgConfig, rootRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      disconnect()
    }
  }, [location.pathname, location.search, location.hash, cartItems.length])

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      window.requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.hash, location.pathname])

  useEffect(() => {
    if (cartCount > previousCartCountRef.current) {
      setIsCartOpen(true)
    }

    previousCartCountRef.current = cartCount
  }, [cartCount])

  return (
    <div ref={rootRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={onUpdateQuantity}
        onRemove={onRemoveFromCart}
      />
    </div>
  )
}

export function useCart() {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === 'undefined') return []

    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, variant = product.variants?.[0] ?? 'Gold Tone', quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      setCartItems((current) =>
        current.filter((item) => !(item.id === productId && item.variant === variant)),
      )
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === productId && item.variant === variant ? { ...item, quantity } : item,
      ),
    )
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((current) =>
      current.filter((item) => !(item.id === productId && item.variant === variant)),
    )
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )
  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  return {
    cartItems,
    cartCount,
    subtotal,
    addToCart,
    updateQuantity,
    removeFromCart,
  }
}

export default AppShell

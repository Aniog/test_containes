import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'velmora-cart'

const readStoredCart = () => {
  if (typeof window === 'undefined') return []

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  } catch {
    return []
  }
}

const buildCartKey = (productId, variant) => `${productId}-${variant}`

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const triggerRef = useRef(null)
  const restoreFocusFrameRef = useRef(null)
  const restoreFocusIntervalRef = useRef(null)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    document.body.classList.toggle('drawer-open', isCartOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [isCartOpen])

  const clearRestoreFocus = useCallback(() => {
    if (restoreFocusFrameRef.current) {
      window.cancelAnimationFrame(restoreFocusFrameRef.current)
      restoreFocusFrameRef.current = null
    }

    if (restoreFocusIntervalRef.current) {
      window.clearInterval(restoreFocusIntervalRef.current)
      restoreFocusIntervalRef.current = null
    }
  }, [])

  const getFocusTarget = useCallback(() => {
    const preferredTrigger =
      triggerRef.current instanceof HTMLElement && triggerRef.current.isConnected
        ? triggerRef.current
        : null
    const fallbackTrigger = document.getElementById('site-cart-trigger')
    return preferredTrigger ?? fallbackTrigger
  }, [])

  const restoreTriggerFocus = useCallback(() => {
    const focusTarget = getFocusTarget()

    if (focusTarget instanceof HTMLElement) {
      focusTarget.focus({ preventScroll: true })
      return document.activeElement === focusTarget
    }

    return false
  }, [getFocusTarget])

  const scheduleRestoreFocus = useCallback(() => {
    clearRestoreFocus()
    restoreFocusFrameRef.current = window.requestAnimationFrame(() => {
      let attempts = 0
      restoreFocusIntervalRef.current = window.setInterval(() => {
        attempts += 1
        const restored = restoreTriggerFocus()

        if (restored || attempts >= 8) {
          clearRestoreFocus()
        }
      }, 40)
    })
  }, [clearRestoreFocus, restoreTriggerFocus])

  useEffect(() => clearRestoreFocus, [clearRestoreFocus])

  useEffect(() => {
    if (!isCartOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsCartOpen(false)
        scheduleRestoreFocus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCartOpen, scheduleRestoreFocus])

  const addItem = (product, quantity = 1, variant = 'Gold Tone') => {
    const cartKey = buildCartKey(product.id, variant)
    triggerRef.current = document.activeElement

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartKey === cartKey)
      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        {
          cartKey,
          id: product.id,
          slug: product.slug,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          material: product.material,
          variant,
          quantity,
        },
        ...currentItems,
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (cartKey) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.cartKey !== cartKey),
    )
  }

  const updateItemQuantity = (cartKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeItem(cartKey)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const closeCart = useCallback(() => {
    setIsCartOpen(false)
    scheduleRestoreFocus()
  }, [scheduleRestoreFocus])

  const openCart = useCallback((triggerElement) => {
    clearRestoreFocus()
    triggerRef.current = triggerElement ?? document.activeElement
    setIsCartOpen(true)
  }, [clearRestoreFocus])

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateItemQuantity,
      openCart,
      closeCart,
    }
  }, [closeCart, isCartOpen, items, openCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

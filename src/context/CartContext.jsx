import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'velmora-cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Load from localStorage on initial render
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);

  const addToCart = useCallback(
    (product, quantity = 1, variant = null) => {
      setCart((prevCart) => {
        const existingItemIndex = prevCart.findIndex(
          (item) => item.id === product.id && item.variant === variant
        );

        if (existingItemIndex > -1) {
          // Update quantity of existing item
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: updatedCart[existingItemIndex].quantity + quantity,
          };
          return updatedCart;
        }

        // Add new item
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            variant,
            quantity,
          },
        ];
      });
      openCart();
    },
    [openCart]
  );

  const removeFromCart = useCallback((itemId, variant = null) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === itemId && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((itemId, variant, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prevCart) =>
        prevCart.filter((item) => !(item.id === itemId && item.variant === variant))
      );
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const getCartCount = useCallback(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const value = {
    cart,
    isCartOpen,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

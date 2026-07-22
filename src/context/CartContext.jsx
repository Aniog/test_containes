import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('velmora-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product, variant, quantity = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.productId === product.id && item.variant === variant
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, {
        productId: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        image: product.images?.[0]?.id || '',
      }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, variant) => {
    setCartItems(prev => prev.filter(
      item => !(item.productId === productId && item.variant === variant)
    ));
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    setCartItems(prev => prev.map(item =>
      item.productId === productId && item.variant === variant
        ? { ...item, quantity }
        : item
    ));
  }, [removeFromCart]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

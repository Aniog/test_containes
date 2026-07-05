import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('velmora-cart');
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.variant === variant
      );
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, variant, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setCart(prev => prev.filter(
      item => !(item.id === id && item.variant === variant)
    ));
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, variant);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

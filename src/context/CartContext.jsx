import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product, variant = null, quantity = 1) => {
    setIsLoading(true);
    
    // Simulate network delay for premium feel
    await new Promise(resolve => setTimeout(resolve, 300));

    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.variant === variant
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        setIsLoading(false);
        return updated;
      }

      setIsLoading(false);
      return [...prev, { product, variant, quantity }];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant = null) => {
    setCartItems(prev => 
      prev.filter(item => !(item.product.id === productId && item.variant === variant))
    );
  };

  const updateQuantity = (productId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, variant);
      return;
    }

    setCartItems(prev => 
      prev.map(item => 
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + (item.product.price * item.quantity), 
    0
  );

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity, 
    0
  );

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isLoading,
  };

  return (
    <CartContext.Provider value={value}>
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

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product, quantity = 1, variant = null) => {
    setIsLoading(true);
    
    // Simulate a brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const existingItem = cart.find(
      item => item.id === product.id && item.variant === variant
    );

    if (existingItem) {
      setCart(prev => prev.map(item =>
        item.id === product.id && item.variant === variant
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart(prev => [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
        variant,
        slug: product.slug,
      }]);
    }
    
    setIsLoading(false);
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId, variant = null) => {
    setCart(prev => prev.filter(
      item => !(item.id === itemId && item.variant === variant)
    ));
  };

  const updateQuantity = (itemId, variant = null, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, variant);
      return;
    }
    
    setCart(prev => prev.map(item =>
      item.id === itemId && item.variant === variant
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    isLoading,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
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

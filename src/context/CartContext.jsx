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
        console.error('Failed to parse cart from localStorage');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product, quantity = 1, variant = 'Gold') => {
    setIsLoading(true);
    
    // Simulate network delay for premium feel
    await new Promise(resolve => setTimeout(resolve, 300));

    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.product.id === product.id && item.variant === variant
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { product, quantity, variant }];
    });

    setIsLoading(false);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCart(prevCart =>
      prevCart.filter(
        item => !(item.product.id === productId && item.variant === variant)
      )
    );
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    isLoading,
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

export default CartContext;

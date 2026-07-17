import { createContext, useContext, useState, useEffect, useCallback } from 'react';

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

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const addToCart = useCallback((product, variant = null, quantity = 1) => {
    setIsLoading(true);
    
    // Simulate brief loading for UX
    setTimeout(() => {
      setCart(prevCart => {
        const existingItemIndex = prevCart.findIndex(
          item => item.id === product.id && item.variant === variant
        );

        if (existingItemIndex > -1) {
          // Update quantity of existing item
          const newCart = [...prevCart];
          newCart[existingItemIndex] = {
            ...newCart[existingItemIndex],
            quantity: newCart[existingItemIndex].quantity + quantity,
          };
          setIsLoading(false);
          return newCart;
        }

        // Add new item
        setIsLoading(false);
        return [...prevCart, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          variant: variant,
          quantity: quantity,
          slug: product.slug,
        }];
      });
      
      // Open cart drawer after adding
      setIsCartOpen(true);
    }, 300);
  }, []);

  const removeFromCart = useCallback((itemId, variant) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === itemId && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((itemId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, variant);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    isLoading,
    openCart,
    closeCart,
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

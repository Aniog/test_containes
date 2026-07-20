import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartLoading, setIsCartLoading] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, variant = null) => {
    setIsCartLoading(true);
    
    setTimeout(() => {
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
          variant,
          quantity,
          slug: product.slug
        }]);
      }
      
      setIsCartOpen(true);
      setIsCartLoading(false);
    }, 300);
  };

  const removeFromCart = (itemId, variant) => {
    setCart(prev => prev.filter(
      item => !(item.id === itemId && item.variant === variant)
    ));
  };

  const updateQuantity = (itemId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, variant);
      return;
    }
    
    setCart(prev => prev.map(item =>
      item.id === itemId && item.variant === variant
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      setIsCartOpen,
      isCartLoading,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount
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

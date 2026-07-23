import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, variant = 'gold') => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.variant === variant
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity,
        variant
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === productId && item.variant === variant))
    );
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      openCart,
      closeCart,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
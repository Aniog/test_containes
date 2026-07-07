import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant, quantity = 1) => {
    const cartItem = {
      id: `${product.id}-${variant}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[variant] || product.images[product.defaultVariant],
      variant: variant,
      variantLabel: product.variants.find(v => v.value === variant)?.label || variant,
      quantity: quantity,
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === cartItem.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, cartItem];
      }
    });

    // Show toast feedback
    setLastAddedItem({ name: product.name, quantity });

    // Open cart drawer when adding item
    setTimeout(() => {
      setIsCartOpen(true);
    }, 180);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const dismissToast = () => setLastAddedItem(null);

  const value = {
    cart,
    isCartOpen,
    lastAddedItem,
    dismissToast,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    openCart,
    closeCart,
    setIsCartOpen,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

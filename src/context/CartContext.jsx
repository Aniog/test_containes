import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse saved cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, variant, quantity = 1) => {
    const cartItem = {
      id: `${product.id}-${variant.value}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: variant.label,
      variantValue: variant.value,
      quantity,
      image: product.images?.[0],
    };

    setItems((current) => {
      const existing = current.findIndex(
        (item) => item.id === cartItem.id
      );

      if (existing !== -1) {
        // Update quantity if item exists
        const updated = [...current];
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + quantity,
        };
        return updated;
      } else {
        return [...current, cartItem];
      }
    });

    // Open cart drawer when adding
    setIsOpen(true);
  };

  const removeFromCart = (itemId) => {
    setItems((current) => current.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setItems((current) =>
      current.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  const cartTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const value = {
    items,
    isOpen,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

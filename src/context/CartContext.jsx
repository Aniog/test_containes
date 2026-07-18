import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

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

  const addToCart = (product, variant, quantity = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.productId === product.id && item.variantId === variant.id
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
        price: variant.price,
        variant: variant.name,
        variantId: variant.id,
        quantity,
        image: product.images[0],
      }];
    });
  };

  const removeFromCart = (productId, variantId) => {
    setCartItems(prev => prev.filter(item => !(item.productId === productId && item.variantId === variantId)));
  };

  const updateQuantity = (productId, variantId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.productId === productId && item.variantId === variantId
        ? { ...item, quantity }
        : item
    ));
  };

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

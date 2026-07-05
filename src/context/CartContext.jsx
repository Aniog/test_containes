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
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (product, variant, quantity = 1) => {
    setIsLoading(true);
    
    // Simulate a brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const existingIndex = cart.findIndex(
      item => item.product.id === product.id && item.variant.name === variant.name
    );

    if (existingIndex > -1) {
      // Update quantity if item already in cart
      const newCart = [...cart];
      newCart[existingIndex].quantity += quantity;
      setCart(newCart);
    } else {
      // Add new item to cart
      setCart([...cart, { product, variant, quantity }]);
    }
    
    setIsLoading(false);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variantName) => {
    setCart(cart.filter(
      item => !(item.product.id === productId && item.variant.name === variantName)
    ));
  };

  const updateQuantity = (productId, variantName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantName);
      return;
    }

    setCart(cart.map(item => {
      if (item.product.id === productId && item.variant.name === variantName) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
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

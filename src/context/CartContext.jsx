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

  const addToCart = (product, quantity = 1, variant = null) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setCart(prevCart => {
        const existingIndex = prevCart.findIndex(
          item => item.id === product.id && item.variant === variant
        );

        if (existingIndex > -1) {
          const updatedCart = [...prevCart];
          updatedCart[existingIndex].quantity += quantity;
          setIsLoading(false);
          return updatedCart;
        }

        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          variant,
          quantity
        };

        setIsLoading(false);
        setIsCartOpen(true);
        return [...prevCart, newItem];
      });
    }, 300);
  };

  const removeFromCart = (productId, variant = null) => {
    setCart(prevCart => 
      prevCart.filter(item => !(item.id === productId && item.variant === variant))
    );
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }

    setCart(prevCart => 
      prevCart.map(item => 
        (item.id === productId && item.variant === variant)
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

  return (
    <CartContext.Provider value={{
      cart,
      cartCount: getCartCount(),
      cartTotal: getCartTotal(),
      isCartOpen,
      isLoading,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      openCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

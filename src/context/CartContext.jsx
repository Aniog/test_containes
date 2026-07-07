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

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) => item.id === product.id && item.variant === variant
        );

        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id && item.variant === variant
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            variant,
            quantity,
          },
        ];
      });
      setIsLoading(false);
      setIsCartOpen(true);
    }, 300);
  };

  const removeFromCart = (itemId, variant) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === itemId && item.variant === variant))
    );
  };

  const updateQuantity = (itemId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, variant);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
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

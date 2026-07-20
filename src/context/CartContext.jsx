import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('velmora_cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product, quantity = 1, options = {}) => {
    setItems(current => {
      const existing = current.find(
        i => i.id === product.id && JSON.stringify(i.options) === JSON.stringify(options)
      );
      
      if (existing) {
        return current.map(i => 
          i === existing ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      
      return [...current, { ...product, quantity, options }];
    });
    setIsOpen(true);
  };

  const removeItem = (index) => {
    setItems(current => current.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return;
    setItems(current => 
      current.map((item, i) => i === index ? { ...item, quantity } : item)
    );
  };

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      total,
      count,
      isOpen,
      setIsOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

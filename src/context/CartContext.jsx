import { createContext, useContext, useReducer, useCallback } from 'react';
import { ShoppingBag } from 'lucide-react';

const CartContext = createContext(null);

const loadCart = () => {
  try {
    const saved = localStorage.getItem('velmora-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  } catch {
    // Silently fail
  }
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}-${variant}`;
      const existing = state.find((item) => `${item.product.id}-${item.variant}` === key);
      if (existing) {
        return state.map((item) =>
          `${item.product.id}-${item.variant}` === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...state, { product, variant, quantity, key }];
    }
    case 'REMOVE_ITEM':
      return state.filter((_, i) => i !== action.payload);
    case 'UPDATE_QUANTITY': {
      const { index, quantity } = action.payload;
      if (quantity <= 0) return state.filter((_, i) => i !== index);
      return state.map((item, i) => (i === index ? { ...item, quantity } : item));
    }
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
  }, []);

  const removeItem = useCallback((index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  }, []);

  const updateQuantity = useCallback((index, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  // Save to localStorage whenever items change
  saveCart(items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}

export { ShoppingBag };
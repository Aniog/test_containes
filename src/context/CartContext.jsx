import { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'velmora-cart';

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.productId === action.productId && item.material === action.material
      );
      if (existing) {
        return state.map((item) =>
          item.productId === action.productId && item.material === action.material
            ? { ...item, quantity: item.quantity + (action.quantity || 1) }
            : item
        );
      }
      return [...state, {
        productId: action.productId,
        material: action.material || 'gold',
        quantity: action.quantity || 1,
        name: action.name,
        price: action.price,
        image: action.image,
      }];
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.productId === action.productId && item.material === action.material)
      );
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.productId === action.productId && item.material === action.material
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addItem = (product) => dispatch({ type: 'ADD_ITEM', ...product });
  const removeItem = (productId, material) => dispatch({ type: 'REMOVE_ITEM', productId, material });
  const updateQuantity = (productId, material, quantity) => dispatch({ type: 'UPDATE_QUANTITY', productId, material, quantity });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart, cartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
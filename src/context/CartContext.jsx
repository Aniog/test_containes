import { createContext, useContext, useReducer, useState } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = `${action.product.id}-${action.variant}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { key, product: action.product, variant: action.variant, quantity: 1 },
        ],
      };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.key !== action.key) };
    case 'UPDATE_QTY': {
      if (action.qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== action.key) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, quantity: action.qty } : i
        ),
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product, variant = 'Gold Tone') => {
    dispatch({ type: 'ADD_ITEM', product, variant });
    setIsOpen(true);
  };
  const removeItem = (key) => dispatch({ type: 'REMOVE_ITEM', key });
  const updateQty = (key, qty) => dispatch({ type: 'UPDATE_QTY', key, qty });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

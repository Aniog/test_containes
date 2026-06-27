import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.item.id && i.tone === action.item.tone
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id && i.tone === action.item.tone
              ? { ...i, quantity: i.quantity + action.item.quantity }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.item] };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.id && i.tone === action.tone)
        ),
      };
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.id === action.id && i.tone === action.tone)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id && i.tone === action.tone
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  isOpen: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product, tone = 'Gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        tone,
        quantity,
        imgId: product.imgId,
      },
    });
  }, []);

  const removeItem = useCallback((id, tone) => {
    dispatch({ type: 'REMOVE_ITEM', id, tone });
  }, []);

  const updateQuantity = useCallback((id, tone, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, tone, quantity });
  }, []);

  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), []);
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), []);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ ...state, itemCount, subtotal, addItem, removeItem, updateQuantity, toggleCart, openCart, closeCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

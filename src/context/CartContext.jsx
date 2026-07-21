import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const initial = { items: [], isOpen: false };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, variant } = action.payload;
      const key = `${product.id}-${variant}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            variant,
            quantity: 1,
          },
        ],
        isOpen: true,
      };
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.payload),
      };
    case 'QTY': {
      const { key, quantity } = action.payload;
      if (quantity < 1) {
        return { ...state, items: state.items.filter((i) => i.key !== key) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === key ? { ...i, quantity } : i
        ),
      };
    }
    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN':
      return { ...state, isOpen: true };
    case 'CLOSE':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initial);

  const addItem = useCallback(
    (product, variant) =>
      dispatch({ type: 'ADD', payload: { product, variant } }),
    []
  );
  const removeItem = useCallback(
    (key) => dispatch({ type: 'REMOVE', payload: key }),
    []
  );
  const setQuantity = useCallback(
    (key, quantity) =>
      dispatch({ type: 'QTY', payload: { key, quantity } }),
    []
  );
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE' }), []);
  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), []);

  const totalItems = state.items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = state.items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        ...state,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        setQuantity,
        toggleCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}

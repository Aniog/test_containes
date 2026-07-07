import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Each item is stored by uniqueId = `${productId}-${variant}`
      const uid = action.payload.uniqueId;
      const existingIndex = state.items.findIndex((item) => item.uniqueId === uid);
      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + (action.payload.quantity || 1),
        };
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.uniqueId !== action.payload),
      };
    }
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map((item) =>
        item.uniqueId === action.payload.uniqueId
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      );
      // Remove items with quantity 0
      return { ...state, items: newItems.filter((item) => item.quantity > 0) };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('velmora_cart');
        if (saved) {
          const parsed = JSON.parse(saved);
          return { ...init, items: parsed.items || [] };
        }
      } catch {
        // ignore parse errors
      }
    }
    return init;
  });

  // Persist cart to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('velmora_cart', JSON.stringify({ items: state.items }));
      } catch {
        // ignore
      }
    }
  }, [state.items]);

  const addItem = (product, variant = 'gold', quantity = 1) => {
    const uniqueId = `${product.id}-${variant}`;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        uniqueId,
        productId: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        variant,
        quantity,
        images: product.images,
      },
    });
    dispatch({ type: 'OPEN_CART' });
  };

  const removeItem = (uniqueId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: uniqueId });
  };

  const updateQuantity = (uniqueId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { uniqueId, quantity } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        itemCount,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}

import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const itemKey = `${product.id}-${variant.id}`;
      const existingItem = state.items[itemKey];

      if (existingItem) {
        return {
          ...state,
          items: {
            ...state.items,
            [itemKey]: {
              ...existingItem,
              quantity: existingItem.quantity + quantity,
            },
          },
        };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [itemKey]: {
            product,
            variant,
            quantity,
          },
        },
      };
    }

    case 'REMOVE_ITEM': {
      const { itemKey } = action.payload;
      const newItems = { ...state.items };
      delete newItems[itemKey];
      return { ...state, items: newItems };
    }

    case 'UPDATE_QUANTITY': {
      const { itemKey, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = { ...state.items };
        delete newItems[itemKey];
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [itemKey]: {
            ...state.items[itemKey],
            quantity,
          },
        },
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: {} };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    default:
      return state;
  }
};

const initialState = {
  items: {},
  isOpen: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
    dispatch({ type: 'OPEN_CART' });
  }, []);

  const removeItem = useCallback((itemKey) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { itemKey } });
  }, []);

  const updateQuantity = useCallback((itemKey, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemKey, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: 'TOGGLE_CART' });
  }, []);

  const openCart = useCallback(() => {
    dispatch({ type: 'OPEN_CART' });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: 'CLOSE_CART' });
  }, []);

  const cartItems = Object.entries(state.items).map(([key, item]) => ({
    key,
    ...item,
  }));

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        cartCount,
        cartTotal,
        isOpen: state.isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
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
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

import { createContext, useContext, useReducer, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variantId, quantity } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.productId === product.id && item.variantId === variantId
      );

      if (existingIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity += quantity;
        return { ...state, items: updatedItems, isOpen: true };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            cartItemId: `${product.id}-${variantId}-${Date.now()}`,
            productId: product.id,
            variantId,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity,
          },
        ],
        isOpen: true,
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.cartItemId !== action.payload),
      };
    case 'UPDATE_QUANTITY': {
      const { cartItemId, quantity } = action.payload;
      if (quantity < 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.cartItemId !== cartItemId),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity } : item
        ),
      };
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
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product, variantId, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variantId, quantity } });
  }, []);

  const removeItem = useCallback((cartItemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartItemId });
  }, []);

  const updateQuantity = useCallback((cartItemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartItemId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const openCart = useCallback(() => {
    dispatch({ type: 'OPEN_CART' });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: 'CLOSE_CART' });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: 'TOGGLE_CART' });
  }, []);

  const totals = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { itemCount, subtotal };
  }, [state.items]);

  const value = {
    ...state,
    ...totals,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
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

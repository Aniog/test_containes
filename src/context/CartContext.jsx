import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const existingIndex = state.items.findIndex(
        item => item.productId === product.id && item.variant === variant
      );
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantity,
        };
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [...state.items, {
          productId: product.id,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          variant,
          quantity,
          imageId: product.images[0].id,
          imageQuery: product.images[0].query,
        }],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((_, i) => i !== action.payload),
      };
    }
    case 'UPDATE_QUANTITY': {
      const { index, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((_, i) => i !== index),
        };
      }
      const newItems = [...state.items];
      newItems[index] = { ...newItems[index], quantity };
      return { ...state, items: newItems };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

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
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items: state.items,
      itemCount,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

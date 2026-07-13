import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const loadCart = () => {
  try {
    const raw = localStorage.getItem('velmora-cart');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  localStorage.setItem('velmora-cart', JSON.stringify(items));
};

const cartReducer = (state, action) => {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        i => i.productId === action.payload.productId && i.variant === action.payload.variant
      );
      if (existing) {
        next = state.map(i =>
          i.productId === action.payload.productId && i.variant === action.payload.variant
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {
        next = [...state, { ...action.payload }];
      }
      break;
    }
    case 'REMOVE_ITEM':
      next = state.filter(
        i => !(i.productId === action.payload.productId && i.variant === action.payload.variant)
      );
      break;
    case 'UPDATE_QUANTITY':
      next = state.map(i =>
        i.productId === action.payload.productId && i.variant === action.payload.variant
          ? { ...i, quantity: Math.max(1, action.payload.quantity) }
          : i
      );
      break;
    case 'CLEAR_CART':
      next = [];
      break;
    default:
      return state;
  }
  saveCart(next);
  return next;
};

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const addItem = (product, quantity = 1, variant = 'Gold') => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        image: product.images?.[0]?.src || '',
      },
    });
  };

  const removeItem = (productId, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } });
  };

  const updateQuantity = (productId, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

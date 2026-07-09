import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

const CART_KEY = 'velmora_cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch { /* noop */ }
}

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (i) => i.productId === action.payload.productId && i.variant === action.payload.variant
      );
      if (existing) {
        next = state.map((i) =>
          i.productId === action.payload.productId && i.variant === action.payload.variant
            ? { ...i, quantity: i.quantity + (action.payload.quantity || 1) }
            : i
        );
      } else {
        next = [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }
      break;
    }
    case 'REMOVE_ITEM':
      next = state.filter(
        (i) => !(i.productId === action.payload.productId && i.variant === action.payload.variant)
      );
      break;
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        next = state.filter(
          (i) => !(i.productId === action.payload.productId && i.variant === action.payload.variant)
        );
      } else {
        next = state.map((i) =>
          i.productId === action.payload.productId && i.variant === action.payload.variant
            ? { ...i, quantity: action.payload.quantity }
            : i
        );
      }
      break;
    case 'CLEAR_CART':
      next = [];
      break;
    default:
      return state;
  }
  saveCart(next);
  return next;
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, null, loadCart);

  const addItem = (product, variant = 'Gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        imageId: product.images?.[0]?.id || product.thumbId,
        thumbId: product.thumbId,
        titleId: product.titleId,
        descId: product.descId,
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

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }}
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
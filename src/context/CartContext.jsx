import { createContext, useContext, useReducer, useEffect } from 'react';
import { products } from '@/data/products';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function loadCart() {
  try {
    const stored = localStorage.getItem('velmora-cart');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  } catch { /* noop */ }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find(
        (i) => i.productId === action.productId && i.variant === action.variant
      );
      if (existing) {
        return state.map((i) =>
          i.productId === action.productId && i.variant === action.variant
            ? { ...i, quantity: i.quantity + (action.quantity || 1) }
            : i
        );
      }
      return [...state, {
        productId: action.productId,
        variant: action.variant || 'gold',
        quantity: action.quantity || 1,
      }];
    }
    case 'REMOVE':
      return state.filter(
        (i) => !(i.productId === action.productId && i.variant === action.variant)
      );
    case 'UPDATE_QTY':
      return state.map((i) =>
        i.productId === action.productId && i.variant === action.variant
          ? { ...i, quantity: Math.max(1, action.quantity) }
          : i
      );
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => {
    const product = products.find((p) => p.id === i.productId);
    return sum + (product ? product.price * i.quantity : 0);
  }, 0);

  return (
    <CartContext.Provider value={{ items, itemCount, subtotal }}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (!ctx) throw new Error('useCartDispatch must be inside CartProvider');
  return ctx;
}

export function useCartItem(productId, variant = 'gold') {
  const { items } = useCart();
  return items.find((i) => i.productId === productId && i.variant === variant) || null;
}

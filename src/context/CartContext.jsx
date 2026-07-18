import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const CartDispatchContext = createContext();

function loadCart() {
  try {
    const saved = localStorage.getItem('velmora-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem('velmora-cart', JSON.stringify(items));
}

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}-${variant}`;
      const existing = state.find(
        (i) => i.product.id === product.id && i.variant === variant
      );
      if (existing) {
        next = state.map((i) =>
          i.product.id === product.id && i.variant === variant
            ? { ...i, quantity: Math.min(i.quantity + quantity, 10) }
            : i
        );
      } else {
        next = [...state, { key, product, variant, quantity }];
      }
      break;
    }
    case 'REMOVE_ITEM': {
      next = state.filter((i) => i.key !== action.payload.key);
      break;
    }
    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload;
      if (quantity < 1) {
        next = state.filter((i) => i.key !== key);
      } else {
        next = state.map((i) =>
          i.key === key ? { ...i, quantity: Math.min(quantity, 10) } : i
        );
      }
      break;
    }
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

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

export function useCartCount() {
  const cart = useCart();
  return cart.reduce((sum, i) => sum + i.quantity, 0);
}

export function useCartTotal() {
  const cart = useCart();
  return cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

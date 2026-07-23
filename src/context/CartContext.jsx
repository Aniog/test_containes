import { createContext, useContext, useReducer, useCallback, useRef, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'velmora-cart';

function loadCart() {
  try {
    const data = sessionStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch { /* noop */ }
}

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'INIT':
      return { ...state, items: action.payload, drawerOpen: false };
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.color === action.payload.color
      );
      if (existing) {
        next = {
          ...state,
          drawerOpen: true,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.color === action.payload.color
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      } else {
        next = {
          ...state,
          drawerOpen: true,
          items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
        };
      }
      saveCart(next.items);
      return next;
    }
    case 'REMOVE_ITEM':
      next = {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.color === action.payload.color)
        ),
      };
      saveCart(next.items);
      return next;
    case 'UPDATE_QUANTITY':
      next = {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id && item.color === action.payload.color
              ? { ...item, quantity: Math.max(0, action.payload.quantity) }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
      saveCart(next.items);
      return next;
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen };
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], drawerOpen: false });
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      dispatch({ type: 'INIT', payload: loadCart() });
    }
  }, []);

  const addItem = useCallback((product, color = 'Gold', quantity = 1) => {
    const img = product.images.find((img) => img.color.toLowerCase() === color.toLowerCase());
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        color,
        imgId: img ? img.imgId : product.images[0].imgId,
        quantity,
      },
    });
  }, []);

  const removeItem = useCallback((id, color) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, color } });
  }, []);

  const updateQuantity = useCallback((id, color, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, color, quantity } });
  }, []);

  const toggleDrawer = useCallback(() => dispatch({ type: 'TOGGLE_DRAWER' }), []);
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), []);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        itemCount,
        subtotal,
        drawerOpen: state.drawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        toggleDrawer,
        closeDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}

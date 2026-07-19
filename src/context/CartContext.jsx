import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const BROKEN_IMG_REPLACEMENTS = {
  '1635767798638-3665c7e180b0': '1561828995-aa79a2db86dd',
  '1515562141589-677acb0d628b': '1626784215021-2e39ccf971cd',
};

const migrateImages = (item) => {
  if (!item.images) return item;
  const fixUrl = (url) => {
    if (!url) return url;
    let fixed = url;
    for (const [broken, replacement] of Object.entries(BROKEN_IMG_REPLACEMENTS)) {
      if (fixed.includes(broken)) {
        fixed = fixed.replace(broken, replacement);
      }
    }
    return fixed;
  };
  return {
    ...item,
    images: item.images?.map(fixUrl),
    hoverImage: fixUrl(item.hoverImage),
  };
};

const loadCart = () => {
  try {
    const saved = localStorage.getItem('velmora-cart');
    if (!saved) return [];
    const cart = JSON.parse(saved);
    return cart.map(migrateImages);
  } catch {
    return [];
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((item) => item.id === action.product.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + (action.quantity || 1) }
            : item
        );
      }
      return [...state, { ...action.product, quantity: action.quantity || 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id);
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', product, quantity });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
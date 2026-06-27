import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'velmora-cart';

const initialState = {
  items: [],
  isOpen: false
};

function loadCartFromStorage() {
  if (typeof window === 'undefined') return initialState;
  
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { items: parsed.items || [], isOpen: false };
    }
  } catch (error) {
    console.error('Failed to load cart from storage:', error);
  }
  return initialState;
}

function saveCartToStorage(cart) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: cart.items }));
  } catch (error) {
    console.error('Failed to save cart to storage:', error);
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item => item.productId === action.payload.productId && 
                item.variant === action.payload.variant
      );
      
      let newItems;
      if (existingIndex > -1) {
        newItems = state.items.map((item, index) => 
          index === existingIndex 
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }
      
      return { ...state, items: newItems, isOpen: true };
    }
    
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };
    }
    
    case 'TOGGLE_CART': {
      return { ...state, isOpen: !state.isOpen };
    }
    
    case 'OPEN_CART': {
      return { ...state, isOpen: true };
    }
    
    case 'CLOSE_CART': {
      return { ...state, isOpen: false };
    }
    
    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }
    
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, loadCartFromStorage);
  
  // Persist cart to localStorage
  useEffect(() => {
    saveCartToStorage(state);
  }, [state.items]);
  
  const addItem = (product, variant = 'gold', quantity = 1) => {
    const itemId = `${product.id}-${variant}-${Date.now()}`;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: itemId,
        productId: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        image: product.images[0]?.src,
        slug: product.slug
      }
    });
  };
  
  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };
  
  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  };
  
  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };
  
  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };
  
  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  
  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const value = {
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    openCart,
    closeCart,
    clearCart
  };
  
  return (
    <CartContext.Provider value={value}>
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

export default CartContext;

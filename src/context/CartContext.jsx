import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  isOpen: false,
  cartCount: 0,
  cartTotal: 0
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );
      
      let newItems;
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }
      
      return {
        ...state,
        items: newItems,
        cartCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        cartTotal: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        item => !(item.id === action.payload.id && item.variant === action.payload.variant)
      );
      return {
        ...state,
        items: newItems,
        cartCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        cartTotal: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id && item.variant === action.payload.variant) {
          return { ...item, quantity: Math.max(0, action.payload.quantity) };
        }
        return item;
      }).filter(item => item.quantity > 0);
      
      return {
        ...state,
        items: newItems,
        cartCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        cartTotal: newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    case 'CLEAR_CART': {
      return {
        ...state,
        items: [],
        cartCount: 0,
        cartTotal: 0
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
    case 'LOAD_CART': {
      return {
        ...state,
        items: action.payload,
        cartCount: action.payload.reduce((sum, item) => sum + item.quantity, 0),
        cartTotal: action.payload.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (e) {
        console.error('Failed to load cart from localStorage:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product, variant = 'default', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images ? product.images[0] : '/api/placeholder/400/400',
        variant: variant,
        quantity: quantity
      }
    });
  };

  const removeItem = (id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  };

  const updateQuantity = (id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
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

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        cartCount: state.cartCount,
        cartTotal: state.cartTotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        openCart,
        closeCart
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

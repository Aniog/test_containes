import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );

      let newItems;
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return { ...state, items: newItems, totalItems, totalPrice };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.cartId !== action.payload);
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { ...state, items: newItems, totalItems, totalPrice };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.cartId === action.payload.cartId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { ...state, items: newItems, totalItems, totalPrice };
    }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'CLEAR_CART':
      return { ...initialState };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    // Load cart from localStorage on init
    try {
      const savedCart = localStorage.getItem('velmora-cart');
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        return {
          ...parsed,
          isOpen: false
        };
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage:', e);
    }
    return initial;
  });

  // Save cart to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify({
        items: state.items,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice
      }));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [state.items, state.totalItems, state.totalPrice]);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartId = `${product.id}-${variant}`;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        cartId,
        variant,
        quantity
      }
    });
  };

  const removeFromCart = (cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
  };

  const updateQuantity = (cartId, quantity) => {
    if (quantity < 1) {
      removeFromCart(cartId);
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  };

  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        openCart,
        closeCart,
        clearCart
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

import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        item.selectedVariant === action.payload.selectedVariant
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === existingItem.id && item.selectedVariant === existingItem.selectedVariant
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.selectedVariant === action.payload.selectedVariant)
        ),
      };
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.selectedVariant === action.payload.selectedVariant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    
    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      };
    
    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };
    
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload,
      };
    
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product, selectedVariant = "Gold") => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, selectedVariant },
    });
  };

  const removeItem = (id, selectedVariant) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id, selectedVariant },
    });
  };

  const updateQuantity = (id, selectedVariant, quantity) => {
    if (quantity < 1) {
      removeItem(id, selectedVariant);
      return;
    }
    
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, selectedVariant, quantity },
    });
  };

  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });

  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        cartCount,
        cartTotal,
        addItem,
        removeItem,
        updateQuantity,
        toggleCart,
        openCart,
        closeCart,
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

import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );
      
      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex].quantity += action.payload.quantity;
        return { ...state, items: newItems };
      }
      
      return { ...state, items: [...state.items, action.payload] };
    }
    
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map((item) => {
        if (item.id === action.payload.id && item.variant === action.payload.variant) {
          return { ...item, quantity: Math.max(1, action.payload.quantity) };
        }
        return item;
      });
      return { ...state, items: newItems };
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
};

const initialState = {
  items: [],
  isOpen: false,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    // Try to load cart from localStorage on mount
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('velmora-cart');
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart);
          return { ...initial, items: parsed.items || [] };
        } catch (e) {
          console.error('Failed to parse saved cart:', e);
        }
      }
    }
    return initial;
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('velmora-cart', JSON.stringify({ items: state.items }));
    }
  }, [state.items]);

  const addToCart = (product, variant = null, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant: variant || product.variants?.[0] || null,
        quantity,
      },
    });
    dispatch({ type: 'OPEN_CART' });
  };

  const removeFromCart = (id, variant) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, variant } });
  };

  const updateQuantity = (id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
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

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        itemCount,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        openCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;

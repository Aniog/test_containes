import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "velmora-cart";

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) => item.id === action.product.id && item.variant === action.variant
      );
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id && item.variant === action.variant
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      }
      return [
        ...state,
        {
          id: action.product.id,
          name: action.product.name,
          price: action.product.price,
          image: action.product.images[0],
          variant: action.variant,
          quantity: action.quantity,
        },
      ];
    }
    case "REMOVE_ITEM":
      return state.filter(
        (item) => !(item.id === action.id && item.variant === action.variant)
      );
    case "UPDATE_QUANTITY":
      if (action.quantity <= 0) {
        return state.filter(
          (item) => !(item.id === action.id && item.variant === action.variant)
        );
      }
      return state.map((item) =>
        item.id === action.id && item.variant === action.variant
          ? { ...item, quantity: action.quantity }
          : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (product, variant = "gold", quantity = 1) => {
    dispatch({ type: "ADD_ITEM", product, variant, quantity });
  };

  const removeItem = (id, variant = "gold") => {
    dispatch({ type: "REMOVE_ITEM", id, variant });
  };

  const updateQuantity = (id, variant = "gold", quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", id, variant, quantity });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "velmora_cart";

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Silently fail
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) => item.id === action.product.id && item.material === action.material
      );
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id && item.material === action.material
            ? { ...item, quantity: item.quantity + 1 }
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
          material: action.material || "gold",
          quantity: 1,
        },
      ];
    }
    case "REMOVE_ITEM":
      return state.filter(
        (item) => !(item.id === action.id && item.material === action.material)
      );
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.id && item.material === action.material
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const addItem = (product, material = "gold") =>
    dispatch({ type: "ADD_ITEM", product, material });

  const removeItem = (id, material) =>
    dispatch({ type: "REMOVE_ITEM", id, material });

  const updateQuantity = (id, material, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", id, material, quantity });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
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
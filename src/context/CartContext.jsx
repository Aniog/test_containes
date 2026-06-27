import { createContext, useContext, useReducer, useCallback } from "react";

const CartContext = createContext(null);

const loadCart = () => {
  try {
    const saved = localStorage.getItem("velmora-cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  try {
    localStorage.setItem("velmora-cart", JSON.stringify(items));
  } catch {
    // Silently fail
  }
};

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) => item.id === action.product.id && item.material === action.material
      );
      if (existing) {
        next = state.map((item) =>
          item.id === action.product.id && item.material === action.material
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      } else {
        next = [
          ...state,
          {
            id: action.product.id,
            name: action.product.name,
            price: action.product.price,
            image: action.product.images[0],
            material: action.material,
            quantity: action.quantity,
          },
        ];
      }
      break;
    }
    case "REMOVE_ITEM":
      next = state.filter(
        (item) => !(item.id === action.id && item.material === action.material)
      );
      break;
    case "UPDATE_QUANTITY":
      next = state.map((item) =>
        item.id === action.id && item.material === action.material
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      );
      break;
    case "CLEAR":
      next = [];
      break;
    default:
      return state;
  }
  saveCart(next);
  return next;
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  const addItem = useCallback((product, material = "gold", quantity = 1) => {
    dispatch({ type: "ADD_ITEM", product, material, quantity });
  }, []);

  const removeItem = useCallback((id, material) => {
    dispatch({ type: "REMOVE_ITEM", id, material });
  }, []);

  const updateQuantity = useCallback((id, material, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", id, material, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
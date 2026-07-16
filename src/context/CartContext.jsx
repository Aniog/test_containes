import { createContext, useContext, useReducer, useCallback } from "react";

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.material === action.payload.material
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existing.id && item.material === existing.material
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
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.cartId !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_DRAWER":
      return { ...state, drawerOpen: !state.drawerOpen };
    case "CLOSE_DRAWER":
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    drawerOpen: false,
  });

  const addItem = useCallback((product, material = "gold") => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        cartId: `${product.id}-${material}-${Date.now()}`,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        material,
      },
    });
  }, []);

  const removeItem = useCallback((cartId) => {
    dispatch({ type: "REMOVE_ITEM", payload: cartId });
  }, []);

  const updateQuantity = useCallback((cartId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { cartId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const toggleDrawer = useCallback(() => {
    dispatch({ type: "TOGGLE_DRAWER" });
  }, []);

  const closeDrawer = useCallback(() => {
    dispatch({ type: "CLOSE_DRAWER" });
  }, []);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        drawerOpen: state.drawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleDrawer,
        closeDrawer,
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
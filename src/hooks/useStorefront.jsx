import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CART_STORAGE_KEY = "velmora-cart";
const StorefrontContext = createContext(null);

const getInitialCart = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedValue = window.localStorage.getItem(CART_STORAGE_KEY);
  return storedValue ? JSON.parse(storedValue) : [];
};

const initialState = {
  cart: [],
  isCartOpen: false,
  isSearchOpen: false,
  searchQuery: "",
};

const storefrontReducer = (state, action) => {
  switch (action.type) {
    case "HYDRATE_CART":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_TO_CART": {
      const { product, quantity, variant } = action.payload;
      const itemKey = `${product.slug}-${variant}`;
      const existingItem = state.cart.find((item) => item.itemKey === itemKey);

      if (existingItem) {
        return {
          ...state,
          isCartOpen: true,
          isSearchOpen: false,
          cart: state.cart.map((item) =>
            item.itemKey === itemKey
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }

      return {
        ...state,
        isCartOpen: true,
        isSearchOpen: false,
        cart: [
          {
            itemKey,
            slug: product.slug,
            name: product.name,
            price: product.price,
            variant,
            quantity,
            category: product.category,
          },
          ...state.cart,
        ],
      };
    }
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.itemKey === action.payload.itemKey
              ? { ...item, quantity: Math.max(1, action.payload.quantity) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.itemKey !== action.payload),
      };
    case "OPEN_CART":
      return { ...state, isCartOpen: true, isSearchOpen: false };
    case "CLOSE_CART":
      return { ...state, isCartOpen: false };
    case "OPEN_SEARCH":
      return { ...state, isSearchOpen: true, isCartOpen: false };
    case "CLOSE_SEARCH":
      return { ...state, isSearchOpen: false };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export const StorefrontProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storefrontReducer, initialState);

  useEffect(() => {
    dispatch({ type: "HYDRATE_CART", payload: getInitialCart() });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    document.body.style.overflow =
      state.isCartOpen || state.isSearchOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [state.isCartOpen, state.isSearchOpen]);

  const value = useMemo(() => {
    const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    return {
      ...state,
      cartCount,
      subtotal,
      addToCart: (product, variant = "Gold Tone", quantity = 1) =>
        dispatch({
          type: "ADD_TO_CART",
          payload: { product, variant, quantity },
        }),
      updateQuantity: (itemKey, quantity) =>
        dispatch({ type: "UPDATE_QUANTITY", payload: { itemKey, quantity } }),
      removeItem: (itemKey) => dispatch({ type: "REMOVE_ITEM", payload: itemKey }),
      openCart: () => dispatch({ type: "OPEN_CART" }),
      closeCart: () => dispatch({ type: "CLOSE_CART" }),
      openSearch: () => dispatch({ type: "OPEN_SEARCH" }),
      closeSearch: () => dispatch({ type: "CLOSE_SEARCH" }),
      setSearchQuery: (query) =>
        dispatch({ type: "SET_SEARCH_QUERY", payload: query }),
    };
  }, [state]);

  return (
    <StorefrontContext.Provider value={value}>
      {children}
    </StorefrontContext.Provider>
  );
};

export const useStorefront = () => {
  const context = useContext(StorefrontContext);

  if (!context) {
    throw new Error("useStorefront must be used within StorefrontProvider");
  }

  return context;
};

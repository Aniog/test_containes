import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addToCart = useCallback((product, variantId, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.variantId === variantId
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.variantId === variantId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, variantId, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, variantId) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.product.id === productId && i.variantId === variantId)
      )
    );
  }, []);

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.variantId === variantId
          ? { ...i, quantity }
          : i
      )
    );
  }, [removeFromCart]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice,
      }}
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

import { createContext, useContext, useMemo, useState } from "react";
import { products } from "@/data/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1, tone = "Gold") => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.productId === product.id && item.tone === tone,
      );

      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...current, { productId: product.id, quantity, tone }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, tone) => {
    setItems((current) =>
      current.filter((item) => item.productId !== productId || item.tone !== tone),
    );
  };

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, tone);
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.productId === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const enrichedItems = items
    .map((item) => ({
      ...item,
      product: products.find((product) => product.id === item.productId),
    }))
    .filter((item) => item.product);

  const subtotal = enrichedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const count = enrichedItems.reduce((sum, item) => sum + item.quantity, 0);

  const value = useMemo(
    () => ({
      items: enrichedItems,
      count,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [enrichedItems, count, subtotal, isCartOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}

import { createContext, useContext, useMemo, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, variant = "Gold", quantity = 1) => {
    setItems((prev) => {
      const key = `${product.id}__${variant}`;
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      const candidates = [
        `img[data-strk-img-id="card-${product.id}-a"]`,
        `img[data-strk-img-id="pdp-${product.id}-studio"]`,
      ];
      let imageSrc = null;
      for (const sel of candidates) {
        const el = document.querySelector(sel);
        if (el && el.src && !el.src.startsWith("data:")) {
          imageSrc = el.src;
          break;
        }
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          tagline: product.tagline,
          variant,
          quantity,
          imageSrc,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.key !== key)
        : prev.map((item) => (item.key === key ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => ({
        count: acc.count + item.quantity,
        subtotal: acc.subtotal + item.price * item.quantity,
      }),
      { count: 0, subtotal: 0 }
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, count, subtotal, isOpen, addItem, removeItem, updateQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

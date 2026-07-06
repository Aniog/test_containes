import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = window.localStorage.getItem("velmora-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem("velmora-cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (product, variant = "gold", quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.variant === variant
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageRatio: product.imageRatio,
          description: product.description,
          category: product.category,
        },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (productId, variant) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === productId && i.variant === variant))
    );
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === productId && i.variant === variant ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 6;
    return { subtotal, count, shipping, total: subtotal + shipping };
  }, [items]);

  const value = {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    ...totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

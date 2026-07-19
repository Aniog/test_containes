import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

const initialState = {
  items: [], // { id, name, price, quantity, tone, imgId, img2Id }
  isOpen: false,
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(initialState.items);
  const [isOpen, setIsOpen] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      // ignore
    }
  }, [items]);

  const addToCart = useCallback((productId, opts = {}) => {
    const product = getProductById(productId);
    if (!product) return;
    const tone = opts.tone || product.tone;
    const quantity = opts.quantity || 1;

    setItems((current) => {
      const existing = current.find(
        (i) => i.id === productId && i.tone === tone
      );
      if (existing) {
        return current.map((i) =>
          i.id === productId && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...current,
        {
          id: productId,
          name: product.name,
          price: product.price,
          quantity,
          tone,
          imgId: product.imgId,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((productId, tone) => {
    setItems((current) =>
      current.filter((i) => !(i.id === productId && i.tone === tone))
    );
  }, []);

  const updateQuantity = useCallback((productId, tone, quantity) => {
    if (quantity <= 0) {
      setItems((current) =>
        current.filter((i) => !(i.id === productId && i.tone === tone))
      );
      return;
    }
    setItems((current) =>
      current.map((i) =>
        i.id === productId && i.tone === tone ? { ...i, quantity } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const value = {
    items,
    itemCount,
    subtotal,
    isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

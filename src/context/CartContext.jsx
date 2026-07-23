import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getProduct } from '@/data/products';

const CartContext = createContext(null);

const STORAGE_KEY = 'velmora-cart-v1';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((i) => getProduct(i.productId)) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works in-memory
    }
  }, [items]);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const addItem = useCallback((productId, variant = 'Gold', quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId && i.variant === variant);
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: Math.min(i.quantity + quantity, 99) } : i,
        );
      }
      return [...prev, { productId, variant, quantity }];
    });
    const product = getProduct(productId);
    setToast(product ? `${product.name} added to your cart` : 'Added to your cart');
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.variant === variant)));
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((i) => !(i.productId === productId && i.variant === variant));
      }
      return prev.map((i) =>
        i.productId === productId && i.variant === variant
          ? { ...i, quantity: Math.min(quantity, 99) }
          : i,
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const product = getProduct(item.productId);
        if (!product) return acc;
        return {
          count: acc.count + item.quantity,
          subtotal: acc.subtotal + product.price * item.quantity,
        };
      },
      { count: 0, subtotal: 0 },
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toast,
    }),
    [items, count, subtotal, isCartOpen, addItem, removeItem, updateQuantity, clearCart, toast],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

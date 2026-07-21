import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { getProductById } from '@/data/products';

const CartContext = createContext(null);
const STORAGE_KEY = 'velmora-cart-v1';

const loadInitialCart = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item) => getProductById(item.productId)) : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works in memory
    }
  }, [items]);

  const showToast = useCallback((message) => {
    window.clearTimeout(toastTimer.current);
    setToast({ id: Date.now(), message });
    toastTimer.current = window.setTimeout(() => setToast(null), 2800);
  }, []);

  const addItem = useCallback(
    (productId, variant = 'gold', quantity = 1) => {
      const product = getProductById(productId);
      if (!product) return;
      setItems((current) => {
        const key = `${productId}__${variant}`;
        const existing = current.find((item) => item.key === key);
        if (existing) {
          return current.map((item) =>
            item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
          );
        }
        return [...current, { key, productId, variant, quantity }];
      });
      showToast(`${product.name} added to your cart`);
    },
    [showToast],
  );

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback(
    (key, quantity) => {
      if (quantity <= 0) {
        removeItem(key);
        return;
      }
      setItems((current) =>
        current.map((item) => (item.key === key ? { ...item, quantity } : item)),
      );
    },
    [removeItem],
  );

  const clearCart = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const product = getProductById(item.productId);
        if (!product) return acc;
        acc.count += item.quantity;
        acc.subtotal += product.price * item.quantity;
        return acc;
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
      toast,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      showToast,
    }),
    [items, count, subtotal, isCartOpen, toast, addItem, removeItem, updateQuantity, clearCart, showToast],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id && item.variant === product.variant);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.variant === product.variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.variant === variant ? { ...item, quantity } : item
      )
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    description: 'Minimalist gold ear cuff with a delicate crystal accent. Perfect for stacking or wearing alone for a subtle sparkle.',
    images: ['https://images.unsplash.com/photo-1635767798638-3e2827e84236?auto=format&fit=crop&q=80&w=800'],
    material: '18K Gold Plated',
    variant: 'Gold'
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    description: 'A vibrant floral-inspired necklace featuring multicolor crystals set in a warm gold-tone frame.',
    images: ['https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800'],
    material: '18K Gold Plated',
    variant: 'Gold'
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    description: 'Chunky dome-style huggie earrings that provide a bold yet classic gold statement.',
    images: ['https://images.unsplash.com/photo-1630019051933-e746f8cea2a1?auto=format&fit=crop&q=80&w=800'],
    material: '18K Gold Plated',
    variant: 'Gold'
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    description: 'Exquisitely textured gold filigree drop earrings, inspired by artisanal lace patterns.',
    images: ['https://images.unsplash.com/photo-1635767798638-3e2827e84236?auto=format&fit=crop&q=80&w=800'],
    material: '18K Gold Plated',
    variant: 'Gold'
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Holiday Sets',
    description: 'An elegant gift-boxed set featuring our signature necklace and matching earrings, perfect for special occasions.',
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800'],
    material: '18K Gold Plated',
    variant: 'Gold'
  }
];

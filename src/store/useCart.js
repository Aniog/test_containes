import { useState, useCallback, useEffect } from 'react';

// Very basic local state for the cart for demonstration purposes.
// In a real app, you'd use Zustand, Redux, or Context API.

// We export a singleton-ish listener pattern to share state across components without full Context boilerplate for this simple demo
const listeners = new Set();
let cart = [];

const notifyListeners = () => {
    listeners.forEach(listener => listener(cart));
};

export const addToCart = (product, quantity = 1, tone = 'gold') => {
    const existingIdx = cart.findIndex(item => item.id === product.id && item.tone === tone);
    if (existingIdx >= 0) {
        cart[existingIdx].quantity += quantity;
    } else {
        cart.push({ ...product, quantity, tone, cartItemId: Date.now().toString() });
    }
    notifyListeners();
};

export const removeFromCart = (cartItemId) => {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    notifyListeners();
};

export const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
        removeFromCart(cartItemId);
        return;
    }
    const item = cart.find(item => item.cartItemId === cartItemId);
    if (item) {
        item.quantity = newQuantity;
        notifyListeners();
    }
};

export const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
};

export const useCart = () => {
    const [cartItems, setCartItems] = useState(cart);

    useCallback(() => {
        const listener = (newCart) => setCartItems([...newCart]);
        listeners.add(listener);
        return () => listeners.delete(listener);
    }, []);

    // A slightly hacky way to force re-renders in standard components using this hook
    // Usually Context is better, but this works for a quick demo
    useEffect(() => {
        const listener = (newCart) => setCartItems([...newCart]);
        listeners.add(listener);
        return () => listeners.delete(listener);
    }, []);

    return {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount
    };
};
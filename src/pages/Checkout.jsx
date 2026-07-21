import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] pt-20 md:pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Your cart is empty</h2>
          <Link to="/shop" className="btn-primary inline-block mt-4">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-20 md:pt-24">
      <div className="container-luxury py-8 max-w-2xl">
        <h1
          className="text-3xl font-light mb-8 text-center"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Checkout
        </h1>
        <div className="bg-white p-8 border border-[#E8E2D9]">
          <p className="text-center text-[#8A8580] mb-6">
            This is a demo storefront. In production, this would connect to a real payment gateway.
          </p>
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex justify-between text-sm">
                <span>{item.name} × {item.quantity} ({item.variant})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-[#E8E2D9] pt-4 flex justify-between font-medium">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={() => clearCart?.()}
            className="w-full mt-8 bg-[#1A1A1A] text-white py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#C9A96E] transition-colors"
          >
            Place Order (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}

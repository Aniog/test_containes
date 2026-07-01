import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <main className="bg-velmora-cream min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <ShoppingBag size={64} className="text-velmora-stone-light mx-auto mb-6" />
          <h2 className="font-serif text-2xl sm:text-3xl text-velmora-base mb-3">Your Bag is Empty</h2>
          <p className="text-velmora-stone mb-8">Discover our collection of demi-fine jewelry</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-velmora-base text-white px-8 py-4 text-xs tracking-ultra-wide uppercase hover:bg-velmora-gold hover:text-velmora-base transition-all duration-300"
          >
            Shop Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-velmora-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <h1 className="font-serif text-3xl sm:text-4xl text-velmora-base font-light tracking-wide mb-8">
          Your Bag
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 sm:gap-6 bg-white p-4 sm:p-6">
                <Link to={`/product/${item.slug || ''}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-28 sm:w-32 sm:h-36 object-cover"
                  />
                </Link>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <Link to={`/product/${item.slug || ''}`} className="font-serif text-lg tracking-wide text-velmora-charcoal hover:text-velmora-gold transition-colors">
                        {item.name}
                      </Link>
                      <p className="text-velmora-stone text-sm mt-1">{item.variant}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-velmora-stone hover:text-velmora-base transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border border-velmora-stone-light hover:bg-velmora-warm transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border border-velmora-stone-light hover:bg-velmora-warm transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <p className="font-serif text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-velmora-stone hover:text-velmora-base text-sm underline transition-colors"
            >
              Clear Bag
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sticky top-24">
              <h2 className="font-serif text-xl tracking-wide mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-velmora-stone">Subtotal</span>
                  <span className="text-velmora-charcoal">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-velmora-stone">Shipping</span>
                  <span className="text-velmora-charcoal">Free</span>
                </div>
              </div>

              <div className="border-t border-velmora-warm pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-serif text-2xl">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-velmora-base text-white py-4 text-xs tracking-ultra-wide uppercase hover:bg-velmora-gold hover:text-velmora-base transition-all duration-300">
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="block text-center mt-4 text-velmora-stone hover:text-velmora-base text-sm underline transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

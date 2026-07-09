import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    // Placeholder for checkout - in real app would navigate to checkout
    alert('Thank you for shopping with Velmora. Checkout would be implemented here with a real payment provider.');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD6]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.1em] uppercase text-sm">Your Cart</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-[#6B635C] hover:text-[#1C1917]"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <ShoppingBag size={48} className="text-[#E5DFD6] mb-4" />
            <p className="text-[#6B635C] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="btn btn-gold-outline"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F8F5F1] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-xs tracking-[0.1em]">{item.name}</div>
                        <div className="text-xs text-[#6B635C] mt-0.5">{item.variant}</div>
                      </div>
                      <div className="text-sm font-medium">${item.price}</div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD6]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F8F5F1] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F8F5F1] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#6B635C] hover:text-[#B8976A] uppercase tracking-widest"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E5DFD6] space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B635C]">Subtotal</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <p className="text-xs text-[#9A9085]">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <button
                onClick={handleCheckout}
                className="btn btn-primary w-full"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline w-full"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
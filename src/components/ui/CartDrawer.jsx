import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import Button from './Button';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price) => `$${price}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#F8F5F0] z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5 text-[#C5A46E]" />
              <h2 className="font-serif text-2xl text-[#1A1A1A]">Your Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#E5E0D8] rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="h-5 w-5 text-[#4A4640]" />
            </button>
          </div>

          {/* Cart Content */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="h-16 w-16 text-[#C5A46E]/40 mb-4" />
              <p className="text-[#4A4640] text-lg mb-2">Your cart is empty</p>
              <p className="text-[#8B8178] text-sm">Discover our collection of fine jewelry</p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#E5E0D8] rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-serif text-sm uppercase tracking-[1.5px] text-[#1A1A1A] leading-tight">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#8B8178] mt-0.5">{item.variant}</p>
                        </div>
                        <p className="font-medium text-[#1A1A1A] whitespace-nowrap">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5E0D8] rounded">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#E5E0D8] transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#E5E0D8] transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-xs text-[#8B8178] hover:text-[#C5A46E] transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#E5E0D8] px-6 py-6 bg-white">
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-[#4A4640]">Total</span>
                  <span className="font-serif text-2xl text-[#1A1A1A]">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                <p className="text-xs text-[#8B8178] mb-4 text-center">
                  Shipping calculated at checkout
                </p>
                <Button
                  variant="solid"
                  size="lg"
                  className="w-full mb-3"
                  onClick={() => {
                    alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                    clearCart();
                    onClose();
                  }}
                >
                  Proceed to Checkout
                </Button>
                <button
                  onClick={onClose}
                  className="w-full text-sm text-[#8B8178] hover:text-[#1A1A1A] transition-colors py-2"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  const handleCheckout = () => {
    // Placeholder for checkout functionality
    alert('Checkout functionality will be connected to your payment provider.');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FAF7F2] z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#B8956C]/20">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={closeCart}
              className="text-[#1A1A1A] hover:text-[#C9A962] transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-[#B8956C] mb-4" />
                <p className="text-[#8B8178] mb-4">Your cart is empty</p>
                <Button variant="primary" size="sm" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-[#F5F0E8] rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-wide truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#8B8178] mt-1 capitalize">
                        {item.variant} tone
                      </p>
                      <p className="text-sm font-medium mt-1">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#B8956C]/30 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:text-[#C9A962] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:text-[#C9A962] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-[#8B8178] hover:text-red-500 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[#B8956C]/20 px-6 py-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#8B8178]">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <p className="text-xs text-[#8B8178] mb-4">
                Shipping and taxes calculated at checkout.
              </p>

              {/* Checkout Button */}
              <Button
                variant="primary"
                size="full"
                onClick={handleCheckout}
              >
                Checkout
              </Button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-[#8B8178] hover:text-[#C9A962] transition-colors underline"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#faf8f5] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e8e4df]">
          <h2 className="velmora-heading text-xl">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-[#c9a96e] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag size={48} className="text-[#e8e4df] mb-4" />
              <p className="velmora-heading text-lg text-[#6b6b6b] mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6b6b6b] mb-6">Discover our beautiful collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="velmora-btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#f5f0eb] flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-${item.id}`}
                      data-strk-img={`[cart-item-${item.productId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="velmora-product-name text-sm text-[#1a1a1a] truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6b6b6b] mt-1 capitalize">{item.variant} tone</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#e8e4df]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-[#c9a96e] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-[#c9a96e] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 self-start text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#e8e4df] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#6b6b6b]">Subtotal</span>
              <span className="velmora-heading text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#6b6b6b]">Shipping & taxes calculated at checkout</p>
            <button className="velmora-btn-gold w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="velmora-btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  const shipping = totalPrice >= 49 ? 0 : 9.99;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 bg-gray-950 border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-blue-400" />
            <h2 className="text-white font-bold text-lg">Your Cart</h2>
            {totalItems > 0 && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-gray-500 hover:text-red-400 text-xs transition-colors px-2 py-1"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Your cart is empty</h3>
                <p className="text-gray-500 text-sm">Add some products to get started</p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Continue Shopping
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.color}`}
                  className="flex gap-4 bg-gray-900 border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-colors"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-800 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-blue-400 font-medium mb-0.5">{item.brand}</div>
                    <h4 className="text-white font-semibold text-sm leading-tight mb-1 truncate">{item.name}</h4>
                    <div className="text-gray-500 text-xs mb-3">{item.color}</div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-1 bg-gray-800 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-white text-sm font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="p-1.5 text-gray-600 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo code */}
              <div className="bg-gray-900 border border-white/5 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm font-medium">Promo Code</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code..."
                    className="flex-1 bg-gray-800 border border-white/10 text-white placeholder-gray-500 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <button className="bg-blue-500/20 hover:bg-blue-500 border border-blue-500/30 text-blue-300 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer — Summary */}
        {items.length > 0 && (
          <div className="border-t border-white/10 p-6 space-y-4">
            {/* Shipping notice */}
            {shipping === 0 ? (
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-2.5">
                <Truck className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">You qualify for FREE shipping!</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-2.5">
                <Truck className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm">
                  Add ${(49 - totalPrice).toFixed(2)} more for free shipping
                </span>
              </div>
            )}

            {/* Price breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal ({totalItems} items)</span>
                <span className="text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Shipping</span>
                <span className={shipping === 0 ? 'text-green-400 font-medium' : 'text-white'}>
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Tax (8%)</span>
                <span className="text-white">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/10">
                <span className="text-white font-bold text-lg">Total</span>
                <span className="text-white font-black text-xl">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 rounded-2xl transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] flex items-center justify-center gap-2">
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium py-3 rounded-2xl transition-all text-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;

import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, cartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-soft-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gold-100">
          <h2 className="font-serif text-2xl">Shopping Bag ({items.length})</h2>
          <button
            onClick={onClose}
            className="p-2 text-charcoal-600 hover:text-charcoal-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-charcoal-600 mb-6">Your bag is empty</p>
              <Button variant="outline" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-serif font-medium text-sm uppercase tracking-wide">
                          {item.name}
                        </h4>
                        <p className="text-xs text-charcoal-600 mt-1">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gold-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="font-semibold text-gold-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold-100 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-charcoal-600">Subtotal</span>
              <span className="text-xl font-serif font-semibold">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-charcoal-500">
              Shipping and taxes calculated at checkout
            </p>
            <div className="space-y-2">
              <Link to="/checkout" onClick={onClose}>
                <Button variant="gold" className="w-full" size="lg">
                  Checkout
                </Button>
              </Link>
              <Link to="/cart" onClick={onClose}>
                <Button variant="outline" className="w-full" size="lg">
                  View Cart
                </Button>
              </Link>
            </div>
            <button
              onClick={clearCart}
              className="w-full text-center text-sm text-charcoal-500 hover:text-red-500 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
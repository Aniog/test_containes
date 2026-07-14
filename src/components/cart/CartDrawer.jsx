import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, total, updateQuantity, removeItem } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button onClick={onClose} className="hover:text-velmora-gold transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-velmora-charcoal-light">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="inline-block mt-4 text-velmora-gold hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-velmora-cream"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider uppercase mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-charcoal-light mb-2">
                        {item.variant}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-gold">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-velmora-gold hover:text-white transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 py-1 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-velmora-gold hover:text-white transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-sm text-velmora-charcoal-light hover:text-red-500 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-velmora-gold font-medium mt-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between font-serif text-lg">
                <span>Total</span>
                <span className="text-velmora-gold">${total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={onClose}
                className="block w-full bg-velmora-gold hover:bg-velmora-gold-dark text-white text-center py-3 text-sm tracking-widest uppercase transition-colors"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={onClose}
                className="block w-full text-center text-sm text-velmora-charcoal-light hover:text-velmora-gold transition-colors"
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

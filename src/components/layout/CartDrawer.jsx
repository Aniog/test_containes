import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    cartTotal,
    cartCount,
    removeFromCart,
    updateQuantity,
    closeCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[rgb(var(--color-border))]">
            <h2 className="font-serif text-xl">
              Your Cart ({cartCount})
            </h2>
            <button
              onClick={closeCart}
              className="hover:text-[rgb(var(--color-accent))] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={48} className="mx-auto text-[rgb(var(--color-muted))] mb-4" />
                <p className="font-sans text-[rgb(var(--color-muted))]">
                  Your cart is empty
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="font-sans text-sm text-[rgb(var(--color-muted))] mb-2">
                        ${item.price}
                      </p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-[rgb(var(--color-accent))] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-sans text-sm w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-[rgb(var(--color-accent))] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[rgb(var(--color-muted))] hover:text-red-500 transition-colors"
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
            <div className="p-6 border-t border-[rgb(var(--color-border))]">
              <div className="flex justify-between items-center mb-4">
                <span className="font-sans text-sm uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-serif text-xl">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="font-sans text-xs text-[rgb(var(--color-muted))] mb-4">
                Shipping calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-velmora w-full text-center block"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

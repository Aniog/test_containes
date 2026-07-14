import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[70] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={cn(
        'fixed top-0 right-0 h-full w-full sm:w-96 bg-velmora-ivory z-[80] shadow-2xl',
        'flex flex-col animate-slide-in-right'
      )}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <h2 className="font-serif text-xl text-velmora-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-velmora-taupe hover:text-velmora-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag size={48} className="text-velmora-sand mb-4" />
              <p className="text-velmora-taupe mb-6">Your cart is empty</p>
              <Button onClick={() => setIsOpen(false)} variant="secondary" size="sm">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-velmora-sand">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.variant}`} className="px-6 py-5">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-24 bg-velmora-cream rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm text-velmora-charcoal uppercase tracking-wide">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-velmora-taupe mt-1 capitalize">
                        {item.variant} · 18K Gold Plated
                      </p>
                      <p className="font-medium text-velmora-espresso mt-2">
                        ${item.product.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-sand rounded">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-velmora-taupe hover:text-velmora-espresso transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-velmora-taupe hover:text-velmora-espresso transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="text-xs text-velmora-taupe hover:text-red-500 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-sand px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-velmora-taupe">Subtotal</span>
              <span className="font-medium text-velmora-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-taupe">
              Shipping and taxes calculated at checkout
            </p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-sm text-velmora-taupe hover:text-velmora-gold transition-colors underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

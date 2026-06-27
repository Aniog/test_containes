import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[70] bg-velmora-warm-cream shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
            <h2 className="font-serif text-lg tracking-[0.1em] uppercase">
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeCart} className="p-1 hover:opacity-60 transition-velmora">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velmora-stone">
                <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
                <p className="text-sm tracking-wide">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-4 text-xs tracking-[0.12em] uppercase text-velmora-gold hover:text-velmora-gold-dark transition-velmora underline underline-offset-4"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-1">
                    {/* Image */}
                    <div className="w-20 h-24 bg-velmora-sand/20 flex-shrink-0 flex items-center justify-center">
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.id}`}
                        data-strk-img={`[cart-name-${item.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <span id={`cart-name-${item.id}`} className="hidden">{item.name}</span>
                      <h3 className="product-name text-xs mb-1">{item.name}</h3>
                      <p className="text-sm text-velmora-stone mb-2">${item.price}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-velmora-sand/50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-velmora-sand/20 transition-velmora"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-velmora-sand/20 transition-velmora"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-velmora-stone hover:text-velmora-rose transition-velmora"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
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
            <div className="border-t border-velmora-sand/30 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-stone">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-velmora-stone">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-velmora-gold text-white py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-gold-dark transition-velmora">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs tracking-[0.12em] uppercase text-velmora-stone hover:text-velmora-charcoal transition-velmora underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-velmora-obsidian/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-drawer flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <span className="font-inter text-xs uppercase tracking-widest text-velmora-text-dark font-medium">
              Your Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand" />
              <p className="font-cormorant text-xl text-velmora-text-muted italic">Your cart is empty</p>
              <p className="font-inter text-xs text-velmora-text-muted">Discover our collection below</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand/20">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-cormorant text-2xl text-velmora-gold">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-wider text-velmora-text-dark font-medium leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-inter text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-velmora-sand hover:text-velmora-text-muted transition-colors flex-shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-sand/40">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-inter text-xs text-velmora-text-dark">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text-dark transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-inter text-sm font-medium text-velmora-text-dark">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-sand/30 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-widest text-velmora-text-muted">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-text-dark">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-velmora-text-muted text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-obsidian text-velmora-cream font-inter text-xs uppercase tracking-widest py-4 hover:bg-velmora-charcoal transition-colors duration-200">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-sand/50 text-velmora-text-muted font-inter text-xs uppercase tracking-widest py-3 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

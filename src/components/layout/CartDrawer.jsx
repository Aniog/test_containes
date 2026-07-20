import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slideInRight shadow-2xl shadow-charcoal/20">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-charcoal" />
            <span className="font-inter text-xs font-medium tracking-widest uppercase text-charcoal">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-taupe hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-border" />
              <p className="font-cormorant text-xl text-charcoal-mid">Your cart is empty</p>
              <p className="font-inter text-sm text-taupe">Discover our collection and find something you love.</p>
              <Button variant="outline" onClick={() => setIsOpen(false)} className="mt-2">
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-border last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gold-pale to-ivory-dark flex items-center justify-center">
                      <span className="font-cormorant text-gold text-xs">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant font-medium text-sm uppercase tracking-widest text-charcoal leading-tight mb-1">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-taupe capitalize mb-3">
                      {item.variant} tone
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-border">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-taupe hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-inter text-xs text-charcoal w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-taupe hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-inter text-sm font-medium text-charcoal">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-taupe-light hover:text-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border bg-ivory">
            <div className="flex items-center justify-between mb-1">
              <span className="font-inter text-xs tracking-widest uppercase text-taupe">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-taupe-light mb-5">Shipping & taxes calculated at checkout</p>
            <Button variant="primary" size="lg" className="w-full mb-3">
              Checkout
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-inter text-xs tracking-widest uppercase text-taupe hover:text-charcoal transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

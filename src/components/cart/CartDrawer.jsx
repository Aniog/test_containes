import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-divider">
          <h2 className="font-serif text-xl text-brand-dark">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart">
            <X className="w-5 h-5 text-brand-dark" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-muted mb-4" />
              <p className="font-serif text-lg text-brand-dark mb-2">Your cart is empty</p>
              <p className="text-sm text-brand-muted">Discover our collection and find something you love.</p>
              <Link
                to="/collection"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-block bg-brand-gold text-white font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-brand-gold-hover transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-brand-divider">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-brand-divider flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-brand-muted font-sans uppercase tracking-wider">
                      {item.product.category}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs tracking-widest uppercase text-brand-dark truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm text-brand-dark font-medium mt-1">${item.product.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-brand-divider flex items-center justify-center hover:border-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 text-brand-dark" />
                      </button>
                      <span className="text-sm text-brand-dark font-sans">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-brand-divider flex items-center justify-center hover:border-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 text-brand-dark" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-brand-muted hover:text-brand-dark transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
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
          <div className="px-6 py-5 border-t border-brand-divider">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-brand-muted">Subtotal</span>
              <span className="font-serif text-xl text-brand-dark">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-muted mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-gold text-white font-sans text-xs tracking-widest uppercase py-4 hover:bg-brand-gold-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

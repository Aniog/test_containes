import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-ivory z-50 shadow-drawer flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <span className="font-cormorant text-xl text-velmora-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-velmora-subtle ml-1">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-muted hover:text-velmora-obsidian transition-colors duration-200"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-linen" />
              <p className="font-cormorant text-2xl text-velmora-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-subtle">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-velmora-gold-light transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-velmora-linen last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-linen flex items-center justify-center">
                      <span className="font-cormorant text-velmora-gold text-2xl">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-manrope text-xs text-velmora-subtle mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-velmora-subtle hover:text-velmora-obsidian transition-colors duration-200 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian hover:bg-velmora-cream transition-colors duration-200"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-velmora-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian hover:bg-velmora-cream transition-colors duration-200"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-cormorant text-lg text-velmora-obsidian">
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
          <div className="px-6 py-5 border-t border-velmora-linen bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-muted">Subtotal</span>
              <span className="font-cormorant text-2xl text-velmora-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-velmora-subtle mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-obsidian text-velmora-ivory font-manrope text-xs uppercase tracking-widest py-4 hover:bg-velmora-charcoal transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-velmora-linen text-velmora-muted font-manrope text-xs uppercase tracking-widest py-3 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

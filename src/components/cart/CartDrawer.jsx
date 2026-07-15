import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-charcoal hover:text-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
              <p className="text-sm text-muted mt-2">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors inline-block"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-border last:border-0">
                  <div className="w-20 h-20 bg-surface flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium text-charcoal tracking-product uppercase truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-border flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-muted hover:text-charcoal transition-colors self-start"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted font-sans">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gold text-cream py-3.5 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors">
              Checkout
            </button>
            <p className="text-xs text-muted text-center mt-3">Free shipping on all orders</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
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
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal hover:opacity-70 transition-opacity bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-taupe mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-warm-gray font-sans">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-6 px-6 py-3 bg-gold text-white text-sm font-sans font-medium tracking-wide-sm uppercase no-underline hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-taupe last:border-b-0">
                  <div className="w-20 h-20 bg-taupe/50 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm font-medium text-charcoal uppercase tracking-product truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-warm-gray font-sans mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-sans font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-taupe bg-transparent text-charcoal hover:border-gold transition-colors rounded-none"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans font-medium text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-taupe bg-transparent text-charcoal hover:border-gold transition-colors rounded-none"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-warm-gray hover:text-charcoal transition-colors font-sans bg-transparent border-none underline"
                      >
                        Remove
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
          <div className="px-6 py-5 border-t border-taupe">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-warm-gray">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 bg-gold text-white text-sm font-sans font-medium tracking-product uppercase hover:bg-gold-dark transition-colors border-none">
              Checkout
            </button>
            <p className="text-xs text-warm-gray text-center mt-3 font-sans">Free shipping on all orders</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CartDrawer;

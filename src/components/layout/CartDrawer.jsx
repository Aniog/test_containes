import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.08]">
          <h2 className="font-serif text-xl font-light">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="text-brand-charcoal hover:opacity-70 transition-opacity">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-muted-light mb-4" />
              <p className="font-serif text-lg text-brand-muted">Your cart is empty</p>
              <p className="text-sm text-brand-muted-light mt-2">Discover our collection</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-brand-ivory rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs tracking-product uppercase font-serif text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted-light mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-black/10 flex items-center justify-center rounded-sm hover:bg-brand-warm transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-black/10 flex items-center justify-center rounded-sm hover:bg-brand-warm transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-brand-muted-light hover:text-brand-charcoal transition-colors self-start"
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
          <div className="px-6 py-5 border-t border-black/[0.08]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="text-lg font-serif font-medium text-brand-charcoal">${subtotal}</span>
            </div>
            <p className="text-xs text-brand-muted-light mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-charcoal text-white py-3.5 text-xs tracking-widest uppercase font-sans hover:bg-brand-graphite transition-colors text-center">
              Checkout
            </button>
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
}

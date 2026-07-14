import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
          <h2 className="font-serif text-xl font-light">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone/40 mb-4" />
              <p className="font-serif text-lg text-stone">Your cart is empty</p>
              <p className="text-sm text-stone/70 mt-2">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-taupe rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-stone mt-1 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-taupe bg-transparent rounded-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-taupe bg-transparent rounded-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="p-1 bg-transparent border-none self-start"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4 text-stone" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-taupe">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-stone">Subtotal</span>
              <span className="text-lg font-serif">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gold text-cream py-3.5 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors border-none rounded-sm">
              Checkout
            </button>
            <p className="text-xs text-stone text-center mt-3">Free shipping on orders over $75</p>
          </div>
        )}
      </div>
    </>
  );
}

import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/50 transition-opacity duration-400 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-warm-white shadow-large transition-transform duration-500 ease-luxury ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-heading-sm text-charcoal">Your Bag</h2>
          <button onClick={closeDrawer} className="p-1 text-charcoal hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-light-gray mb-4" strokeWidth={1} />
              <p className="font-serif text-heading-sm text-charcoal mb-2">Your bag is empty</p>
              <p className="font-sans text-body text-warm-gray mb-6">Discover pieces crafted to be treasured.</p>
              <button onClick={closeDrawer} className="btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-border last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-light-gray/30 rounded-md flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={`velmora ${item.name} gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="product-name text-[13px] truncate">{item.name}</p>
                    <p className="font-sans text-caption text-warm-gray mt-0.5">{item.variant}</p>
                    <p className="font-sans text-body font-medium text-charcoal mt-2">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-border rounded flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-caption w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-border rounded flex items-center justify-center text-charcoal hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto font-sans text-[11px] uppercase tracking-wider text-warm-gray hover:text-charcoal transition-colors"
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
          <div className="absolute bottom-0 left-0 right-0 bg-warm-white border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-body text-warm-gray">Subtotal</span>
              <span className="font-serif text-heading-sm text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-caption text-warm-gray">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}

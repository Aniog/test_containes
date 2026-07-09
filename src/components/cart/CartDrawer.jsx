import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-gold-muted/20">
          <h2 className="font-serif text-xl text-brand-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 bg-transparent border-none hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-brand-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-taupe/40 mb-4" />
              <p className="font-serif text-lg text-brand-charcoal">Your cart is empty</p>
              <p className="text-sm text-brand-taupe mt-2 font-sans">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-brand-ivory rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs tracking-widest-plus uppercase font-sans font-medium text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-taupe mt-1 font-sans capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-1 font-sans">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-charcoal/20 bg-transparent rounded-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans font-medium text-brand-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-charcoal/20 bg-transparent rounded-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-taupe hover:text-brand-charcoal transition-colors bg-transparent border-none font-sans underline"
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
          <div className="px-6 py-5 border-t border-brand-gold-muted/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-brand-charcoal">Subtotal</span>
              <span className="text-lg font-serif text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-brand-taupe mb-4 font-sans">Shipping calculated at checkout</p>
            <button className="w-full bg-brand-charcoal text-brand-cream py-3.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-warm transition-colors duration-300 border-none rounded-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

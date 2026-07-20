import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
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
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal bg-transparent border-none hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone/40 mb-4" />
              <p className="font-sans text-stone text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-sans text-xs uppercase tracking-wider text-gold border-b border-gold bg-transparent pb-0.5 hover:opacity-70 transition-opacity"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-taupe">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs uppercase tracking-product text-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="font-sans text-xs text-stone mt-1 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="font-sans text-sm text-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-taupe text-charcoal bg-transparent hover:bg-taupe transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-xs w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-taupe text-charcoal bg-transparent hover:bg-taupe transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="p-1 text-stone bg-transparent border-none hover:text-charcoal transition-colors self-start"
                    aria-label="Remove item"
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
          <div className="px-6 py-5 border-t border-taupe">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-stone">Subtotal</span>
              <span className="font-sans text-base font-medium text-charcoal">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-stone mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-gold text-cream font-sans text-xs uppercase tracking-wider font-medium hover:bg-gold-dark transition-colors border-none cursor-pointer">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

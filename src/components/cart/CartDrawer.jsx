import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-[420px] bg-cream z-50 shadow-2xl transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-warm">
          <h2 className="font-serif text-xl tracking-wider uppercase">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-charcoal hover:text-warm-gray transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-stone mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
              <p className="font-sans text-sm text-warm-gray">
                Discover our collection and find something you love.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-6"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(({ product, variant, quantity }) => (
                <div
                  key={`${product.id}-${variant.id}`}
                  className="flex gap-4 pb-6 border-b border-border-warm last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-pearl flex-shrink-0 overflow-hidden">
                    <div
                      className="w-full h-full flex items-center justify-center text-stone text-xs"
                    >
                      <ShoppingBag size={24} strokeWidth={1} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm truncate">{product.name}</h3>
                    <p className="font-sans text-xs text-warm-gray mt-0.5 capitalize">
                      {variant.label}
                    </p>
                    <p className="font-sans font-medium text-sm text-charcoal mt-1">
                      ${product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(product.id, variant.id, quantity - 1)
                        }
                        className="w-7 h-7 border border-border-warm flex items-center justify-center text-warm-gray hover:border-charcoal hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm w-6 text-center">{quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(product.id, variant.id, quantity + 1)
                        }
                        className="w-7 h-7 border border-border-warm flex items-center justify-center text-warm-gray hover:border-charcoal hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(product.id, variant.id)}
                        className="ml-auto font-sans text-xs text-warm-gray underline hover:text-charcoal transition-colors"
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
          <div className="border-t border-border-warm px-6 py-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-sm text-warm-gray">Subtotal</span>
              <span className="font-sans font-medium text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full text-center">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-sans text-xs uppercase tracking-button text-warm-gray mt-3 hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

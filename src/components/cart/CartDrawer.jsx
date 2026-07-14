import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 w-full max-w-md h-full bg-velmora-ivory z-[70] transition-transform duration-400 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-mist/40">
          <h2 className="font-serif text-xl tracking-[0.1em] text-velmora-black">Your Cart</h2>
          <button onClick={closeCart} className="p-1 hover:opacity-60 transition-opacity" aria-label="Close cart">
            <X className="w-5 h-5 text-velmora-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-mist mb-4" />
              <p className="font-serif text-lg text-velmora-charcoal mb-1">Your cart is empty</p>
              <p className="text-sm text-velmora-stone mb-6">Discover pieces crafted to be treasured.</p>
              <button onClick={closeCart} className="btn-outline">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-cream rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-velmora-black truncate">{item.name}</p>
                    <p className="text-xs text-velmora-stone capitalize mt-0.5">{item.variant} tone</p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-mist rounded hover:border-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-mist rounded hover:border-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-stone hover:text-velmora-gold transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-mist/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-xl text-velmora-black">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-velmora-stone">Shipping calculated at checkout.</p>
            <button className="btn-gold w-full text-center">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-xs text-velmora-stone hover:text-velmora-gold transition-colors underline tracking-wide"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}

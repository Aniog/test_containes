import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';
import products from '@/data/products';

const findProduct = (id) => products.find((p) => p.id === id);

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-surface)] z-50 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
            <h2 className="font-[var(--font-serif)] text-xl tracking-wide flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" /> Your Bag ({itemCount})
            </h2>
            <button onClick={closeCart} className="p-1 hover:text-[var(--color-accent)]" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-[var(--color-text-muted)] px-6">
              <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
              <p className="font-[var(--font-serif)] text-xl">Your bag is empty</p>
              <p className="text-sm mt-1">Discover pieces you'll treasure.</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => {
                const product = findProduct(item.productId);
                if (!product) return null;
                return (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4 py-3 border-b border-[var(--color-border-light)]">
                    <div className="w-20 h-20 bg-[var(--color-surface-alt)] rounded-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        data-strk-img-id={`cart-${product.id}`}
                        data-strk-img={`[cart-name-${product.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <span id={`cart-name-${product.id}`} className="sr-only">{product.name}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-[var(--font-serif)] text-sm font-semibold tracking-wider uppercase">{product.name}</h4>
                      <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[var(--color-border)] rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-[var(--color-accent)]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-[var(--color-accent)]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</span>
                          <button
                            onClick={() => removeItem(item.productId, item.variant)}
                            className="text-[var(--color-text-muted)] hover:text-red-500 text-xs"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-[var(--color-border)] px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[var(--color-text-secondary)]">Subtotal</span>
                <span className="font-medium tabular-nums">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)]">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-[var(--color-surface-dark)] text-white font-medium text-sm tracking-wide hover:bg-[var(--color-velmora-800)] transition-colors">
                Checkout
              </button>
              <button onClick={closeCart} className="w-full text-center text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

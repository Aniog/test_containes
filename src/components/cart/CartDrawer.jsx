import { X, Minus, Plus, ShoppingBag, Gem } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';
import { useEffect } from 'react';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, itemCount } = useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const cartItems = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    const variant = product?.variants?.find((v) => v.id === item.variantId);
    return { ...item, product, variant };
  });

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item.product?.price || 0) * item.quantity;
  }, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velvet-card z-50 flex flex-col transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-border">
          <h2 className="font-serif text-lg tracking-wider">
            SHOPPING BAG ({itemCount})
          </h2>
          <button onClick={onClose} className="text-velvet-base hover:text-velvet-accent transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velvet-muted gap-3">
              <ShoppingBag className="w-12 h-12 stroke-1" />
              <p className="text-sm">Your bag is empty.</p>
              <button onClick={onClose} className="btn-outline mt-2 text-xs px-6 py-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-velvet-surface flex items-center justify-center">
                    <Gem className="w-6 h-6 text-velvet-accent/40" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-serif text-xs uppercase tracking-widest text-velvet-base truncate">
                          {item.product?.name}
                        </p>
                        <p className="text-xs text-velvet-muted mt-0.5">{item.variant?.label}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variantId)}
                        className="text-velvet-muted hover:text-velvet-base transition-colors"
                        aria-label="Remove"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velvet-border">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                          className="p-1.5 hover:text-velvet-accent transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                          className="p-1.5 hover:text-velvet-accent transition-colors"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium tabular-nums">
                        ${(item.product?.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-velvet-border px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-velvet-muted">Subtotal</span>
              <span className="font-medium tabular-nums">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velvet-muted">Shipping & taxes calculated at checkout.</p>
            <button className="btn-primary w-full text-center justify-center flex">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

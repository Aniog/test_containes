import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProduct } from '@/data/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-velmora-cream transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-tight">Your Bag ({items.reduce((s, i) => s + i.quantity, 0)})</h2>
            <button onClick={closeCart} className="p-1 text-velmora-charcoal hover:text-velmora-stone transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-velmora-stone px-6">
              <ShoppingBag className="w-12 h-12 text-velmora-mist" />
              <p className="text-sm">Your bag is empty.</p>
              <button onClick={closeCart} className="btn-outline mt-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => {
                  const product = getProduct(item.productId);
                  if (!product) return null;

                  return (
                    <div key={`${item.productId}-${item.variant}`} className="flex gap-4 py-3 border-b border-velmora-border/60">
                      {/* Image placeholder */}
                      <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand">
                        <div className="w-full h-full bg-velmora-gold/15" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-sm tracking-wider uppercase leading-tight">{product.name}</h3>
                        <p className="text-[11px] text-velmora-stone mt-0.5 tracking-wider uppercase">
                          {item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                        </p>
                        <p className="text-sm font-medium mt-1">${item.price}</p>

                        {/* Quantity */}
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.productId, item.variant)}
                            className="ml-auto text-[11px] text-velmora-stone hover:text-red-500 tracking-wider uppercase transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-border px-6 py-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-velmora-stone">Subtotal</span>
                  <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-[11px] text-velmora-stone tracking-wide">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="btn-primary w-full">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="block w-full text-center text-xs text-velmora-stone tracking-wider uppercase hover:text-velmora-charcoal transition-colors py-2"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

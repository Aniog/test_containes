import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { products } from '@/data/products';

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, totalPrice, totalItems, removeItem, updateQuantity, clearCart } = useCart();

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  const getProductImage = (productId) => {
    const product = products.find(p => p.id === productId);
    return product?.images[0];
  };

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-ink/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream z-50 shadow-xl transition-transform duration-300 ease-out ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
            <div>
              <h3 className="font-serif text-xl text-ink">Your Cart</h3>
              <p className="text-[11px] text-taupe uppercase tracking-wider mt-0.5">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="p-2 text-taupe hover:text-ink transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-taupe font-serif text-lg mb-4">Your cart is empty</p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="text-[11px] uppercase tracking-[0.15em] text-gold hover:text-gold-hover transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => {
                  const img = getProductImage(item.productId);
                  return (
                    <div key={`${item.productId}-${item.material}`} className="flex gap-4 pb-5 border-b border-warm-border last:border-0">
                      {/* Image placeholder */}
                      <div className="w-20 h-20 bg-warm-light flex-shrink-0 flex items-center justify-center">
                        <span className="text-[9px] text-taupe uppercase tracking-wider text-center leading-tight px-1">
                          {item.name}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-product-name text-ink mb-0.5">{item.name}</h4>
                        <p className="text-[11px] text-taupe capitalize">{item.material} tone</p>
                        <p className="font-serif italic text-sm text-ink mt-1">{formatPrice(item.price)}</p>

                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-warm-border">
                            <button
                              onClick={() => updateQuantity(item.productId, item.material, item.quantity - 1)}
                              className="p-1 text-taupe hover:text-ink transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-xs text-ink">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.material, item.quantity + 1)}
                              className="p-1 text-taupe hover:text-ink transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.productId, item.material)}
                            className="p-1 text-taupe hover:text-error-red transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-warm-border px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif text-lg text-ink">Total</span>
                <span className="font-serif text-lg text-ink">{formatPrice(totalPrice)}</span>
              </div>
              <button className="w-full bg-gold hover:bg-gold-hover text-white text-[11px] uppercase tracking-[0.2em] py-4 transition-colors">
                Checkout &mdash; {formatPrice(totalPrice)}
              </button>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full text-[10px] uppercase tracking-[0.15em] text-taupe hover:text-ink transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
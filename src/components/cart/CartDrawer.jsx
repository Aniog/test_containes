import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart';
import { products } from '@/data/products';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const getProduct = (id) => products.find((p) => p.id === id);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-400 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-border-light">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-charcoal" />
              <h2 className="text-lg font-serif font-semibold text-charcoal">Your Cart</h2>
              <span className="text-sm text-warm-gray-500 font-sans">({cart.length})</span>
            </div>
            <button
              onClick={onClose}
              className="text-warm-gray-500 hover:text-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-warm-gray-300 mb-4" />
                <p className="text-warm-gray-500 font-sans">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 text-sm text-gold hover:text-gold-dark font-sans tracking-wider uppercase transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => {
                  const product = getProduct(item.id);
                  if (!product) return null;
                  return (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-border-light">
                      {/* Product image placeholder */}
                      <div className="w-20 h-20 flex-shrink-0 bg-charcoal/5 rounded-sm overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gold-light/30 to-gold/20" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-serif font-semibold tracking-wider text-charcoal uppercase">
                          {product.name}
                        </h4>
                        {item.variant && (
                          <p className="text-xs text-warm-gray-500 font-sans mt-0.5">{item.variant}</p>
                        )}
                        <p className="text-sm font-sans font-medium text-charcoal mt-1">
                          ${item.price}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-border-medium rounded-sm hover:bg-charcoal/5 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-sans font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-border-medium rounded-sm hover:bg-charcoal/5 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="ml-auto text-xs text-warm-gray-400 hover:text-charcoal font-sans tracking-wider uppercase transition-colors"
                          >
                            Remove
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
          {cart.length > 0 && (
            <div className="border-t border-border-light px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-sans text-warm-gray-500">Subtotal</span>
                <span className="text-lg font-serif font-semibold text-charcoal">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-warm-gray-400 font-sans">
                Free shipping on orders over $75
              </p>
              <button className="w-full bg-gold text-white py-3.5 font-sans text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 rounded-none">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-xs text-warm-gray-400 hover:text-charcoal font-sans tracking-wider uppercase transition-colors"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
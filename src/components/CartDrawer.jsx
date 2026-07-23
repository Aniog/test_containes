import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velvet/40 z-[60] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] transform transition-transform duration-500 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
            <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
            <button onClick={closeCart} aria-label="Close cart" className="p-1 hover:opacity-60">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-taupe gap-4">
                <ShoppingBag className="w-10 h-10" strokeWidth={1} />
                <p className="text-sm tracking-wide">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-2 px-6 py-3 bg-gold text-velvet text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-hover transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={item.key} className="flex gap-4">
                    {/* Thumbnail placeholder */}
                    <div className="w-20 h-20 bg-linen flex-shrink-0 flex items-center justify-center">
                      <span className="text-[10px] uppercase tracking-widest text-taupe">IMG</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-serif text-sm tracking-wide uppercase">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-taupe mt-0.5 capitalize">
                            {item.variant} Tone
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-taupe hover:text-velvet transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-linen">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="p-1.5 hover:bg-linen transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="p-1.5 hover:bg-linen transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">
                          ${item.product.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-linen px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}</span>
              </div>
              <p className="text-xs text-taupe mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full py-3.5 bg-gold text-velvet text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 py-3 border border-linen text-velvet text-xs uppercase tracking-[0.15em] font-medium hover:bg-linen transition-colors"
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

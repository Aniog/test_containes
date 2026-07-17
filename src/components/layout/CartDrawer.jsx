import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deepbrown/40" onClick={closeCart} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-md bg-warmwhite shadow-2xl transition-transform duration-400 flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand/40">
            <h2 className="font-serif text-xl tracking-wide text-deepbrown flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold" />
              Your Bag ({totalItems})
            </h2>
            <button onClick={closeCart} className="p-2 text-mocha hover:text-deepbrown transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
              <ShoppingBag className="w-12 h-12 text-sand mb-4" />
              <p className="font-sans text-mocha text-sm mb-6">Your bag is empty.</p>
              <Link to="/shop" onClick={closeCart} className="btn-outline text-xs">
                Browse Jewelry
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-sand/20">
                    <div className="w-20 h-20 flex-shrink-0 bg-sand/20 rounded-sm overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=200&h=200&fit=crop)`,
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm tracking-wide text-deepbrown uppercase truncate">{item.name}</p>
                      <p className="font-sans text-xs text-mocha mt-0.5">{item.variant}</p>
                      <p className="font-sans text-sm font-medium text-deepbrown mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-sand/60 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-mocha hover:text-deepbrown transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-sans text-xs text-deepbrown">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-mocha hover:text-deepbrown transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1.5 text-mocha hover:text-rose transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-sand/40 px-6 py-5 space-y-4">
                <div className="flex items-center justify-between font-sans">
                  <span className="text-sm text-mocha">Subtotal</span>
                  <span className="text-sm font-semibold text-deepbrown">${subtotal.toFixed(2)}</span>
                </div>
                <p className="font-sans text-xs text-mocha/70">Shipping & taxes calculated at checkout</p>
                <button className="btn-primary w-full text-xs">Checkout</button>
                <button onClick={closeCart} className="btn-ghost w-full text-xs">
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

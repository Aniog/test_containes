import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, subtotal, drawerOpen, closeDrawer, updateQuantity, removeItem } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-warmwhite z-[110] shadow-2xl transform transition-transform duration-350 ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warmgray/20">
            <h3 className="font-serif text-lg tracking-wider">YOUR BAG ({items.reduce((s, i) => s + i.quantity, 0)})</h3>
            <button onClick={closeDrawer} className="text-espresso/60 hover:text-espresso">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-taupe text-sm mb-2">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="text-xs tracking-wider uppercase text-gold underline underline-offset-4 hover:text-espresso transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.productId}-${item.variant}`} className="flex gap-4 py-3 border-b border-warmgray/15">
                    <div className="w-20 h-20 bg-goldpale flex-shrink-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                        <span className="text-gold text-xl font-serif">✦</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold tracking-wider truncate">{item.product.name}</p>
                      <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-warmgray/30">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-xs min-w-[28px] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-medium">${(item.product.price * item.quantity).toFixed(0)}</span>
                          <button
                            onClick={() => removeItem(item.productId, item.variant)}
                            className="text-taupe hover:text-rosedeep transition-colors"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-warmgray/20 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-taupe tracking-wider uppercase text-xs">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-[11px] text-taupe text-center">Shipping & taxes calculated at checkout</p>
              <button className="btn-accent w-full text-center" onClick={closeDrawer}>
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

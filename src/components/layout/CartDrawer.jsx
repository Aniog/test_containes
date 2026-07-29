import { X, Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQty, subtotal, isOpen, setIsOpen, totalItems } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 19.99) : 0;
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-ocean">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-teal-ocean" />
            <h2 className="text-lg font-bold text-navy">Your Cart</h2>
            {totalItems > 0 && (
              <span className="bg-teal-ocean text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl hover:bg-surface-alt transition-colors text-slate-text"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-20 h-20 bg-surface-alt rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-text" />
              </div>
              <p className="text-slate-text font-medium">Your cart is empty</p>
              <p className="text-muted-text text-sm">Add some sea slugs to get started!</p>
              <button
                onClick={() => { setIsOpen(false); navigate('/shop'); }}
                className="bg-teal-ocean text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-teal-ocean-dark transition-colors"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-4 border-b border-border-ocean last:border-0">
                  <div className="w-16 h-16 bg-surface-alt rounded-xl flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-teal-ocean/20 to-teal-ocean-light/20 flex items-center justify-center text-2xl">
                      🐌
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-navy text-sm truncate">{item.data.name}</p>
                    {item.data.scientific_name && (
                      <p className="text-xs text-muted-text italic">{item.data.scientific_name}</p>
                    )}
                    <p className="text-teal-ocean font-bold text-sm mt-1">${item.data.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 rounded-lg bg-surface-alt hover:bg-border-ocean flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3 h-3 text-slate-text" />
                      </button>
                      <span className="text-sm font-semibold text-navy w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 rounded-lg bg-surface-alt hover:bg-border-ocean flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3 h-3 text-slate-text" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-text hover:text-coral transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <p className="font-bold text-navy text-sm">${(item.data.price * item.qty).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-border-ocean bg-seafoam">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-slate-text">
                <span>Subtotal</span>
                <span className="font-medium text-navy">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-text">
                <span>Shipping</span>
                <span className="font-medium text-navy">
                  {shipping === 0 ? <span className="text-teal-ocean font-semibold">Free</span> : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {subtotal < 100 && (
                <p className="text-xs text-muted-text">Add ${(100 - subtotal).toFixed(2)} more for free shipping</p>
              )}
              <div className="flex justify-between font-bold text-navy border-t border-border-ocean pt-2 mt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => { setIsOpen(false); navigate('/checkout'); }}
              className="w-full bg-coral text-white py-3 rounded-xl font-bold hover:bg-coral-light transition-colors"
            >
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 text-slate-text text-sm py-2 hover:text-teal-ocean transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

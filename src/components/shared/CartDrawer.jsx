import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-widest font-medium">YOUR CART</h2>
          <button onClick={closeCart} className="text-velmora-charcoal hover:text-velmora-gold transition-colors" aria-label="Close cart">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-muted gap-3">
              <ShoppingBag size={40} strokeWidth={1} />
              <p className="text-sm tracking-wide">Your cart is empty</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-border/40 rounded-sm flex items-center justify-center text-xs text-velmora-muted uppercase tracking-wider">
                    Img
                  </div>
                  <div className="flex-1">
                    <p className="font-serif text-sm tracking-widest uppercase">{item.name}</p>
                    <p className="text-xs text-velmora-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-border rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-border rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-velmora-muted underline ml-auto hover:text-velmora-charcoal transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-border bg-velmora-bg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm tracking-wide text-velmora-muted">Subtotal</span>
              <span className="font-serif text-lg font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-velmora-charcoal text-white py-3.5 text-sm tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors duration-300">
              Checkout
            </button>
            <p className="text-center text-[11px] text-velmora-muted mt-3 tracking-wide">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}

import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-400 ${
          isOpen ? 'bg-black/40 backdrop-blur-sm visible' : 'bg-transparent invisible'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-surface z-50 shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-wide">
              Your Bag {itemCount > 0 && `(${itemCount})`}
            </h2>
            <button onClick={closeCart} className="p-2 hover:text-velmora-gold transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-muted/30 mb-4" />
                <p className="text-velmora-muted text-sm">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-4 text-xs tracking-wider uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors underline underline-offset-4"
                >
                  Browse Collections
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 animate-fade-in">
                    <div className="w-20 h-24 shrink-0 bg-velmora-base overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide">{item.name}</h3>
                      <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                      <p className="text-sm font-sans mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:border-velmora-base transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:border-velmora-base transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-velmora-muted hover:text-red-500 transition-colors underline underline-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-velmora-border space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-muted">Subtotal</span>
                <span className="font-sans font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-velmora-base text-white py-3.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-velmora-gold transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-velmora-muted hover:text-velmora-base transition-colors underline underline-offset-4"
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
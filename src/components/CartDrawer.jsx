import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalPrice, totalItems, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
            <div>
              <h2 className="font-serif text-lg text-charcoal">Shopping Bag</h2>
              <p className="text-xs text-charcoal-muted">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
            </div>
            <button onClick={closeCart} className="p-1 text-charcoal-light hover:text-charcoal transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-beige mb-4" />
                <p className="text-charcoal-light text-sm">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-4 text-sm text-gold hover:text-gold-dark underline underline-offset-2 transition-colors"
                >
                  Start shopping
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.color}`} className="flex gap-4 pb-5 border-b border-beige/50">
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-beige-light">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="block text-sm font-medium text-charcoal hover:text-gold transition-colors truncate uppercase tracking-wider"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-charcoal-muted mt-0.5">{item.color}</p>
                      <p className="text-sm font-serif italic text-charcoal mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-beige rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            className="p-1 text-charcoal-light hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-charcoal">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            className="p-1 text-charcoal-light hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="text-xs text-charcoal-muted hover:text-charcoal transition-colors"
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
            <div className="border-t border-beige px-6 py-5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-charcoal-light">Subtotal</span>
                <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-muted">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-gold hover:bg-gold-dark text-white text-sm tracking-wider uppercase font-medium transition-colors duration-300 rounded-none">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-2 text-xs text-charcoal-light hover:text-charcoal uppercase tracking-wider transition-colors"
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
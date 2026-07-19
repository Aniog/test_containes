import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-base z-50 transform transition-transform duration-500 ease-out shadow-2xl ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-divider">
            <h2 className="font-serif text-xl uppercase tracking-widest">Your Bag</h2>
            <button onClick={closeCart} className="p-1 hover:opacity-60 transition-opacity" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-divider mb-4" />
                <p className="font-serif text-lg text-velmora-muted mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-muted mb-6">Discover pieces crafted to be treasured.</p>
                <Link to="/shop" onClick={closeCart} className="btn-primary">
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-accent-light rounded-sm flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-velmora-muted text-xs font-serif uppercase tracking-wider">
                        {item.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="product-name text-xs block truncate hover:text-velmora-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      {item.variant && (
                        <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                      )}
                      <p className="text-sm font-sans font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-velmora-divider flex items-center justify-center hover:border-velmora-text transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-velmora-divider flex items-center justify-center hover:border-velmora-text transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-xs text-velmora-muted underline hover:text-velmora-text transition-colors"
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

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="px-6 py-5 border-t border-velmora-divider bg-velmora-base">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm uppercase tracking-widest">Subtotal</span>
                <span className="font-sans text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted mb-4">Shipping and taxes calculated at checkout.</p>
              <button onClick={() => alert('Checkout coming soon!')} className="w-full btn-primary py-4">Checkout</button>
              <button onClick={closeCart} className="w-full mt-3 text-center text-xs uppercase tracking-widest underline text-velmora-muted hover:text-velmora-text transition-colors">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

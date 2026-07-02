import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background shadow-2xl transform transition-transform duration-500 ease-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-lg tracking-wider uppercase">Your Cart</h2>
          <button
            onClick={closeDrawer}
            className="p-1 hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-stone-light mb-4" />
            <p className="text-stone mb-2">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeDrawer}
              className="text-sm text-accent hover:underline underline-offset-4"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 max-h-[calc(100vh-220px)]">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.material}`}
                  className="flex gap-4 py-4 border-b border-border last:border-0"
                >
                  <div className="w-20 h-20 bg-ivory rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone mt-0.5 capitalize">{item.material}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.material, item.quantity - 1)
                          }
                          className="p-1.5 hover:text-accent transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.material, item.quantity + 1)
                          }
                          className="p-1.5 hover:text-accent transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.material)}
                        className="text-xs text-stone hover:text-destructive transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-5 bg-background">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-wider font-medium">Subtotal</span>
                <span className="text-lg font-serif font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone mb-4">Shipping & taxes calculated at checkout</p>
              <Button variant="primary" className="w-full" onClick={() => alert('Checkout coming soon')}>
                Checkout
              </Button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs text-stone mt-3 hover:text-foreground transition-colors uppercase tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
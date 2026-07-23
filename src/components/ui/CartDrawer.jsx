import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-black/30 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-2xl text-velmora-black">Your Cart</h2>
          <button
            className="p-2 text-velmora-gray hover:text-velmora-black transition-colors"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBagIcon className="w-16 h-16 text-velmora-border mb-4" />
              <p className="text-velmora-gray mb-4">Your cart is empty</p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-30 bg-velmora-light overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-sm uppercase tracking-wider text-velmora-black">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-gray mt-1">
                        {item.variant}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-velmora-border text-velmora-black hover:border-velmora-gold transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm text-velmora-black">
                          {item.quantity}
                        </span>
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-velmora-border text-velmora-black hover:border-velmora-gold transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center gap-4">
                        <span className="text-velmora-black font-medium">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          className="text-velmora-gray hover:text-red-500 transition-colors"
                          onClick={() => removeFromCart(item.id, item.variant)}
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-velmora-border bg-velmora-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-velmora-gray uppercase tracking-wider text-sm">
                Subtotal
              </span>
              <span className="font-serif text-xl text-velmora-black">
                ${cartTotal}
              </span>
            </div>
            <p className="text-sm text-velmora-gray mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <Button size="full">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function ShoppingBagIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
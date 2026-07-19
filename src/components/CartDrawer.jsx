import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-primary shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-divider">
          <h2 className="font-serif text-h3 text-text-primary">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-accent-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-text-secondary mb-4" />
              <p className="font-sans text-text-secondary">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-30 bg-secondary/5 flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-product text-text-primary uppercase tracking-wider">
                      {item.name}
                    </h3>
                    <p className="font-sans text-small text-text-secondary mt-1">
                      {item.variant}
                    </p>
                    <p className="font-sans text-body text-text-primary mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 border border-border-divider flex items-center justify-center hover:border-accent-gold transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-sans text-body w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 border border-border-divider flex items-center justify-center hover:border-accent-gold transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto text-small text-text-secondary hover:text-error transition-colors"
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
        {cart.length > 0 && (
          <div className="p-6 border-t border-border-divider">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-body text-text-secondary">Subtotal</span>
              <span className="font-sans text-h3 text-text-primary">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-small text-text-secondary mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-accent-gold text-secondary font-sans text-small uppercase tracking-widest font-semibold hover:bg-accent-gold-hover transition-colors shadow-button">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
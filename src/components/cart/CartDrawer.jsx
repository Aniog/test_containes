import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-[var(--color-cream)] shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-charcoal)] border-opacity-10">
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-[var(--color-warm-gold)] transition-colors"
              aria-label="Close cart"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-[var(--color-stone)] mb-4" />
                <p className="font-serif text-lg text-[var(--color-charcoal)]">Your cart is empty</p>
                <p className="text-sm text-[var(--color-stone)] mt-2">Add some beautiful jewelry to get started</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 btn-primary"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 animate-fade-in"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 bg-[var(--color-cream-dark)] flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="product-name text-[var(--color-charcoal)]">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[var(--color-stone)] mt-1">
                          {item.variant}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center border border-[var(--color-charcoal)] border-opacity-20">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:text-[var(--color-warm-gold)] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={2} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:text-[var(--color-warm-gold)] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={2} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-sans text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="self-start p-1 text-[var(--color-stone)] hover:text-[var(--color-error)] transition-colors"
                      aria-label="Remove item"
                    >
                      <X size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[var(--color-charcoal)] border-opacity-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--color-stone)]">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[var(--color-stone)] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full btn-primary">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 btn-outline"
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
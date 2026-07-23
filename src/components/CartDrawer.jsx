import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
            <h2 className="font-serif text-xl uppercase tracking-widest">Cart ({items.length})</h2>
            <button onClick={closeCart} className="text-text-secondary hover:text-text-primary transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-divider mb-4" />
                <p className="text-text-secondary font-sans mb-4">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-primary inline-block"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-divider">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-cream-dark rounded flex-shrink-0" />

                    <div className="flex-1 min-w-0">
                      <h3 className="product-name mb-1">{item.name}</h3>
                      <p className="text-xs text-text-secondary font-sans mb-1 capitalize">{item.variant} tone</p>
                      <p className="font-sans text-sm font-medium">${item.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-divider rounded">
                          <button
                            className="p-1.5 hover:text-gold transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-sans min-w-[1.5rem] text-center">{item.quantity}</span>
                          <button
                            className="p-1.5 hover:text-gold transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-xs text-text-secondary hover:text-text-primary font-sans underline transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
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
          {items.length > 0 && (
            <div className="border-t border-divider px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-text-secondary font-sans">Free shipping on orders over $100</p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
          <h2 className="font-serif text-lg tracking-wider text-espresso">Your Cart</h2>
          <button onClick={closeCart} className="p-1 hover:text-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-taupe mb-4" />
            <p className="font-serif text-lg text-espresso mb-2">Your cart is empty</p>
            <p className="text-sm text-taupe mb-6">Add some pieces to get started</p>
            <button onClick={closeCart} className="btn-primary">
              <Link to="/shop">Continue Shopping</Link>
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-warm-border last:border-0">
                  <div className="w-20 h-20 bg-warm-muted flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-sm uppercase tracking-wider text-espresso truncate">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-2 p-0.5 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-sm text-taupe mt-0.5">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border border-warm-border hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border border-warm-border hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-warm-border px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-sans text-espresso">Subtotal</span>
                <span className="font-serif text-lg text-espresso">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center" onClick={closeCart}>
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-taupe hover:text-espresso transition-colors py-2"
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
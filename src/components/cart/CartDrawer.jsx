import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl text-espresso">Your Cart</h2>
          <button onClick={closeCart} className="text-walnut hover:text-espresso transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-hairline mb-4" />
              <p className="font-serif text-lg text-walnut">Your cart is empty</p>
              <p className="text-sm text-muted mt-1">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-hairline">
                  {/* Placeholder image */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-muted uppercase tracking-wider">Image</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm text-espresso uppercase tracking-wider truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm text-espresso font-medium mt-1">${item.price}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-walnut hover:text-espresso transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-xs text-espresso">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-walnut hover:text-espresso transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-muted hover:text-espresso underline transition-colors"
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
          <div className="px-6 py-5 border-t border-hairline">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-walnut">Subtotal</span>
              <span className="font-serif text-lg text-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">Shipping calculated at checkout</p>
            <button
              onClick={closeCart}
              className="w-full bg-gold text-cream text-xs uppercase tracking-widest font-medium py-3.5 hover:bg-gold-dark transition-colors duration-300"
            >
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-xs text-walnut uppercase tracking-widest font-medium py-2 hover:text-espresso transition-colors"
            >
              <Link to="/shop">Continue Shopping</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

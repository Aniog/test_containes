import { X, Plus, Minus, ShoppingBag, Gem } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[70] transition-opacity"
          onClick={closeCart}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[80] shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
            <h2 className="font-serif text-lg tracking-widest uppercase text-text-primary">
              Your Cart
            </h2>
            <button onClick={closeCart} className="text-text-primary hover:text-text-secondary">
              <X size={20} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
              <ShoppingBag size={40} className="text-hairline mb-4" />
              <p className="font-serif text-xl text-text-primary">Your cart is empty</p>
              <p className="mt-2 text-sm text-text-secondary">
                Discover pieces crafted to be treasured.
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-surface-alt border border-hairline flex-shrink-0 flex items-center justify-center">
                      <Gem size={20} className="text-text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-sm uppercase tracking-widest text-text-primary">
                        {item.name}
                      </h4>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {item.variant}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="w-7 h-7 border border-hairline flex items-center justify-center text-text-primary hover:bg-surface-alt"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-sans text-text-primary w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="w-7 h-7 border border-hairline flex items-center justify-center text-text-primary hover:bg-surface-alt"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-sans font-medium text-text-primary">
                        ${item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-text-secondary underline mt-1 hover:text-text-primary"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-6 border-t border-hairline bg-surface">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-sm uppercase tracking-label text-text-secondary">
                    Subtotal
                  </span>
                  <span className="font-sans text-lg font-medium text-text-primary">
                    ${subtotal}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mb-4">
                  Shipping and taxes calculated at checkout.
                </p>
                <button className="w-full bg-accent text-white py-3.5 uppercase text-xs font-sans font-medium tracking-label hover:bg-accent-dark transition-colors">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full mt-3 border border-hairline text-text-primary py-3.5 uppercase text-xs font-sans font-medium tracking-label hover:bg-surface-alt transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

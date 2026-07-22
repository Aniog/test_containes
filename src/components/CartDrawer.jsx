import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={closeCart}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-surface z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-wide text-primary">
            YOUR CART ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="text-secondary hover:text-primary transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-secondary">
              <ShoppingBag size={48} className="mb-4 text-muted" />
              <p className="font-serif text-lg">Your cart is empty</p>
              <p className="text-sm mt-1">Discover our collection</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-base flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-primary truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-secondary mt-0.5 capitalize">
                      {item.variant} Tone
                    </p>
                    <p className="text-sm text-primary mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-hairline text-secondary hover:border-accent hover:text-accent transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm text-primary w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-hairline text-secondary hover:border-accent hover:text-accent transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-muted underline hover:text-secondary transition-colors"
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

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-hairline">
            <div className="flex items-center justify-between mb-4">
              <span className="text-secondary text-sm">Subtotal</span>
              <span className="font-serif text-lg text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-accent text-base py-3.5 font-medium tracking-wide hover:bg-accent-hover transition-colors">
              CHECKOUT
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 border border-hairline text-primary py-3.5 font-medium tracking-wide hover:border-accent transition-colors"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
}

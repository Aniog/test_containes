import { Minus, Plus, Trash2, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-base/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-surface shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-lg tracking-widest text-base">
            YOUR CART
          </h2>
          <button
            onClick={closeCart}
            className="text-muted transition-colors hover:text-base"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="mb-4 text-border" />
              <p className="font-serif text-base text-muted">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted">Add something beautiful.</p>
              <button
                onClick={closeCart}
                className="mt-6 bg-accent px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="h-24 w-20 flex-shrink-0 overflow-hidden bg-canvas"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-serif text-xs uppercase tracking-widest text-base">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs capitalize text-muted">
                        {item.variant}
                      </p>
                      <p className="mt-1 text-sm font-medium text-base">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="px-2 py-1 text-muted hover:text-base"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-medium text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="px-2 py-1 text-muted hover:text-base"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-muted transition-colors hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between pb-4">
              <span className="text-sm text-muted">Subtotal</span>
              <span className="font-serif text-lg text-base">${subtotal}</span>
            </div>
            <p className="pb-4 text-xs text-muted">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-accent py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-hover">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="mt-3 w-full border border-base py-3 text-xs font-medium uppercase tracking-widest text-base transition-colors hover:bg-base hover:text-canvas"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

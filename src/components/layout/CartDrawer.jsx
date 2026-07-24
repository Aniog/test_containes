import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-brand-base border-l border-white/10 z-50 transform transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="font-serif text-xl uppercase tracking-widest text-brand-cream">
            Your Cart
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 hover:text-brand-gold transition-colors">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-brand-muted space-y-4">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="text-sm">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs uppercase tracking-widest text-brand-gold hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartId} className="flex gap-4">
                <div className="w-20 h-24 bg-brand-surface flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-xs uppercase tracking-widest text-brand-cream truncate">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-brand-muted mt-0.5 capitalize">
                    {item.variant.label}
                  </p>
                  <p className="text-sm font-medium text-brand-cream mt-1">
                    ${item.price}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                      className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-brand-gold transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                      className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-brand-gold transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.cartId)}
                      className="ml-auto text-[11px] text-brand-muted hover:text-brand-cream underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-brand-muted">Subtotal</span>
              <span className="font-serif text-lg text-brand-cream">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] text-brand-muted">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full py-4 bg-brand-gold text-brand-base text-sm font-semibold uppercase tracking-widest hover:bg-brand-goldLight transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-3 border border-white/10 text-xs uppercase tracking-widest text-brand-cream hover:border-brand-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
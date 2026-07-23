import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { formatPrice } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeFromCart, subtotal, count } = useCart();

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="absolute inset-0 bg-black/40" onClick={closeCart} />
      <aside
        className={cn(
          'absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-500 ease-in-out-circ flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-stoneborder px-6 py-5">
          <h2 className="font-serif text-2xl">Your Cart ({count})</h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-warmstone">
              <ShoppingBag size={48} strokeWidth={1} className="mb-4 opacity-40" />
              <p className="font-serif text-xl text-espresso mb-2">Your cart is empty</p>
              <p className="text-sm">Discover pieces crafted to be treasured.</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-sm bg-parchment font-serif text-xl text-warmstone">
                    {item.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-serif text-sm uppercase tracking-widest text-espresso">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-warmstone capitalize">{item.tone} tone</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-full border border-stoneborder px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="p-1 hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="min-w-[1rem] text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="p-1 hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.tone)}
                    className="self-start p-1 text-warmstone hover:text-red-700 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={16} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stoneborder px-6 py-6 bg-cream">
            <div className="mb-4 flex items-center justify-between text-espresso">
              <span className="text-sm uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-5 text-xs text-warmstone text-center">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full rounded-sm bg-gold py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-gold-dark">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="mt-3 w-full py-3 text-center text-sm uppercase tracking-widest text-espresso underline underline-offset-4 hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
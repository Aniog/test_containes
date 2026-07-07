import { X, Plus, Minus, ShoppingBag, Trash2, Gem } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, shipping, total } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-velmora-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-velmora-cream shadow-2xl transition-transform duration-500 ease-out-lux ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-taupe/30 px-6 py-5">
          <h2 className="font-serif text-lg font-medium uppercase tracking-widest text-velmora-espresso">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-velmora-brown transition-colors hover:text-velmora-espresso"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="mb-4 text-velmora-taupe" />
            <p className="font-serif text-xl text-velmora-espresso">Your cart is empty</p>
            <p className="mt-2 font-display text-sm text-velmora-stone">
              Discover something beautiful to treasure.
            </p>
            <a
              href="/shop"
              onClick={closeCart}
              className="mt-6 bg-velmora-espresso px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-coffee"
            >
              Shop Now
            </a>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.cartItemId} className="flex gap-4">
                    <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center overflow-hidden bg-velmora-champagne">
                      <Gem size={24} className="text-velmora-gold-dark" aria-hidden="true" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="product-title text-xs font-medium text-velmora-espresso">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs capitalize text-velmora-stone">
                          {item.variant} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-taupe/50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="px-2 py-1 text-velmora-brown hover:bg-velmora-champagne"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs text-velmora-espresso">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="px-2 py-1 text-velmora-brown hover:bg-velmora-champagne"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="font-display text-sm font-medium text-velmora-espresso">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="self-start text-velmora-stone transition-colors hover:text-red-600"
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-velmora-taupe/30 bg-velmora-cream px-6 py-5">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-velmora-brown">
                  <span>Subtotal</span>
                  <span className="font-medium text-velmora-espresso">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-velmora-brown">
                  <span>Shipping</span>
                  <span className="font-medium text-velmora-espresso">
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-velmora-taupe/30 pt-3 font-display font-medium text-velmora-espresso">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <button
                type="button"
                className="mt-5 w-full bg-velmora-espresso py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-coffee"
              >
                Checkout
              </button>
              <p className="mt-3 text-center text-xs text-velmora-stone">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

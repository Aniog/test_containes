import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import { formatPrice, getProductById } from '@/data/products.js';
import { StrkImg, ImageScope } from '@/components/StrkImage.jsx';

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, closeCart, setQty, removeItem } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[80] transition-opacity duration-300 ${
        isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isCartOpen}
    >
      <div className="absolute inset-0 bg-espresso/50 backdrop-blur-[2px]" onClick={closeCart} />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-[0_24px_60px_rgba(32,25,20,0.3)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-linen px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-[0.18em] text-espresso">Your Bag</h2>
          <button aria-label="Close cart" onClick={closeCart} className="text-mink transition-colors hover:text-espresso">
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-linen" strokeWidth={1} />
            <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
            <p className="max-w-[240px] text-sm leading-relaxed text-mink">
              Discover pieces crafted to be treasured — from everyday huggies to heirloom gifts.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 border border-espresso px-8 py-3 text-[11px] font-medium uppercase tracking-luxe text-espresso transition-all duration-300 hover:bg-espresso hover:text-ivory"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ImageScope className="flex-1 overflow-y-auto px-6" deps={[items.length]}>
              <ul className="divide-y divide-linen">
                {items.map((item) => {
                  const product = getProductById(item.id);
                  return (
                    <li key={item.key} className="flex gap-4 py-5">
                      <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                        <StrkImg
                          imgId={`cart-${item.key}`}
                          query={`gold jewelry product photography, ${product?.tagline || item.name}, warm neutral background`}
                          ratio="1x1"
                          width={200}
                          alt={item.name}
                          className="h-20 w-20 bg-cream object-cover"
                        />
                      </Link>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <Link
                            to={`/product/${item.id}`}
                            onClick={closeCart}
                            className="font-serif text-[15px] uppercase leading-snug tracking-[0.12em] text-espresso hover:text-bronze"
                          >
                            {item.name}
                          </Link>
                          <button
                            aria-label={`Remove ${item.name}`}
                            onClick={() => removeItem(item.key)}
                            className="text-ash transition-colors hover:text-espresso"
                          >
                            <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="mt-0.5 text-xs text-mink">{item.variant} tone</p>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center border border-linen">
                            <button
                              aria-label="Decrease quantity"
                              onClick={() => setQty(item.key, item.qty - 1)}
                              className="flex h-7 w-7 items-center justify-center text-mink transition-colors hover:bg-cream hover:text-espresso"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-medium text-espresso">{item.qty}</span>
                            <button
                              aria-label="Increase quantity"
                              onClick={() => setQty(item.key, item.qty + 1)}
                              className="flex h-7 w-7 items-center justify-center text-mink transition-colors hover:bg-cream hover:text-espresso"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-sm font-medium text-espresso">
                            {formatPrice(item.price * item.qty)}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </ImageScope>

            <div className="border-t border-linen bg-cream/60 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-luxe text-mink">Subtotal</span>
                <span className="font-serif text-xl text-espresso">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-mink">Complimentary worldwide shipping & 30-day returns.</p>
              <button className="mt-4 w-full bg-espresso py-4 text-[11px] font-medium uppercase tracking-luxe text-ivory transition-colors duration-300 hover:bg-bronze-dark">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-2 w-full py-2 text-[11px] uppercase tracking-luxe text-mink transition-colors hover:text-espresso"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

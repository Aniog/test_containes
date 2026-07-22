import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { getProductById } from '@/data/products';
import { ProductImage } from '@/components/product/ProductImage';

export default function CartDrawer() {
  const { items, subtotal, count, isCartOpen, closeCart, removeItem, updateQuantity } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 ${isCartOpen ? '' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-espresso/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-[0_20px_60px_rgba(43,33,24,0.25)] transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
          <h2 className="font-serif text-2xl text-espresso">
            Your Cart{' '}
            <span className="text-base text-taupe">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso transition-colors hover:text-gold-deep"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-sand" strokeWidth={1} />
            <p className="font-serif text-2xl text-espresso">Your cart is empty</p>
            <p className="max-w-xs text-sm leading-relaxed text-taupe">
              Discover demi-fine pieces crafted to be treasured — and worn every day.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((item) => {
                const product = getProductById(item.productId);
                return (
                  <div
                    key={item.key}
                    className="flex gap-4 border-b border-espresso/10 py-5 last:border-b-0"
                  >
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="block h-24 w-20 shrink-0 overflow-hidden bg-ivory"
                    >
                      {product && (
                        <ProductImage
                          product={product}
                          angle="main"
                          ratio="4x5"
                          width={200}
                          className="h-full w-full"
                        />
                      )}
                    </Link>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${item.productId}`}
                            onClick={closeCart}
                            className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso hover:text-gold-deep"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1 text-xs text-taupe">{item.variant} tone</p>
                        </div>
                        <p className="text-sm font-medium text-cocoa">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-espresso/15">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.key, -1)}
                            className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-ivory"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-espresso">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.key, 1)}
                            className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-ivory"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          className="text-[11px] uppercase tracking-[0.15em] text-taupe underline-offset-4 transition-colors hover:text-espresso hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-espresso/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-espresso">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-taupe">
                Free worldwide shipping · 30-day returns
              </p>
              <button
                type="button"
                className="mt-4 w-full bg-gold py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:bg-gold-deep"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.2em] text-taupe underline-offset-4 transition-colors hover:text-espresso hover:underline"
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

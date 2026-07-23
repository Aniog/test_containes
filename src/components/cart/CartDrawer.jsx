import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { PLACEHOLDER_IMG, formatPrice, getProduct } from '@/data/products';

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [isCartOpen, items.length]);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <div ref={containerRef} className={`fixed inset-0 z-[60] ${isCartOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-noir/70 backdrop-blur-sm transition-opacity duration-500 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-onyx border-l border-umber shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-umber px-6 py-5">
          <h2 className="font-serif text-lg uppercase tracking-[0.25em] text-ivory">
            Your Cart
            <span className="ml-2 font-sans text-xs tracking-normal text-sand">
              {items.length > 0 && `(${items.reduce((n, i) => n + i.quantity, 0)})`}
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1.5 text-sand transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-umber" strokeWidth={1.2} />
            <p className="font-serif text-xl text-ivory">Your cart is empty</p>
            <p className="text-sm text-sand">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 border border-gold/60 px-8 py-3 text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-gold transition-all duration-300 hover:bg-gold hover:text-noir"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-umber overflow-y-auto px-6">
              {items.map((item) => {
                const product = getProduct(item.productId);
                if (!product) return null;
                return (
                  <li key={`${item.productId}-${item.variant}`} className="flex gap-4 py-5">
                    <Link to={`/product/${product.id}`} onClick={closeCart} className="shrink-0">
                      <div className="h-24 w-20 overflow-hidden border border-umber bg-noir">
                        <img
                          data-strk-img-id={`cart-${product.id}-c3`}
                          data-strk-img={`[cart-${product.id}-name] gold jewelry still life`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="200"
                          src={PLACEHOLDER_IMG}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link to={`/product/${product.id}`} onClick={closeCart}>
                            <h3
                              id={`cart-${product.id}-name`}
                              className="font-serif text-sm font-medium uppercase tracking-[0.14em] text-ivory hover:text-gold"
                            >
                              {product.name}
                            </h3>
                          </Link>
                          <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-sand">
                            {item.variant} tone
                          </p>
                        </div>
                        <p className="font-sans text-sm font-medium text-gold">
                          {formatPrice(product.price * item.quantity)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-umber">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="p-1.5 text-sand transition-colors hover:text-gold"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center font-sans text-xs text-ivory">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="p-1.5 text-sand transition-colors hover:text-gold"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${product.name}`}
                          onClick={() => removeItem(item.productId, item.variant)}
                          className="p-1.5 text-sand transition-colors hover:text-gold"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-umber px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-sans uppercase tracking-[0.22em] text-sand">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-ivory">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1.5 text-[11px] text-sand">
                Complimentary worldwide shipping and gift wrapping included.
              </p>
              <button
                type="button"
                className="mt-5 w-full bg-gold py-4 text-[11px] font-sans font-semibold uppercase tracking-[0.24em] text-noir transition-colors duration-300 hover:bg-goldlight"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full py-2 text-[11px] font-sans uppercase tracking-[0.22em] text-sand transition-colors hover:text-gold"
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

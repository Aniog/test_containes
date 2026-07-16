import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

function CartItemRow({ item }) {
  const { updateQuantity, removeItem } = useCart();
  const product = products.find((p) => p.id === item.productId);
  const variant = product?.variants.find((v) => v.id === item.variantId);

  if (!product) return null;

  return (
    <div className="flex gap-4 py-5 border-b border-clay/50">
      <div className="w-20 h-20 flex-shrink-0 bg-sand overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={`cart-${product.id}-thumb`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4
          id={product.titleId}
          className="product-name text-xs text-charcoal truncate"
        >
          {product.name}
        </h4>
        <p id={product.descId} className="sr-only">{product.description.substring(0, 80)}</p>
        <p className="text-xs text-stone mt-1 font-sans">
          {variant?.label || 'Gold'} &middot; ${item.price}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-clay">
            <button
              onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 h-7 flex items-center justify-center text-xs font-sans text-charcoal border-x border-clay">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.productId, item.variantId)}
            className="text-stone hover:text-red-400 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
        onClick={closeDrawer}
      />
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-clay">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-charcoal" />
            <span className="text-sm font-sans font-medium text-charcoal uppercase tracking-wider">
              Your Bag ({totalItems})
            </span>
          </div>
          <button
            onClick={closeDrawer}
            className="text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-10 h-10 text-stone mb-4" />
              <p className="text-sm font-sans text-stone">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="mt-4 btn-outline text-xs"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow
                key={`${item.productId}-${item.variantId}`}
                item={item}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-clay px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-sans text-stone uppercase tracking-wider">
                Subtotal
              </span>
              <span className="text-lg font-serif text-charcoal">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-stone font-sans">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full text-sm" onClick={closeDrawer}>
              Checkout &mdash; ${totalPrice.toFixed(2)}
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-center text-xs font-sans text-stone underline underline-offset-4 hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

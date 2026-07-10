import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velvet-900/40 cart-overlay transition-opacity duration-350 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory-100 shadow-2xl flex flex-col transition-transform duration-350 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-300">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velvet-900" />
            <span className="font-sans text-xs tracking-widest2 uppercase text-velvet-900 font-medium">
              Your Cart {itemCount > 0 && `(${itemCount})`}
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-velvet-700 hover:text-velvet-900 transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velvet-300" />
              <p className="font-serif text-xl font-light text-velvet-700">Your cart is empty</p>
              <p className="font-sans text-sm text-stone-warm">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-2 inline-block bg-velvet-900 text-ivory-100 px-8 py-3 font-sans text-xs tracking-widest2 uppercase hover:bg-velvet-800 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-ivory-300 last:border-0">
                  {/* Product image */}
                  <div className="w-20 h-24 bg-ivory-200 flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}-img-${item.variant.replace(/\s/g, '')}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={item.titleId} className="sr-only">{item.name}</span>
                    <span id={item.descId} className="sr-only">{item.name} {item.variant}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-serif text-sm font-medium tracking-widest uppercase text-velvet-900 leading-tight">
                        {item.name}
                      </p>
                      <p className="font-sans text-xs text-stone-warm mt-0.5">{item.variant}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity */}
                      <div className="flex items-center border border-ivory-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velvet-700 hover:text-velvet-900 hover:bg-ivory-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-sans text-xs text-velvet-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velvet-700 hover:text-velvet-900 hover:bg-ivory-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm font-medium text-velvet-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-stone-warm hover:text-velvet-900 transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-ivory-300 bg-ivory-50">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-stone-warm">Subtotal</span>
              <span className="font-serif text-xl font-light text-velvet-900">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone-warm mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velvet-900 text-ivory-100 py-4 font-sans text-xs tracking-widest2 uppercase font-medium hover:bg-velvet-800 transition-colors mb-2">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full border border-velvet-900 text-velvet-900 py-3 font-sans text-xs tracking-widest2 uppercase hover:bg-ivory-200 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;

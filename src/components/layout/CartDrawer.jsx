import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 cart-overlay z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-sans text-xs uppercase tracking-widest text-espresso">
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-lg text-taupe font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-taupe">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest text-espresso border border-espresso px-6 py-2.5 hover:bg-espresso hover:text-cream transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Hidden text anchors for ImageHelper query */}
                  <span id={`cart-name-${item.key}`} className="sr-only">{item.product.name}</span>
                  <span id={`cart-cat-${item.key}`} className="sr-only">{item.product.category} gold jewelry</span>

                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img-id={`cart-item-img-${item.key}`}
                      data-strk-img={`[cart-cat-${item.key}] [cart-name-${item.key}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-wider text-espresso leading-tight">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-sans text-xs text-taupe mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-sans text-sm font-medium text-espresso mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-taupe hover:text-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="font-sans text-xs text-espresso w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-taupe hover:text-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-taupe hover:text-espresso transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-serif text-xl text-espresso">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-taupe mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-cream font-sans text-xs uppercase tracking-widest py-4 hover:bg-charcoal transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-linen text-taupe font-sans text-xs uppercase tracking-widest py-3 hover:border-espresso hover:text-espresso transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

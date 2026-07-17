import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && items.length > 0) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isOpen
            ? 'bg-espresso-900/30 backdrop-blur-sm pointer-events-auto'
            : 'bg-transparent pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-cream shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-espresso-200/40">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-espresso-700" />
              <span className="font-sans text-sm tracking-wider uppercase text-espresso-700">
                Your Bag ({itemCount})
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1 text-espresso-400 hover:text-espresso-700 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-espresso-300 mb-4" />
                <p className="font-serif text-lg text-espresso-500 mb-1">Your bag is empty</p>
                <p className="text-sm text-espresso-400 mb-6">Discover pieces you'll treasure</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-primary text-xs px-6 py-2.5"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 pb-5 border-b border-espresso-200/30 last:border-0">
                    {/* Product image */}
                    <div className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden bg-warm-100">
                      <div
                        className="w-full h-full"
                        data-strk-img-id={`cart-${item.product.id}`}
                        data-strk-img={`[cart-title-${item.product.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                      />
                      <span id={`cart-title-${item.product.id}`} className="hidden">
                        {item.product.name}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="product-name text-sm font-medium text-espresso-800 truncate">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-espresso-500 mt-0.5">{item.variant}</p>
                          <p className="text-sm text-espresso-700 mt-1 font-sans">
                            ${item.product.price}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-espresso-300 hover:text-espresso-600 transition-colors p-1"
                          aria-label="Remove"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-espresso-200 text-espresso-500 hover:border-espresso-400 transition-colors rounded-sm"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm text-espresso-700 w-5 text-center font-sans">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-espresso-200 text-espresso-500 hover:border-espresso-400 transition-colors rounded-sm"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
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
            <div className="border-t border-espresso-200/40 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-espresso-500 font-sans">Subtotal</span>
                <span className="font-serif text-lg text-espresso-800">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-espresso-400 text-center">Shipping & taxes calculated at checkout</p>
              <button className="w-full btn-primary text-xs py-3">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs text-espresso-500 hover:text-espresso-700 transition-colors py-2 font-sans tracking-wide uppercase"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, closeCart, removeItem, updateQuantity } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (drawerRef.current) {
        requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, drawerRef.current);
        });
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-walnut-950/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream-100 z-[70] shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div ref={drawerRef} className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300">
            <h2 className="font-serif text-xl tracking-wider uppercase text-walnut-900">
              Your Bag ({totalItems})
            </h2>
            <button onClick={closeCart} className="text-walnut-600 hover:text-walnut-900 transition-colors" aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-cream-400 mb-4" strokeWidth={1} />
                <p className="font-serif text-xl text-walnut-600 mb-2">Your bag is empty</p>
                <p className="font-sans text-sm text-walnut-400 mb-6">Discover our collection of fine jewelry</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-outline text-xs px-6 py-3"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  const product = products.find(p => p.id === item.id);
                  const imgSrc = product?.images?.[0] || '';
                  
                  return (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-cream-200">
                      {/* Product image */}
                      <div className="w-20 h-20 bg-cream-200 flex-shrink-0 overflow-hidden">
                        <img
                          src={imgSrc}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="font-serif text-sm uppercase tracking-wider text-walnut-900 truncate">
                          {item.name}
                        </p>
                        <p className="font-sans text-xs text-walnut-400 mt-0.5">{item.variant}</p>
                        <p className="font-sans text-sm text-walnut-700 mt-1">${item.price}</p>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center border border-cream-400 text-walnut-600 hover:border-walnut-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-sans text-sm text-walnut-900 w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center border border-cream-400 text-walnut-600 hover:border-walnut-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="ml-auto font-sans text-xs text-walnut-400 underline hover:text-walnut-700 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-cream-300 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-walnut-600">Subtotal</span>
                <span className="font-sans text-lg font-medium text-walnut-900">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-walnut-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-xs py-4">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center font-sans text-xs text-walnut-500 underline hover:text-walnut-800 transition-colors py-1"
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

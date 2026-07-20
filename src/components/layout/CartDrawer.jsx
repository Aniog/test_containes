import React, { useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CartDrawer = () => {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeFromCart, cartTotal } = useCart();
  const containerRef = useRef(null);

  // Load images when drawer opens or items change
  useEffect(() => {
    if (isDrawerOpen && items.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isDrawerOpen, items]);

  return (
    <>
      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity backdrop-blur-sm"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div 
        ref={containerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="font-serif text-2xl uppercase tracking-widest">Your Cart</h2>
          <button 
            onClick={closeDrawer}
            className="text-muted hover:text-foreground transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <ShoppingBag size={48} className="text-muted" strokeWidth={1} />
              <p className="text-muted tracking-wide">Your cart is currently empty.</p>
              <button 
                onClick={closeDrawer}
                className="bg-foreground text-white px-8 py-3 tracking-widest uppercase text-sm hover:bg-accent transition-colors"
                style={{ cursor: 'pointer' }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4 group">
                  {/* Item Image */}
                  <div className="w-24 h-32 bg-surface-alt relative overflow-hidden flex-shrink-0">
                    <img
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={`cart-${item.id}-${item.tone}`}
                      data-strk-img={`[cart-desc-${item.id}] [cart-title-${item.id}] primary ${item.tone}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={closeDrawer}
                          id={`cart-title-${item.id}`}
                          className="font-serif uppercase tracking-widest text-sm hover:text-accent transition-colors pr-4"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.id, item.tone)}
                          className="text-muted hover:text-foreground p-1 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-muted text-sm">${item.price}</p>
                      <p className="text-muted text-xs capitalize mt-1 tracking-wider">{item.tone} Tone</p>
                      <span id={`cart-desc-${item.id}`} className="hidden">{item.desc || item.name}</span>
                    </div>

                    <div className="flex items-center border border-gray-200 w-fit">
                      <button 
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-surface-alt">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif uppercase tracking-widest">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-muted text-xs text-center mb-6 tracking-wide">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-foreground text-white py-4 tracking-widest uppercase text-sm hover:bg-accent transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
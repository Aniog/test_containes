import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      // Load images when cart opens
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => {
        document.body.style.overflow = '';
        window.cancelAnimationFrame(frameId);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isCartOpen, cartItems]); // Re-run if cart items change while open

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" ref={containerRef}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-velmora-text/20 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="relative z-10 w-full max-w-md bg-velmora-bg shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border/50">
          <h2 className="font-serif text-2xl text-velmora-text tracking-wide">YOUR CART</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-velmora-text/60 hover:text-velmora-text transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-70">
              <ShoppingBag className="w-12 h-12 text-velmora-accent" strokeWidth={1} />
              <p className="font-serif text-xl tracking-wide">Your cart is currently empty.</p>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2 border border-velmora-accent text-velmora-accent hover:bg-velmora-accent hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 shrink-0 bg-velmora-border/20 rounded overflow-hidden">
                    <img
                      data-strk-img-id={item.imgId || 'img-vivid-1'}
                      data-strk-img={item.mainImgTag || '[img-vivid-1]'}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link 
                          to={`/product/${item.id}`}
                          onClick={() => setIsCartOpen(false)}
                          id={`cart-item-title-${item.id}`}
                          className="font-serif uppercase tracking-widest text-sm hover:text-velmora-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-velmora-text/40 hover:text-velmora-text p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-velmora-text/60 mt-1">{item.variant}</p>
                      <p className="font-serif mt-2">${item.price}</p>
                    </div>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border border-velmora-border rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="p-1.5 text-velmora-text/60 hover:text-velmora-text"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="p-1.5 text-velmora-text/60 hover:text-velmora-text"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-velmora-bg border-t border-velmora-border/50">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif tracking-wider">SUBTOTAL</span>
              <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-text/60 mb-4 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-accent text-white py-4 uppercase tracking-widest text-sm hover:bg-velmora-accent-hover transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

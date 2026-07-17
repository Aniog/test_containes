import { useEffect, useRef } from 'react';
import { useCart } from '@/lib/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity, cartOpen, setCartOpen } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    // Scan for images when open OR when items change
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [cartOpen, cartItems]);

  return (
    <div className={cn(
      "fixed inset-0 z-50 overflow-hidden transition-all duration-300",
      cartOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
    )}>
      <div 
        className={cn(
          "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          cartOpen ? "opacity-100" : "opacity-0"
        )} 
        onClick={() => setCartOpen(false)} 
      />
      
      <div className={cn(
        "absolute inset-y-0 right-0 max-w-full flex transition-transform duration-500",
        cartOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="w-screen max-w-md bg-velmora-bg shadow-xl flex flex-col" ref={containerRef}>
          <div className="p-6 flex items-center justify-between border-b border-velmora-text/10">
            <h2 className="font-serif text-2xl uppercase tracking-widest">Shopping Bag</h2>
            <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-velmora-beige transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                {/* Hidden image for the crawler to discover and resolve the placeholder pattern */}
                <div className="hidden" aria-hidden="true">
                  <img 
                    data-strk-img-id="cart-empty-placeholder"
                    data-strk-img="minimal gold jewelry collection"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  />
                </div>
                <ShoppingBag className="w-12 h-12 text-velmora-muted" />
                <p className="text-velmora-muted italic">Your bag is currently empty.</p>
                <button 
                  onClick={() => setCartOpen(false)}
                  className="btn-primary"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="w-24 h-32 bg-velmora-beige relative group">
                    <img 
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={item.images[0].dataStrkImg}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link 
                          to={`/product/${item.id}`} 
                          className="font-serif uppercase tracking-wider text-sm hover:text-velmora-accent transition-colors"
                          onClick={() => setCartOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-velmora-muted mt-1">${item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-sm underline underline-offset-4 opacity-50 hover:opacity-100">
                        Remove
                      </button>
                    </div>

                    <div className="mt-auto flex items-center border border-velmora-text/10 w-fit">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:bg-velmora-beige"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:bg-velmora-beige"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-6 border-t border-velmora-text/10 space-y-4">
              <div className="flex justify-between items-center text-lg uppercase tracking-widest font-serif">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted italic">Shipping and taxes calculated at checkout.</p>
              <button className="w-full btn-primary py-4">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

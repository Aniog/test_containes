import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500",
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] transition-transform duration-500 transform",
        isCartOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-velmora-charcoal/5">
            <h2 className="text-xl uppercase tracking-widest font-serif">Your Bag</h2>
            <button onClick={() => setIsCartOpen(false)}>
              <X size={24} strokeWidth={1} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <p className="text-velmora-charcoal/60 uppercase tracking-widest text-sm">Your bag is empty</p>
                <Link 
                  to="/shop" 
                  className="btn-outline w-full"
                  onClick={() => setIsCartOpen(false)}
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-8">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex space-x-4">
                    <div className="w-24 h-32 bg-velmora-sand overflow-hidden shrink-0">
                       <img 
                          data-strk-img-id={`cart-img-${item.id}-${item.tone}`}
                          data-strk-img={`[cart-item-name-${item.id}-${item.tone}] jewelry gold`}
                          data-strk-img-ratio="2x3"
                          data-strk-img-width="200"
                          className="w-full h-full object-cover"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                          alt={item.name}
                       />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 id={`cart-item-name-${item.id}-${item.tone}`} className="text-sm font-serif uppercase tracking-widest">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id, item.tone)}
                            className="text-velmora-charcoal/40 hover:text-velmora-charcoal transition-colors ml-2"
                          >
                            <Trash2 size={16} strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-velmora-charcoal/40 mt-1">{item.tone}</p>
                        <p className="text-sm text-velmora-charcoal/60 mt-1">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3 mt-4">
                        <button 
                          className="p-1 border border-velmora-charcoal/10"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button 
                          className="p-1 border border-velmora-charcoal/10"
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
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
          {cart.length > 0 && (
            <div className="px-8 py-8 bg-velmora-sand/30 border-t border-velmora-charcoal/5 space-y-6">
              <div className="flex justify-between items-center uppercase tracking-widest text-sm font-serif">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-charcoal/60 text-center italic">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="btn-primary w-full uppercase tracking-widest text-sm font-serif">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

import React from 'react';
import { useCart } from '@/lib/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isOpen, setIsOpen, items, updateQuantity, removeItem, subtotal } = useCart();

  // Handle click outside to close
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-serif uppercase tracking-widest text-lg flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Your Cart
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 text-secondary hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close cart</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 border-b border-border">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-secondary opacity-80">
              <ShoppingBag className="w-12 h-12 mb-4 stroke-[1px]" />
              <p className="font-sans text-sm tracking-wide mb-6">Your cart is empty.</p>
              <Button onClick={() => setIsOpen(false)} variant="outline" className="uppercase tracking-widest text-xs h-10 px-8">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Item Image */}
                  <div className="w-20 aspect-[4/5] bg-muted rounded-sm border border-border overflow-hidden shrink-0">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E" 
                      data-strk-img-id={`cart-img-${item.id}`}
                      data-strk-img={item.images ? item.images[0] : item.image || item.image1} // Handle both fallback logic
                      data-strk-img-ratio="4x5"
                      className="object-cover w-full h-full"
                      alt={item.name}
                    />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-serif tracking-wide text-sm pr-4 line-clamp-2 leading-tight">
                        <Link to={`/product/${item.id}`} onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">
                          {item.name}
                        </Link>
                      </h3>
                      <button onClick={() => removeItem(item.id, item.tone)} className="text-secondary hover:text-destructive">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <p className="text-xs text-secondary mb-2 capitalize">{item.tone} Finish</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center border border-border rounded-sm h-8">
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="px-2 text-secondary hover:text-foreground h-full"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="px-2 text-secondary hover:text-foreground h-full"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-sans text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 bg-card">
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif uppercase tracking-widest text-sm text-secondary">Subtotal</span>
              <span className="font-sans text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-secondary mb-6 tracking-wide">Shipping & taxes calculated at checkout.</p>
            <Button className="w-full tracking-widest uppercase h-12 text-sm">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
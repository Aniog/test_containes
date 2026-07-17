import { useCart } from '../contexts/CartContext';
import { useEffect } from 'react';
import { ShoppingBag, X as XIcon, Minus as MinusIcon, Plus as PlusIcon } from 'lucide-react';

function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, cartTotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <ShoppingBag className="h-12 w-12 opacity-20" />
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="h-24 w-24 bg-muted flex-shrink-0 overflow-hidden relative">
                  {item.image ? (
                     <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                  ) : (
                    <div className="w-full h-full bg-secondary" />
                  )}
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-serif text-lg leading-tight uppercase tracking-wider">{item.name}</h3>
                      {item.variant && <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>}
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    >
                      <XIcon className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <MinusIcon className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <PlusIcon className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between items-center mb-6 text-lg">
              <span className="font-serif">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 hover:opacity-90 transition-opacity uppercase tracking-widest text-sm font-medium">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;

import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl uppercase tracking-widest">Your Cart</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X size={24} className="stroke-[1.5]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-6">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBagIcon className="w-10 h-10 text-muted-foreground stroke-[1]" />
              </div>
              <div>
                <p className="font-serif text-2xl mb-2">Your cart is empty</p>
                <p className="text-muted-foreground">Discover our latest demi-fine collections.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-primary text-primary-foreground uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                     {/* Abstract thumbnail for cart item */}
                     <div className="w-full h-full bg-secondary flex items-center justify-center text-secondary-foreground font-serif text-xl opacity-50">
                        {item.name.charAt(0)}
                     </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link 
                           to={`/product/${item.id}`} 
                           onClick={() => setIsOpen(false)}
                           className="font-serif text-lg leading-tight uppercase tracking-wider hover:text-primary transition-colors pr-4"
                           id={`product-${item.id}-name`}
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} className="stroke-[1.5]" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                      <p className="text-foreground mt-1">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-3 py-1 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg">Subtotal</span>
              <span className="font-serif text-2xl">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-4 bg-primary text-primary-foreground uppercase tracking-widest hover:bg-primary/90 transition-colors font-medium">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// Inline component for the empty cart bag icon
function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
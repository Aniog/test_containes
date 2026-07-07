import React from 'react';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/store/useCart';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const isEmpty = cartItems.length === 0;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border bg-background">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <SheetTitle className="font-serif uppercase tracking-widest text-lg">Your Cart</SheetTitle>
          <button onClick={onClose} className="text-muted-foreground hover:text-primary transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {isEmpty ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <p className="text-muted-foreground font-serif">Your cart is currently empty.</p>
              <Button asChild onClick={onClose} variant="outline" className="uppercase tracking-wider font-serif rounded-none border-primary hover:bg-primary hover:text-white transition-colors">
                <Link to="/collections/all">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 aspect-[3/4] bg-velmora-light flex-shrink-0">
                    <img 
                      src={`https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80`} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <Link to={`/products/${item.id}`} onClick={onClose} className="font-serif uppercase tracking-widest text-sm hover:text-velmora-gold transition-colors">
                          {item.name}
                        </Link>
                        <button onClick={() => removeFromCart(item.cartItemId)} className="text-muted-foreground hover:text-red-500 transition-colors">
                          <X size={14} />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        {item.tone}
                      </p>
                      <p className="text-sm">${item.price}</p>
                    </div>

                    <div className="flex items-center border border-border w-24 h-8 mt-2">
                      <button 
                        className="w-8 h-full flex items-center justify-center hover:bg-velmora-light transition-colors"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      >
                        <Minus size={12} />
                      </button>
                      <input 
                        type="number" 
                        className="w-8 h-full text-center bg-transparent border-none outline-none text-xs"
                        value={item.quantity}
                        readOnly
                      />
                      <button 
                        className="w-8 h-full flex items-center justify-center hover:bg-velmora-light transition-colors"
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {!isEmpty && (
          <div className="p-6 bg-velmora-light/30 border-t border-border space-y-4">
            <div className="flex justify-between font-serif text-lg">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center tracking-wide">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full uppercase tracking-wider font-serif py-6 rounded-none bg-primary hover:bg-velmora-gold transition-colors">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
import { ShoppingBag, X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0 border-none">
        
        <SheetHeader className="p-6 border-b border-border text-left relative bg-background">
          <SheetTitle className="font-heading text-2xl uppercase tracking-widest flex items-center gap-3">
            Your Cart <span className="text-sm text-muted-foreground normal-case bg-secondary px-2 py-0.5 rounded-full">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 bg-background">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30" strokeWidth={1} />
              <p className="text-muted-foreground text-lg">Your cart is currently empty.</p>
              <Button asChild onClick={() => setIsCartOpen(false)} className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-widest px-8">
                <Link to="/shop">Discover Pieces</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-8">
              {cart.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-32 shrink-0 bg-secondary overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <Link 
                        to={`/product/${item.id}`} 
                        className="font-heading text-lg hover:text-accent transition-colors uppercase tracking-wide line-clamp-1"
                        onClick={() => setIsCartOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground capitalize mb-2">{item.variant}</p>
                    <p className="font-medium text-sm mb-4">${item.price.toFixed(2)}</p>
                    
                    <div className="flex justify-between items-end mt-auto">
                      <div className="flex items-center border border-border mt-auto w-max h-8">
                        <button 
                          className="px-3 hover:bg-secondary h-full text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 flex justify-center text-xs font-medium">{item.quantity}</span>
                        <button 
                          className="px-3 hover:bg-secondary h-full text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6 font-medium text-lg uppercase tracking-wide">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full rounded-none h-14 bg-accent hover:bg-accent/90 text-accent-foreground text-sm uppercase tracking-widest">
              Secure Checkout
            </Button>
          </div>
        )}

      </SheetContent>
    </Sheet>
  );
}
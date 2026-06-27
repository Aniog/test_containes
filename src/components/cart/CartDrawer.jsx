import { useCartStore } from '../../store/useCart';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '../ui/sheet';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-serif text-2xl uppercase tracking-widest text-left">Your Cart</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            <p className="text-muted-foreground text-center font-medium">Your cart is empty.</p>
            <Button 
              onClick={closeCart} 
              asChild 
              className="w-full uppercase tracking-wider h-12"
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 flex flex-col gap-6 overflow-y-auto py-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedColor}`} className="flex gap-4 group">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-muted rounded-none overflow-hidden shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="font-serif text-sm sm:text-base uppercase tracking-wider">{item.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1 capitalize">{item.selectedColor}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.selectedColor)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-border">
                        <button 
                          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground"
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6 pb-2">
              <Separator className="mb-6" />
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium uppercase tracking-wider">Subtotal</span>
                <span className="text-xl font-serif">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full uppercase tracking-widest text-sm h-14" size="lg">
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;

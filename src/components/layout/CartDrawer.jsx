import { useCartStore } from '@/store/cartStore';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, cartTotal } = useCartStore();

  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-background flex flex-col p-0">
        <SheetHeader className="p-6 pb-4 border-b text-left">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl font-normal tracking-wide">Your Cart</SheetTitle>
          </div>
          <SheetDescription className="hidden">
            Review the items in your shopping cart.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-muted-foreground font-light">Your cart is currently empty.</p>
              <Button onClick={() => setIsOpen(false)} className="px-8 uppercase tracking-widest text-xs">
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.product.id}-${item.tone}`} className="flex gap-4">
                <div className="w-24 h-24 bg-secondary flex-shrink-0 relative overflow-hidden">
                  <img
                    alt={item.product.name}
                    data-strk-img-id={`${item.product.id}-cart`}
                    data-strk-img={`[cart-item-${item.product.id}-title] jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h4 id={`cart-item-${item.product.id}-title`} className="font-serif text-lg leading-tight uppercase tracking-wider">{item.product.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1 capitalize">{item.tone}</p>
                    </div>
                    <button 
                      onClick={() => removeItem(item.product.id, item.tone)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.tone, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.tone, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t bg-background/50 backdrop-blur">
            <div className="space-y-4">
              <div className="flex justify-between font-serif text-xl">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground font-light w-full text-center">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full uppercase tracking-widest py-6 text-xs">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
import { useCartStore } from '@/lib/store';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, getCartTotal } = useCartStore();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col pt-10" ref={containerRef}>
        <SheetHeader className="pb-6 border-b border-border">
          <SheetTitle className="font-serif text-2xl" id="cart-title">Your Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-6 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-muted-foreground font-medium">Your cart is currently empty.</p>
              <Button asChild onClick={closeCart} className="bg-brand hover:bg-brand-dark text-white rounded-none">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                return (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-24 w-20 bg-neutral-50 flex-shrink-0 relative overflow-hidden flex items-center justify-center text-xs text-muted-foreground border border-neutral-100">
                    {item.cartId === "bestseller-vivid-aura" && (
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img={`[cart-${item.id}-title]`}
                        data-strk-img-id="bestseller-vivid-aura"
                        data-strk-img-ratio="2x3"
                        alt={item.name}
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    )}
                    {item.cartId === "bestseller-majestic-flora" && (
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img={`[cart-${item.id}-title]`}
                        data-strk-img-id="bestseller-majestic-flora"
                        data-strk-img-ratio="2x3"
                        alt={item.name}
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    )}
                    {item.cartId === "bestseller-golden-sphere" && (
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img={`[cart-${item.id}-title]`}
                        data-strk-img-id="bestseller-golden-sphere"
                        data-strk-img-ratio="2x3"
                        alt={item.name}
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    )}
                    {item.cartId === "bestseller-amber-lace" && (
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img={`[cart-${item.id}-title]`}
                        data-strk-img-id="bestseller-amber-lace"
                        data-strk-img-ratio="2x3"
                        alt={item.name}
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    )}
                    {item.cartId === "bestseller-royal-heirloom" && (
                      <img 
                        src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                        data-strk-img={`[cart-${item.id}-title]`}
                        data-strk-img-id="bestseller-royal-heirloom"
                        data-strk-img-ratio="2x3"
                        alt={item.name}
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={closeCart}
                          className="font-serif text-lg leading-tight hover:text-brand transition-colors text-brand-dark"
                          id={`cart-${item.id}-title`}
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-muted-foreground hover:text-foreground p-1 -mr-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.tone}</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-neutral-50 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs px-2 w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-neutral-50 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <SheetFooter className="border-t border-border pt-6 flex-col sm:flex-col gap-4">
            <div className="flex justify-between w-full font-medium pb-4 border-b border-border/50">
              <span className="font-serif text-lg">Subtotal</span>
              <span className="text-lg">${getCartTotal()}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-2">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full bg-brand hover:bg-brand-dark text-white h-12 rounded-none text-md">
              Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
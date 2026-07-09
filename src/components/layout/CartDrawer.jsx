import React, { useRef, useEffect } from 'react';
import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { products } from '../../data/products';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, cartTotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && drawerRef.current) {
      const timer = setTimeout(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen, items]);

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent ref={drawerRef} className="w-full sm:max-w-md flex flex-col p-0 border-l border-border rounded-l-none outline-none">
        <SheetHeader className="px-6 py-4 border-b border-border flex flex-row items-center justify-between">
          <SheetTitle className="font-serif font-normal text-2xl tracking-wide">Your Cart</SheetTitle>
          <button onClick={() => setIsCartOpen(false)} className="opacity-70 hover:opacity-100 transition-opacity">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
            <p className="text-lg font-serif mb-2">Your cart is empty.</p>
            <p className="text-sm text-muted-foreground mb-6">Discover our latest demi-fine arrivals.</p>
            <Button 
              variant="outline" 
              className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest px-8"
              onClick={() => setIsCartOpen(false)}
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {products.map(product => {
                  const cartItemsForProduct = items.filter(i => i.id === product.id);
                  return cartItemsForProduct.map(item => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="w-24 h-24 bg-muted flex-shrink-0 relative overflow-hidden">
                        <img
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          data-strk-img-id={`cart-thumb-${product.id}`}
                          data-strk-img={`[cart-item-name-${product.id}] isolated close up`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="200"
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <Link 
                              to={`/product/${item.id}`} 
                              onClick={() => setIsCartOpen(false)}
                              className="font-serif uppercase tracking-wider text-sm hover:text-primary transition-colors block mb-1"
                              id={`cart-item-name-${product.id}`}
                            >
                              {item.name}
                            </Link>
                            {item.variant && (
                              <p className="text-xs text-muted-foreground">Material: {item.variant}</p>
                            )}
                          </div>
                          <p className="text-sm">${item.price}</p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-border">
                            <button 
                              className="p-1 hover:bg-muted"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                            <button 
                              className="p-1 hover:bg-muted"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ));
                })}
              </div>
            </ScrollArea>
            
            <div className="p-6 bg-muted/30 border-t border-border mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="font-serif text-lg">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest h-12">
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

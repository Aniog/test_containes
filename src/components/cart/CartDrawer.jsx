import React, { useRef, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen && items.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        if (containerRef.current) {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-6">
        <div ref={containerRef} className="flex flex-col h-full">
          <SheetHeader className="mb-6">
            <SheetTitle className="font-serif text-2xl uppercase tracking-widest text-left">Your Cart</SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
                <ShoppingBag className="w-12 h-12 stroke-[1]" />
                <p>Your cart is empty.</p>
                <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-secondary flex-shrink-0 relative overflow-hidden">
                      <img
                        data-strk-img-id={item.product.imgId}
                        data-strk-img={`[cart-item-${item.product.id}-title] [cart-item-category]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1 justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 id={`cart-item-${item.product.id}-title`} className="font-serif uppercase tracking-wider text-sm">{item.product.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">Tone: {item.variant}</p>
                        </div>
                        <button 
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 text-muted-foreground hover:text-foreground"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 text-muted-foreground hover:text-foreground"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${item.product.price * item.quantity}</p>
                      </div>
                      <div className="hidden" id="cart-item-category">Jewelry</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-border pt-6 mt-6 space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
              <Button className="w-full h-12 text-sm tracking-widest uppercase">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

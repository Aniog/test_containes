import { useEffect, useRef } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useStore } from "@/store/useStore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { STRK_PLACEHOLDER } from "@/lib/utils";

const CartDrawer = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useStore();
  const cartRef = useRef(null);

  useEffect(() => {
    if (isCartOpen && cart.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, cartRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isCartOpen, cart]);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetContent ref={cartRef} className="w-full sm:max-w-md flex flex-col p-0 border-l border-border bg-background">
        <SheetHeader className="p-6 border-b border-border bg-background z-10 relative text-left">
          <SheetTitle className="font-serif text-2xl uppercase tracking-widest font-normal">
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
            <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
            <p className="font-serif text-xl mb-2">Your cart is empty</p>
            <p className="text-sm">Discover our latest additions.</p>
            <Button 
              className="mt-8 bg-foreground text-background hover:bg-foreground/90 uppercase tracking-widest text-xs px-8 py-6 rounded-none font-serif"
              onClick={toggleCart}
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-6">
              <div className="flex flex-col gap-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0 relative">
                      {item.images && item.images[0] && (
                        <img
                          src={STRK_PLACEHOLDER}
                          data-strk-img-id={item.images[0].id}
                          data-strk-img={item.images[0].query}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="200"
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 className="font-serif text-sm font-medium uppercase tracking-wide">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1 capitalize">
                            {item.tone}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.tone)}
                          className="text-muted-foreground hover:text-foreground transition-colors p-1 -mr-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-border">
                          <button
                            className="p-1 px-2 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => updateQuantity(item.id, item.tone, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-6 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1 px-2 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-serif font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-6 border-t border-border bg-background grid gap-4 z-10 relative">
              <div className="flex justify-between items-center font-serif text-lg">
                <span className="uppercase tracking-widest text-sm">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground text-center mb-2">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90 uppercase tracking-widest text-sm py-6 rounded-none font-serif">
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
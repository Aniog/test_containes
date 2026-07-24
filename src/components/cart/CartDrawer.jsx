import { ShoppingBag, X, Minus, Plus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "./CartContext";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      // Need a small timeout to allow the sheet content to render in DOM
      // Better approach using requestAnimationFrame
      const frameId = window.requestAnimationFrame(() => {
        try {
           ImageHelper.loadImages({}, drawerRef.current);
        } catch(e) {
           console.log("ImageHelper init failed", e);
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isOpen, items]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full bg-background border-l border-border p-0" ref={drawerRef}>
        <SheetHeader className="p-6 border-b border-border flex flex-row items-center justify-between">
          <SheetTitle className="font-serif text-2xl font-light">Your Bag ({items.length})</SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-muted-foreground">
              <ShoppingBag className="h-12 w-12 stroke-1" />
              <p className="font-serif text-xl">Your bag is empty.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6" id="cart">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="h-24 w-24 rounded-none overflow-hidden bg-secondary flex-shrink-0 relative">
                        <img
                          src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                          alt={item.name}
                          className="object-cover w-full h-full text-[10px]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif uppercase text-sm tracking-wide text-foreground">
                              {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 capitalize">
                              {item.variant}
                            </p>
                          </div>
                          <p className="font-medium text-foreground">${item.price}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-border rounded-none">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none text-muted-foreground hover:text-foreground hover:bg-secondary"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none text-muted-foreground hover:text-foreground hover:bg-secondary"
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-destructive text-xs transition-colors"
                            onClick={() => removeItem(item.id, item.variant)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-4 text-lg">
              <span className="font-serif">Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">
              Shipping and taxes calculated at checkout.
            </p>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-none text-sm tracking-widest uppercase transition-colors">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

import { useCart } from "@/lib/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cartItems, updateQuantity, removeFromCart, totalAmount } = useCart();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-heading tracking-widest uppercase text-xl">Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-muted-foreground text-sm">Your cart is currently empty.</p>
              <Button onClick={() => setCartOpen(false)} asChild variant="outline">
                <Link to="/collections">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-muted flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-heading uppercase text-sm tracking-wide">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id, item.variant)} className="text-muted-foreground hover:text-foreground">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 capitalize">{item.variant}</p>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border rounded-md">
                        <button onClick={() => updateQuantity(item.id, item.variant, -1)} className="px-2 py-1 hover:bg-muted transition-colors">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, 1)} className="px-2 py-1 hover:bg-muted transition-colors">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="pt-6 border-t mt-auto">
            <div className="flex justify-between items-center mb-4 text-sm font-medium">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Shipping & taxes calculated at checkout.</p>
            <Button className="w-full uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
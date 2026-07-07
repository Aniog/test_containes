import { Link } from "react-router-dom";
import { Search, ShoppingBag, X, Minus, Plus } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function Navigation() {
  const { items, isOpen, openCart, closeCart, removeItem, updateQuantity } = useCartStore();
  
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif tracking-widest text-foreground">
          VELMORA
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link to="/collections" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
          <Link to="/collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</Link>
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Journal</Link>
        </nav>
        <div className="flex gap-4 items-center">
          <button className="p-2 hover:text-primary transition-colors bg-transparent border-none">
            <Search className="w-5 h-5" />
          </button>
          
          <Sheet open={isOpen} onOpenChange={(open) => open ? openCart() : closeCart()}>
            <SheetTrigger asChild>
              <button className="p-2 hover:text-primary transition-colors bg-transparent border-none relative">
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl font-normal">Your Cart</SheetTitle>
              </SheetHeader>
              
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground opacity-50" />
                  <div>
                    <h3 className="font-serif text-lg">Your cart is empty</h3>
                    <p className="text-sm text-muted-foreground mt-1">Discover something beautiful today.</p>
                  </div>
                  <Button onClick={closeCart} className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 px-8 uppercase tracking-widest text-xs">
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-border/50 pb-4">
                      <div className="w-24 h-24 bg-secondary/30 rounded flex-shrink-0 relative mb-4 xs:mb-0">
                         <img 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            data-strk-img={`[cart-item-${item.id}]`}
                            data-strk-img-id={`cart-thumb-${item.id}`}
                            data-strk-img-ratio="1x1"
                            data-strk-img-width="200"
                            alt={item.name}
                            className="w-full h-full object-cover"
                         />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 id={`cart-item-${item.id}`} className="font-serif uppercase tracking-wider text-sm">{item.name}</h4>
                            <p className="text-xs text-muted-foreground mt-1">Gold</p>
                          </div>
                          <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-foreground">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-end mt-4">
                          <div className="flex items-center border border-border">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-secondary transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-secondary transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-medium">${item.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {items.length > 0 && (
                <div className="border-t border-border pt-6 mt-auto">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Subtotal</span>
                    <span className="text-lg font-serif">${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 text-center">Shipping & taxes calculated at checkout</p>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-14 uppercase tracking-[0.2em] font-medium transition-all group relative overflow-hidden">
                    <span className="relative z-10">Checkout</span>
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
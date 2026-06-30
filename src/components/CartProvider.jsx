import React, { createContext, useContext, useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("velmora-cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("velmora-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product, quantity = 1, variant = "Gold") => {
    setItems((currentItems) => {
      const existing = currentItems.find(
        (item) => item.id === product.id && item.variant === variant
      );
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...currentItems, { ...product, quantity, variant }];
    });
    setIsOpen(true);
    toast.success("Added to cart", {
      description: `${product.name} - ${variant}`,
    });
  };

  const removeItem = (id, variant) => {
    setItems((current) => current.filter((item) => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id, variant, delta) => {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === id && item.variant === variant) {
          const newQ = item.quantity + delta;
          return { ...item, quantity: Math.max(1, newQ) };
        }
        return item;
      })
    );
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, itemCount, isOpen, setIsOpen }}>
      {children}
      <CartDrawer isOpen={isOpen} setIsOpen={setIsOpen} items={items} updateQuantity={updateQuantity} removeItem={removeItem} subtotal={subtotal} />
    </CartContext.Provider>
  );
};

const CartDrawer = ({ isOpen, setIsOpen, items, updateQuantity, removeItem, subtotal }) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="text-xl tracking-widest font-serif font-medium flex items-center justify-between">
            YOUR CART
          </SheetTitle>
          <SheetDescription className="sr-only">
            Shopping cart drawer showing selected items.
          </SheetDescription>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground space-y-4">
              <ShoppingBag className="w-12 h-12 stroke-[1]" />
              <p>Your cart is empty</p>
              <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <div className="w-20 h-24 bg-secondary overflow-hidden shrink-0 border border-border">
                  <img
                    alt={item.name}
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={`collection-${item.id}-title`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif tracking-widest text-sm uppercase leading-tight pr-4">
                        {item.name}
                      </h3>
                      <button onClick={() => removeItem(item.id, item.variant)} className="text-muted-foreground hover:text-foreground">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                    <p className="text-sm mt-1">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border border-border rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, -1)}
                        className="p-1 hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, 1)}
                        className="p-1 hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-background">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm">Subtotal</span>
              <span className="text-lg font-medium">${subtotal}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full text-md h-12 font-medium tracking-wide">
              CHECKOUT
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
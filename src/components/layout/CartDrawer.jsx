import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from "@/lib/CartContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-primary/40 backdrop-blur-sm z-[60] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full md:w-[450px] bg-secondary z-[70] shadow-2xl transition-transform duration-500 transform flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-hairline">
          <h2 className="text-xl font-serif tracking-widest uppercase">Your Bag ({cartCount})</h2>
          <button onClick={onClose} className="hover:opacity-60 transition-opacity">
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-50">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-sans uppercase tracking-widest text-sm">Your bag is empty</p>
              <Button variant="outline" size="sm" onClick={onClose}>Start Shopping</Button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                  <div className="w-24 h-32 bg-stone-100 relative overflow-hidden flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-item-title-${item.id}] [cart-item-desc-${item.id}]`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                    {/* Hidden text for image search */}
                    <span id={`cart-item-title-${item.id}`} className="hidden">{item.name}</span>
                    <span id={`cart-item-desc-${item.id}`} className="hidden">{item.description}</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <h3 className="uppercase tracking-widest text-sm font-semibold">{item.name}</h3>
                        <p className="text-sm">${item.price}</p>
                      </div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.variant}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, -1)}
                          className="p-1 px-2 hover:bg-stone-50 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, 1)}
                          className="p-1 px-2 hover:bg-stone-50 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-[10px] uppercase tracking-widest underline underline-offset-4 decoration-hairline hover:text-accent transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-8 py-8 border-t border-hairline space-y-6">
            <div className="flex justify-between items-center">
              <span className="uppercase tracking-widest text-xs font-semibold">Subtotal</span>
              <span className="text-lg font-serif tracking-widest">${cartTotal}</span>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
              Shipping & taxes calculated at checkout
            </p>
            <Button size="full" className="w-full">Checkout</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isCartOpen, cart]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-500",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        ref={containerRef}
        className={cn(
          "fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-8 border-b flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-widest font-sans font-bold">Your Bag ({cart.length})</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 -mr-2">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground opacity-30" />
              <p className="text-muted-foreground font-serif italic">Your bag is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-xs uppercase tracking-widest border-b border-accent pb-1"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-6">
                <div className="w-24 h-32 bg-secondary relative overflow-hidden flex-shrink-0">
                  <img
                    data-strk-img-id={`cart-item-${item.id}`}
                    data-strk-img={item.images.query}
                    data-strk-img-ratio="2x3"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xs font-sans font-bold uppercase tracking-widest leading-tight">{item.name}</h3>
                      <p className="text-sm font-sans font-medium">${item.price}</p>
                    </div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Tone: {item.variant}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-gray-100 py-1 px-2">
                      <button onClick={() => updateQuantity(item.id, item.variant, -1)} className="p-1">
                        <Minus size={12} />
                      </button>
                      <span className="text-xs px-3 font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.variant, 1)} className="p-1">
                        <Plus size={12} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-gray-100 space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Subtotal</span>
              <span className="text-xl font-serif italic">${cartTotal}</span>
            </div>
            <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest tracking-widest">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-primary text-white py-4 text-xs uppercase tracking-widest hover:bg-black transition-colors">
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

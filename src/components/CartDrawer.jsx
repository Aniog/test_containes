import { useRef, useEffect } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const cartImageIds = {
  "vivid-aura-jewels": "cart-thumb-vivid-aura-jewels",
  "majestic-flora-nectar": "cart-thumb-majestic-flora-nectar",
  "golden-sphere-huggies": "cart-thumb-golden-sphere-huggies",
  "amber-lace-earrings": "cart-thumb-amber-lace-earrings",
  "royal-heirloom-set": "cart-thumb-royal-heirloom-set",
};

const CartDrawer = () => {
  const { items, isOpen, closeCart, subtotal, count, updateQuantity, removeItem } = useCart();
  const listRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !listRef.current) return;
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, listRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [isOpen, items.length]);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent side="right" className="flex w-full flex-col">
        <SheetHeader className="pb-4">
          <SheetTitle className="font-serif text-xl uppercase tracking-[0.18em]">
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="h-10 w-10 text-stone-300" />
            <p className="font-serif text-lg text-stone-900">Your cart is empty</p>
            <p className="text-sm text-stone-500">Discover pieces crafted to be treasured.</p>
            <SheetClose asChild>
              <Button className="mt-2">Continue Shopping</Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div ref={listRef} className="flex-1 overflow-y-auto pr-1">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-stone-100">
                      <img
                        alt={item.name}
                        src={PLACEHOLDER}
                        data-strk-img-id={cartImageIds[item.id] ?? `cart-thumb-${item.id}`}
                        data-strk-img={`[product-title-${item.id}] velmora fine jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm font-medium uppercase tracking-[0.18em] text-stone-900">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-xs capitalize text-stone-500">
                          {item.variant} tone
                        </p>
                        <p className="mt-1 font-serif text-stone-900">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-stone-200">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-stone-500 hover:text-stone-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-sm text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-stone-500 hover:text-stone-900"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-stone-400 hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 space-y-4 border-t border-stone-200 pt-4">
              <div className="flex items-center justify-between text-stone-900">
                <span className="text-sm uppercase tracking-widest">Subtotal</span>
                <span className="font-serif text-xl">${subtotal}</span>
              </div>
              <p className="text-xs text-stone-500">
                Shipping & taxes calculated at checkout.
              </p>
              <Button className="w-full">Checkout</Button>
              <SheetClose asChild>
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </SheetClose>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;

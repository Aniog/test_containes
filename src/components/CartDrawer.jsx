import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/Sheet';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import StrkImage from '@/components/ui/StrkImage';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent side="right" className="flex flex-col bg-ivory">
        <SheetHeader className="border-b border-taupe/20 pb-4">
          <SheetTitle className="flex items-center gap-2 font-serif text-xl uppercase tracking-widest">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag className="mb-4 h-12 w-12 text-taupe" strokeWidth={1} />
            <p className="font-serif text-lg text-charcoal">Your cart is empty</p>
            <p className="mt-1 text-sm text-warm-gray">
              Discover something treasured.
            </p>
            <Button className="mt-6" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden bg-cream">
                      <StrkImage
                        id={`cart-${item.imageId}`}
                        query="[velmora-product] [gold jewelry]"
                        ratio="1x1"
                        width={160}
                        alt={item.name}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm font-medium uppercase tracking-wider text-charcoal">
                          {item.name}
                        </p>
                        <p className="text-xs capitalize text-warm-gray">
                          {item.variant} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-taupe/30">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:bg-cream"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:bg-cream"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-warm-gray hover:text-red-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-taupe/20 pt-5">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-warm-gray">Subtotal</span>
                <span className="font-medium text-charcoal">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warm-gray mb-5">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs uppercase tracking-widest text-warm-gray hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={closeCart}>
      <SheetContent side="right" className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl text-[#1c1917]">Your Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex-1">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <ShoppingBag className="mb-4 h-10 w-10 text-[#8a827a]" />
              <p className="font-serif text-xl text-[#1c1917]">Your cart is empty</p>
              <p className="mt-2 text-sm text-[#5c5650]">Discover our demi-fine collection and find something you love.</p>
              <Button className="mt-6" onClick={closeCart} asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-[#f1efe9]">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-serif text-sm uppercase tracking-wide-custom text-[#1c1917]">{item.name}</p>
                      <p className="mt-1 text-xs text-[#5c5650]">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e7e3dc] text-[#5c5650] hover:text-[#1c1917]"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium text-[#1c1917]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-[#e7e3dc] text-[#5c5650] hover:text-[#1c1917]"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm font-medium text-[#1c1917]">${(item.price * item.quantity).toFixed(2)}</p>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-[#8a827a] hover:text-[#1c1917]"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="mt-8 border-t border-[#e7e3dc] pt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#5c5650]">Subtotal</span>
              <span className="font-serif text-lg text-[#1c1917]">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-[#8a827a]">Shipping and taxes calculated at checkout.</p>
            <Button className="mt-4 w-full">Checkout</Button>
            <Button variant="outline" className="mt-2 w-full" onClick={closeCart} asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;

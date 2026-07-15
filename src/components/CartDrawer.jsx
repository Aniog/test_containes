import { useCart } from "@/context/CartContext"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="flex flex-col w-full sm:max-w-md">
        <SheetHeader className="border-b border-[#E2D9CF] pb-4">
          <SheetTitle className="font-serif text-xl tracking-wide uppercase">Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <ShoppingBag className="w-12 h-12 text-[#C9A96E]/40 mb-4" />
            <p className="text-[#5C534A] text-sm">Your cart is empty</p>
            <Button
              className="mt-6 w-full bg-[#C9A96E] hover:bg-[#b8975e] text-white uppercase tracking-widest text-xs"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E2D9CF]/30 rounded-md flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-[#8A7E72] uppercase tracking-wider text-center px-1">
                      {item.displayName}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-serif uppercase tracking-wider text-[#1C1C1C]">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#8A7E72] mt-0.5 capitalize">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-[#8A7E72] hover:text-[#1C1C1C] transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E2D9CF] rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-[#E2D9CF]/30 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-[#E2D9CF]/30 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-[#1C1C1C]">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E2D9CF] pt-4 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#5C534A]">Subtotal</span>
                <span className="font-medium text-[#1C1C1C]">${subtotal}</span>
              </div>
              <p className="text-xs text-[#8A7E72]">Shipping & taxes calculated at checkout.</p>
              <Button className="w-full bg-[#C9A96E] hover:bg-[#b8975e] text-white uppercase tracking-widest text-xs h-12">
                Checkout
              </Button>
              <Button
                variant="ghost"
                className="w-full text-[#5C534A] uppercase tracking-widest text-xs h-10"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

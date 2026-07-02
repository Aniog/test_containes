import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Sheet } from "./Sheet"
import { Button } from "./Button"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/data/products"

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    count,
  } = useCart()

  return (
    <Sheet isOpen={isOpen} onClose={closeCart} title="Your Cart" side="right">
      <div className="flex flex-col h-full">
        <div className="flex-1 px-6 py-4 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-velmora-stone" />
              <p className="font-serif text-xl text-velmora-espresso">
                Your cart is empty
              </p>
              <p className="text-sm text-velmora-mocha max-w-[220px]">
                Discover pieces crafted to be treasured.
              </p>
              <Button variant="outline" size="sm" onClick={closeCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-sand flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base uppercase tracking-widest text-velmora-espresso truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-velmora-mocha capitalize mt-0.5">
                      Tone: {item.tone}
                    </p>
                    <p className="text-sm text-velmora-espresso mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-stone/60">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity - 1)
                          }
                          className="p-1.5 text-velmora-mocha hover:text-velmora-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm text-velmora-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity + 1)
                          }
                          className="p-1.5 text-velmora-mocha hover:text-velmora-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.tone)}
                        className="p-2 text-velmora-mocha hover:text-red-700 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-stone/50 px-6 py-6 space-y-4 bg-velmora-sand/30">
            <div className="flex items-center justify-between text-velmora-espresso">
              <span className="font-sans text-sm">Subtotal ({count} items)</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-velmora-mocha">
              Shipping and taxes calculated at checkout.
            </p>
            <Button size="xl">Checkout</Button>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm text-velmora-mocha hover:text-velmora-espresso transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </Sheet>
  )
}

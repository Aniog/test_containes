import { Minus, Plus, Trash2 } from 'lucide-react';
import { Sheet } from '@/components/ui/Sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, count } =
    useCart();

  return (
    <Sheet open={isOpen} onClose={() => setIsOpen(false)} title="Your Bag">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="font-serif text-2xl text-velmora-ink mb-2">Your bag is empty</p>
          <p className="text-sm text-velmora-taupe mb-8">
            Discover something beautiful to treasure.
          </p>
          <Button onClick={() => setIsOpen(false)}>Continue Shopping</Button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex-1 px-6 py-6 space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                <div className="w-20 h-24 bg-velmora-cream flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-base text-velmora-ink truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-velmora-stone mt-1">
                    {item.tone} Tone
                  </p>
                  <p className="text-sm text-velmora-ink mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.tone, item.quantity - 1)
                      }
                      className="w-7 h-7 border border-velmora-border flex items-center justify-center text-velmora-taupe hover:border-velmora-ink hover:text-velmora-ink transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.tone, item.quantity + 1)
                      }
                      className="w-7 h-7 border border-velmora-border flex items-center justify-center text-velmora-taupe hover:border-velmora-ink hover:text-velmora-ink transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id, item.tone)}
                      className="ml-auto text-velmora-stone hover:text-red-600 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-velmora-border px-6 py-6 bg-velmora-cream">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-lg text-velmora-ink">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-stone mb-6">
              Shipping & taxes calculated at checkout.
            </p>
            <Button className="w-full mb-3">Checkout</Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs uppercase tracking-widest text-velmora-taupe hover:text-velmora-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </Sheet>
  );
}

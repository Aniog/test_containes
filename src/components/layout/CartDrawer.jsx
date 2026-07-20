import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetBody,
  SheetFooter,
} from '@/components/ui/Sheet';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalCount,
  } = useCart();

  return (
    <Sheet
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="w-full max-w-md"
    >
      <SheetHeader onClose={() => setIsOpen(false)}>
        <SheetTitle>Your Cart ({totalCount})</SheetTitle>
      </SheetHeader>

      <SheetBody>
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="w-12 h-12 text-hairline mb-4" />
            <p className="font-serif text-xl text-foreground mb-2">Your cart is empty</p>
            <p className="text-sm text-muted mb-6">Discover something beautiful today.</p>
            <Button onClick={() => setIsOpen(false)} asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                {/* Thumbnail fallback tile */}
                <div
                  className="w-20 h-24 flex-shrink-0 overflow-hidden bg-cream flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-serif text-2xl text-accent">
                    {item.product.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        to={`/products/${item.product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="product-name text-sm text-foreground line-clamp-1 hover:text-accent transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-muted mt-1">Tone: {item.variant}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id, item.variant)}
                      className="text-muted hover:text-accent transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-hairline">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.variant, item.quantity - 1)
                        }
                        className="p-2 hover:bg-cream transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.variant, item.quantity + 1)
                        }
                        className="p-2 hover:bg-cream transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </SheetBody>

      {items.length > 0 && (
        <SheetFooter>
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-between text-foreground">
              <span className="font-sans text-sm uppercase tracking-extra-wide">Subtotal</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted">Shipping & taxes calculated at checkout.</p>
            <Button fullWidth onClick={() => setIsOpen(false)}>
              Checkout
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs uppercase tracking-extra-wide text-muted hover:text-foreground transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </SheetFooter>
      )}
    </Sheet>
  );
}

import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import strkImgConfig from '@/strk-img-config.json';

const FALLBACK_SRC =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function getImageUrl(imageId) {
  const entry = strkImgConfig[imageId];
  return entry?.results?.[0]?.url || FALLBACK_SRC;
}

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, totalPrice } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col bg-paper sm:max-w-md">
        <SheetHeader className="space-y-2 pb-4">
          <SheetTitle className="font-cormorant text-xl font-bold uppercase tracking-[0.2em] text-espresso">
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag className="mb-4 h-12 w-12 text-hairline" />
            <p className="font-playfair text-xl text-espresso">Your cart is empty</p>
            <p className="mt-2 max-w-xs text-sm text-taupe">
              Discover pieces crafted to be treasured.
            </p>
            <Button
              className="mt-6 rounded-none bg-espresso px-8 text-xs uppercase tracking-wider text-white hover:bg-gold"
              onClick={() => setIsOpen(false)}
              asChild
            >
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <Link
                      to={`/products/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-sand/40"
                    >
                      <img
                        alt={item.product.name}
                        src={getImageUrl(item.product.imageIds.primary)}
                        className="h-full w-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/products/${item.product.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="font-cormorant text-sm font-semibold uppercase tracking-[0.12em] text-espresso hover:text-gold"
                          >
                            {item.product.name}
                          </Link>
                          <button
                            aria-label="Remove item"
                            onClick={() => removeItem(item.id)}
                            className="text-taupe hover:text-espresso"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-1 text-xs capitalize text-taupe">
                          {item.tone} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-hairline">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 text-espresso hover:bg-sand"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm text-espresso">
                            {item.quantity}
                          </span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-espresso hover:bg-sand"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-espresso">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline bg-paper pt-6">
              <div className="mb-4 flex items-center justify-between text-espresso">
                <span className="font-sans text-sm uppercase tracking-wider">Subtotal</span>
                <span className="font-sans text-lg font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <p className="mb-4 text-xs text-taupe">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="h-12 w-full rounded-none bg-gold font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-gold-hover">
                Checkout
              </Button>
              <Button
                variant="ghost"
                className="mt-3 h-10 w-full font-sans text-xs uppercase tracking-wider text-espresso hover:bg-sand"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

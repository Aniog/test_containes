import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Sheet, SheetHeader, SheetBody } from '@/components/ui/Sheet';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { StrkImg } from '@/components/ui/StrkImg';

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, updateQuantity, removeItem } = useCart();

  return (
    <Sheet open={isOpen} onClose={closeCart}>
      <SheetHeader onClose={closeCart}>
        <h2 className="font-serif text-xl uppercase tracking-widest text-velmora-base">
          Your Cart
        </h2>
      </SheetHeader>

      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
          <ShoppingBag className="mb-4 h-12 w-12 text-velmora-warm-gray" />
          <p className="font-serif text-2xl text-velmora-base">Your cart is empty</p>
          <p className="mt-2 text-sm text-velmora-taupe">
            Discover pieces crafted to be treasured.
          </p>
          <Button onClick={closeCart} className="mt-8" asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <>
          <SheetBody className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.cartItemId} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-cream-dark">
                    <StrkImg
                      id={`cart-${item.cartItemId}`}
                      query={`[cart-product-${item.productId}-name] gold jewelry`}
                      ratio="3x4"
                      width={200}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                    <span id={`cart-product-${item.productId}-name`} className="sr-only">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        to={`/products/${item.productId}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-widest text-velmora-base hover:text-velmora-gold"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-velmora-taupe">
                        {item.variantLabel} tone
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 items-center border border-velmora-base/15">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="flex h-full w-7 items-center justify-center text-velmora-taupe hover:bg-velmora-cream-dark"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="flex h-full w-7 items-center justify-center text-xs font-medium">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="flex h-full w-7 items-center justify-center text-velmora-taupe hover:bg-velmora-cream-dark"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-velmora-base">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.cartItemId)}
                    className="self-start p-1 text-velmora-taupe transition-colors hover:text-red-600"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </SheetBody>

          <div className="border-t border-velmora-base/10 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-sans text-sm uppercase tracking-widest text-velmora-taupe">
                Subtotal
              </span>
              <span className="font-serif text-xl text-velmora-base">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-5 text-xs text-velmora-taupe">
              Shipping and taxes calculated at checkout.
            </p>
            <Button size="full">Checkout</Button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-4 w-full text-center text-xs uppercase tracking-widest text-velmora-taupe transition-colors hover:text-velmora-base"
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </Sheet>
  );
}

import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Drawer } from '@/components/ui/Drawer';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { getImageSrc } from '@/lib/images';
import { formatPrice } from '@/data/products';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, count } = useCart();

  return (
    <Drawer isOpen={isOpen} onClose={closeCart} title="Your Cart" side="right">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <ShoppingBag size={48} className="text-sand mb-4" />
          <p className="font-serif text-xl text-ink mb-2">Your cart is empty</p>
          <p className="text-sm text-taupe mb-6">Discover pieces crafted to be treasured.</p>
          <Button variant="primary" size="md" onClick={closeCart} asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                <Link
                  to={`/products/${item.id}`}
                  onClick={closeCart}
                  className="w-20 h-24 bg-sand flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={getImageSrc(item.imgId)}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/products/${item.id}`}
                    id={item.titleId}
                    onClick={closeCart}
                    className="font-serif text-base uppercase tracking-brand text-ink hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p id={item.descId} className="text-xs text-taupe font-sans mt-0.5 capitalize">{item.variant} tone</p>
                  <p className="text-sm font-sans text-ink mt-1">{formatPrice(item.price)}</p>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-sand">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1.5 hover:bg-sand text-ink"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-sans text-ink">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1.5 hover:bg-sand text-ink"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-taupe hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-sand p-6 space-y-4 bg-cream">
            <div className="flex items-center justify-between text-ink">
              <span className="font-sans text-sm">Subtotal ({count} {count === 1 ? 'item' : 'items'})</span>
              <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-taupe font-sans">Shipping and taxes calculated at checkout.</p>
            <Button variant="primary" size="md" className="w-full">
              Checkout
            </Button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-flex items-center justify-center w-full px-5 py-2 text-xs uppercase tracking-brand font-sans font-medium border border-ink text-ink bg-transparent hover:bg-ink hover:text-cream transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </Drawer>
  );
}

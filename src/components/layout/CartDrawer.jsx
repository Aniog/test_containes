import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import ProductImage from '@/components/ui/ProductImage';

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-base/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[70] shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        inert={isOpen ? undefined : ''}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
            <h2 className="font-serif text-2xl text-base">Your Cart</h2>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="p-2 -mr-2 hover:text-gold transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-linen mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-base mb-2">Your cart is empty</p>
              <p className="text-sm text-muted mb-6">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block bg-base text-ivory px-8 py-3 text-xs uppercase tracking-[0.16em] font-medium hover:bg-base-soft transition-colors"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {items.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <Link
                      to={`/products/${item.productId}`}
                      onClick={closeCart}
                      className="w-24 h-28 bg-cream flex-shrink-0 overflow-hidden"
                    >
                      <ProductImage
                        image={item.image}
                        alt={item.name}
                        containerClassName="w-full h-full"
                      />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <Link
                        to={`/products/${item.productId}`}
                        onClick={closeCart}
                        className="product-name text-sm text-base hover:text-gold transition-colors truncate"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-muted capitalize mt-1">
                        {item.variantId} tone
                      </p>
                      <p className="text-sm font-medium mt-auto">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-linen">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-2 hover:bg-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-2 hover:bg-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.cartItemId)}
                          className="text-muted hover:text-red-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-linen px-6 py-6 bg-cream/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted">Subtotal</span>
                  <span className="font-serif text-xl text-base">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-xs text-muted mb-5">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  type="button"
                  className="w-full bg-gold text-ivory py-4 text-xs uppercase tracking-[0.16em] font-medium hover:bg-gold-light transition-colors"
                >
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full mt-3 border border-base text-base py-3 text-xs uppercase tracking-[0.16em] font-medium hover:bg-base hover:text-ivory transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

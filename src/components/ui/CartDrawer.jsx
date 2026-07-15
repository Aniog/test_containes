import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { formatPrice } from '@/data/products';
import { useImageLoader } from '@/hooks/useImageLoader';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalItems } = useCart();
  const containerRef = useImageLoader([items]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      <div
        ref={containerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-taupe/60 px-6 py-5">
            <h2 className="font-serif text-2xl">Your Cart ({totalItems})</h2>
            <button
              type="button"
              onClick={closeCart}
              className="p-2 text-warmGray hover:text-ink transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <ShoppingBag size={48} className="mb-4 text-taupe" />
                <p className="font-serif text-xl">Your cart is empty</p>
                <p className="mt-2 text-sm text-warmGray">Discover something treasured.</p>
                <button onClick={closeCart} className="btn-outline mt-6 text-xs">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map(({ product, variant, quantity }) => (
                  <li key={`${product.id}-${variant}`} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-blush">
                      {product.id === 'vivid-aura-jewels' && (
                        <img data-strk-img-id="cart-thumb-vivid-aura-jewels" data-strk-img="[cart-title-vivid-aura-jewels]" data-strk-img-ratio="1x1" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="h-full w-full object-cover" />
                      )}
                      {product.id === 'majestic-flora-nectar' && (
                        <img data-strk-img-id="cart-thumb-majestic-flora-nectar" data-strk-img="[cart-title-majestic-flora-nectar]" data-strk-img-ratio="1x1" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="h-full w-full object-cover" />
                      )}
                      {product.id === 'golden-sphere-huggies' && (
                        <img data-strk-img-id="cart-thumb-golden-sphere-huggies" data-strk-img="[cart-title-golden-sphere-huggies]" data-strk-img-ratio="1x1" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="h-full w-full object-cover" />
                      )}
                      {product.id === 'amber-lace-earrings' && (
                        <img data-strk-img-id="cart-thumb-amber-lace-earrings" data-strk-img="[cart-title-amber-lace-earrings]" data-strk-img-ratio="1x1" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="h-full w-full object-cover" />
                      )}
                      {product.id === 'royal-heirloom-set' && (
                        <img data-strk-img-id="cart-thumb-royal-heirloom-set" data-strk-img="[cart-title-royal-heirloom-set]" data-strk-img-ratio="1x1" data-strk-img-width="200" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="h-full w-full object-cover" />
                      )}
                      <span id={`cart-title-${product.id}`} className="sr-only">
                        {product.name}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="product-name">{product.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-warmGray">
                          {variant} Tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-taupe">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, variant, quantity - 1)}
                            className="p-2 hover:bg-blush transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, variant, quantity + 1)}
                            className="p-2 hover:bg-blush transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-medium text-sm">{formatPrice(product.price * quantity)}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id, variant)}
                      className="self-start p-1 text-warmGray hover:text-red-600 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-taupe/60 px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-warmGray">Subtotal</span>
                <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-warmGray mb-6">Shipping and taxes calculated at checkout.</p>
              <button type="button" className="btn-gold w-full">
                Checkout
              </button>
              <button onClick={closeCart} className="mt-3 w-full text-center text-sm underline underline-offset-4 hover:text-goldDark transition-colors">
                Continue Shopping
              </button>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-[-4px_0_24px_rgba(26,23,20,0.12)] transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-parchment">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-manrope text-xs uppercase tracking-[0.12em] text-ink font-medium">
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mist hover:text-ink transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-parchment" />
              <p className="font-cormorant text-xl text-mist font-light">Your cart is empty</p>
              <p className="font-manrope text-xs text-whisper">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(({ key, product, variant, quantity }) => (
                <li key={key} className="flex gap-4 py-4 border-b border-parchment last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${key}-img`}
                      data-strk-img={`[cart-${key}-name] gold jewelry`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <span id={`cart-${key}-name`} className="sr-only">{product.name}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="font-cormorant text-sm uppercase tracking-[0.1em] text-ink hover:text-gold transition-colors duration-200 block truncate"
                    >
                      {product.name}
                    </Link>
                    <p className="font-manrope text-xs text-mist mt-0.5">{variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-parchment">
                        <button
                          onClick={() => updateQuantity(key, quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-mist hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-manrope text-xs text-ink w-4 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(key, quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-mist hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-manrope text-sm font-semibold text-ink">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(key)}
                    className="text-whisper hover:text-mist transition-colors duration-200 self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-parchment bg-cream">
            <div className="flex items-center justify-between mb-1">
              <span className="font-manrope text-xs uppercase tracking-[0.1em] text-mist">Subtotal</span>
              <span className="font-cormorant text-xl text-ink font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-[10px] text-whisper mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ivory font-manrope text-xs uppercase tracking-[0.12em] py-4 hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 font-manrope text-xs uppercase tracking-[0.1em] text-mist py-2 hover:text-ink transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

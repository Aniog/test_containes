import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <h2 className="font-cormorant text-xl font-light tracking-widest uppercase text-ink">
            Your Bag
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone" />
              <p className="font-cormorant text-2xl font-light text-ink">Your bag is empty</p>
              <p className="font-inter text-xs text-taupe">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-white transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-stone">
              {items.map((item) => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQty={updateQuantity}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-stone bg-warm-white">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-cormorant text-xl font-light text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-[11px] text-taupe mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-white font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold-light transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-inter text-xs uppercase tracking-widest text-taupe hover:text-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, quantity, key } = item;

  return (
    <div className="flex gap-4 py-5">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-stone flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${product.imgId}`}
          data-strk-img={`[${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-widest text-ink leading-tight">{product.name}</p>
            <p className="font-inter text-[11px] text-taupe mt-0.5">{variant}</p>
          </div>
          <button
            onClick={() => onRemove(key)}
            className="text-taupe hover:text-ink transition-colors ml-2 flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-stone">
            <button
              onClick={() => onUpdateQty(key, quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-taupe hover:text-ink transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-inter text-xs text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(key, quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-taupe hover:text-ink transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>

          <span className="font-cormorant text-base font-light text-ink">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

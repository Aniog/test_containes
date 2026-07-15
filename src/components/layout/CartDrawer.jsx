import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 backdrop-blur-[2px] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-[-4px_0_32px_rgba(26,18,8,0.14)] transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-espresso" />
            <span className="font-cormorant text-lg font-light tracking-wide text-espresso">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-inter text-xs text-taupe">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-divider" />
              <p className="font-cormorant text-xl font-light text-taupe">Your cart is empty</p>
              <p className="font-inter text-xs text-taupe">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-[11px] uppercase tracking-[0.14em] text-espresso border border-espresso px-6 py-2.5 hover:bg-espresso hover:text-ivory transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-divider">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onQtyChange={(q) => updateQuantity(item.key, q)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-divider px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-[0.12em] text-taupe">Subtotal</span>
              <span className="font-cormorant text-xl font-light text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-[10px] text-taupe text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-ivory font-inter text-[11px] uppercase tracking-[0.15em] py-4 hover:bg-warm-brown transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-inter text-[11px] uppercase tracking-[0.12em] text-taupe hover:text-espresso transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onQtyChange }) {
  const { product, variant, quantity } = item;
  return (
    <div className="py-4 flex gap-4">
      <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
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
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-[0.12em] text-espresso leading-tight">{product.name}</p>
            <p className="font-inter text-[11px] text-taupe mt-0.5">{variant} Tone</p>
          </div>
          <button onClick={onRemove} className="text-taupe hover:text-espresso transition-colors flex-shrink-0 mt-0.5">
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-divider">
            <button
              onClick={() => onQtyChange(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-inter text-xs text-espresso">{quantity}</span>
            <button
              onClick={() => onQtyChange(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-cormorant text-base font-light text-espresso">${(product.price * quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[#1a1714]/50 z-50 transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#fdfaf6] z-50 flex flex-col shadow-[-4px_0_24px_rgba(26,23,20,0.12)] transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e0d6]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-[#c9a96e]" />
            <span className="font-sans text-xs tracking-[0.15em] uppercase text-[#2c2825] font-semibold">
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#7a6f66] hover:text-[#2c2825] transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-[#d4ccc4]" />
              <p className="font-serif text-xl text-[#7a6f66] italic">Your cart is empty</p>
              <p className="font-sans text-sm text-[#a89e95]">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-2.5 bg-[#c9a96e] text-[#1a1714] text-xs font-sans font-semibold tracking-[0.12em] uppercase hover:bg-[#b8935a] transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(qty) => updateQuantity(item.key, qty)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#e8e0d6] px-6 py-5 bg-[#f7f3ee]">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-[0.1em] uppercase text-[#7a6f66]">Subtotal</span>
              <span className="font-serif text-xl text-[#2c2825]">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-[#a89e95] mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-[#c9a96e] text-[#1a1714] font-sans text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#b8935a] transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 py-3 border border-[#c9a96e] text-[#c9a96e] font-sans text-xs font-500 tracking-[0.12em] uppercase hover:bg-[#c9a96e] hover:text-[#1a1714] transition-all duration-300"
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
  const { product, variant, quantity } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-[#e8e0d6] last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-[#f0ebe4] flex-shrink-0 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-serif text-2xl text-[#c9a96e] italic">V</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-sans text-xs tracking-[0.1em] uppercase text-[#2c2825] font-semibold leading-tight">
              {product.name}
            </p>
            <p className="font-sans text-xs text-[#a89e95] mt-0.5">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-[#a89e95] hover:text-[#2c2825] transition-colors duration-200 flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-[#e8e0d6]">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-[#7a6f66] hover:text-[#2c2825] hover:bg-[#f0ebe4] transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-sans text-xs text-[#2c2825]">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-[#7a6f66] hover:text-[#2c2825] hover:bg-[#f0ebe4] transition-colors duration-200"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-serif text-base text-[#2c2825]">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

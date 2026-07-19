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
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mink-light/30">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-obsidian" />
            <span className="font-cormorant text-xl font-medium tracking-wide text-obsidian">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mink hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-mink-light" />
              <p className="font-cormorant text-2xl text-mink">Your cart is empty</p>
              <p className="font-manrope text-xs text-mink-light uppercase tracking-widest">
                Discover something beautiful
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-obsidian text-ivory font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3 hover:bg-charcoal transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-mink-light/20">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blush to-ivory-dark flex items-center justify-center">
                      <span className="font-cormorant text-xs text-mink italic">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-widest text-obsidian leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-manrope text-xs text-mink mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-mink-light hover:text-obsidian transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-mink-light/40">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-mink hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-mink hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className="font-manrope text-sm font-medium text-obsidian">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-mink-light/30 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-[0.12em] text-mink">Subtotal</span>
              <span className="font-cormorant text-2xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-mink-light mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory font-manrope text-xs uppercase tracking-[0.12em] py-4 hover:bg-charcoal transition-colors mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-mink-light/50 text-charcoal font-manrope text-xs uppercase tracking-[0.12em] py-3.5 hover:border-obsidian transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-obsidian/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-obsidian" />
            <span className="font-sans text-xs tracking-widest uppercase text-obsidian font-semibold">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-obsidian/60 hover:text-obsidian transition-colors">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-taupe-light" />
              <p className="font-serif text-xl font-light text-obsidian">Your cart is empty</p>
              <p className="font-sans text-sm text-taupe">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-2"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-taupe/10">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blush to-ivory-dark flex items-center justify-center">
                      <span className="font-serif text-xs text-taupe italic">✦</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-widest uppercase text-obsidian font-medium leading-tight mb-1">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-taupe mb-3">{item.variant}</p>
                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-taupe/30">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-obsidian hover:bg-ivory-dark transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-sans text-xs w-5 text-center text-obsidian">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-obsidian hover:bg-ivory-dark transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm font-semibold text-obsidian">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-taupe hover:text-obsidian transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-taupe/20 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-taupe">Subtotal</span>
              <span className="font-serif text-xl font-light text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-taupe mb-5">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-center block mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="btn-outline w-full text-center block"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

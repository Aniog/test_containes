import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-obsidian/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
          <h2 className="font-serif text-xl font-light tracking-widest text-obsidian">
            YOUR BAG
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-taupe-light" />
              <p className="font-serif text-lg text-taupe">Your bag is empty</p>
              <p className="text-xs text-taupe-light tracking-wide">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 border border-gold text-gold text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-ivory-dark">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blush to-ivory-dark flex items-center justify-center">
                      <span className="text-gold text-xs font-serif">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-taupe mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-semibold text-obsidian mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-taupe-light text-taupe flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs font-medium text-obsidian w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-taupe-light text-taupe flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-taupe-light hover:text-obsidian transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gold/20 bg-ivory">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs tracking-widest uppercase text-taupe font-medium">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe-light text-center mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory text-xs tracking-widest uppercase font-semibold py-4 hover:bg-obsidian-light transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-gold/40 text-taupe text-xs tracking-widest uppercase font-medium py-3 hover:border-gold hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

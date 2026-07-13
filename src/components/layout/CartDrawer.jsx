import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ProductImage from '../ui/ProductImage';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, count } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/60 cart-overlay z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-blush">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-gold" />
            <span className="font-sans text-xs tracking-widest uppercase text-obsidian">
              Your Cart {count > 0 && `(${count})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-blush" />
              <p className="font-serif text-xl text-stone italic">Your cart is empty</p>
              <p className="font-sans text-xs text-stone tracking-wide">Discover our collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map(item => (
                <li key={item.key} className="flex gap-3 py-3 border-b border-blush last:border-0">
                  {/* Product image */}
                  <div className="w-16 h-20 bg-ivory flex-shrink-0 overflow-hidden">
                    <ProductImage
                      shape={item.product.imgShape}
                      gold={item.product.imgColor}
                      accent={item.product.imgAccent}
                      className="w-full h-full object-cover"
                      alt={item.product.name}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-stone mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm text-obsidian mt-1 font-medium">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-blush flex items-center justify-center text-stone hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-sans text-xs w-4 text-center text-obsidian">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-blush flex items-center justify-center text-stone hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone hover:text-obsidian transition-colors self-start mt-1"
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
          <div className="px-6 py-5 border-t border-blush bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-stone">Subtotal</span>
              <span className="font-serif text-lg text-obsidian">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-300 font-medium">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-obsidian transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-velmora-obsidian/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-linen z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-velmora-gold" />
            <span className="font-cormorant text-xl text-velmora-obsidian">
              Your Cart {totalItems > 0 && <span className="text-velmora-gold">({totalItems})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-velmora-ash hover:text-velmora-obsidian transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-velmora-sand" />
              <p className="font-cormorant text-2xl text-velmora-stone">Your cart is empty</p>
              <p className="font-inter text-xs text-velmora-ash tracking-wide">Discover our curated collection</p>
              <Button variant="outlined" size="sm" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map(item => (
              <CartItem
                key={item.key}
                item={item}
                onRemove={() => removeItem(item.key)}
                onQuantityChange={(q) => updateQuantity(item.key, q)}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-sand space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-inter text-xs tracking-widest uppercase text-velmora-ash">Subtotal</span>
              <span className="font-cormorant text-2xl text-velmora-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-velmora-ash text-center">Shipping & taxes calculated at checkout</p>
            <Button variant="primary" size="full">
              Proceed to Checkout
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-inter text-xs tracking-widest uppercase text-velmora-ash hover:text-velmora-gold transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onQuantityChange }) {
  const { product, variant, quantity } = item;

  const categoryColors = {
    earrings: 'from-amber-100 to-amber-200',
    necklaces: 'from-stone-100 to-stone-200',
    huggies: 'from-yellow-100 to-amber-100',
    sets: 'from-neutral-100 to-stone-200',
  };
  const gradient = categoryColors[product.category] || 'from-stone-100 to-stone-200';

  return (
    <div className="flex gap-4">
      <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded flex-shrink-0 flex items-center justify-center overflow-hidden`}>
        <span className="font-cormorant text-2xl text-velmora-gold/60 select-none">✦</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-wider text-velmora-obsidian leading-tight">
              {product.name}
            </p>
            <p className="font-inter text-xs text-velmora-ash mt-0.5">{variant}</p>
          </div>
          <button onClick={onRemove} className="text-velmora-ash hover:text-velmora-obsidian transition-colors flex-shrink-0">
            <X size={14} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-velmora-sand rounded">
            <button
              onClick={() => onQuantityChange(quantity - 1)}
              className="px-2 py-1 text-velmora-ash hover:text-velmora-obsidian transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="px-3 font-inter text-xs text-velmora-obsidian">{quantity}</span>
            <button
              onClick={() => onQuantityChange(quantity + 1)}
              className="px-2 py-1 text-velmora-ash hover:text-velmora-obsidian transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="font-cormorant text-lg text-velmora-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

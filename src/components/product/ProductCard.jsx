import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { clsx } from 'clsx';
import { formatPrice, useCart } from '@/context/CartContext';
import JewelryImage from '@/components/ui/JewelryImage';

const KIND_BY_CATEGORY = {
  earrings: 'earring',
  necklaces: 'necklace',
  huggies: 'huggie',
  sets: 'set',
};

const THEMES = ['warm', 'dark', 'linen'];

export default function ProductCard({ product, theme, index = 0 }) {
  const { addItem } = useCart();
  const cardTheme =
    theme || (index % 2 === 0 ? 'warm' : 'dark');
  const kind = KIND_BY_CATEGORY[product.category] || 'earring';

  function handleQuickAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { quantity: 1, openDrawer: true });
  }

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
    >
      {/* Image — primary + alt cross-fade on hover */}
      <div className="relative aspect-[3/4] overflow-hidden bg-espresso">
        <JewelryImage
          imgId={product.imgPrimaryId}
          query={`[card-${product.id}-name] [card-${product.id}-cat]`}
          fallbackQuery={product.imgQueryPrimary}
          ratio="3x4"
          width={800}
          kind={kind}
          theme={cardTheme}
          alt={product.name}
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <JewelryImage
            imgId={product.imgAltId}
            query={`[card-${product.id}-cat] [card-${product.id}-name]`}
            fallbackQuery={product.imgQueryAlt}
            ratio="3x4"
            width={800}
            kind={kind}
            theme={cardTheme === 'warm' ? 'linen' : 'warm'}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Quick add — appears on hover (desktop), always visible at bottom on mobile via icon */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className={clsx(
            'absolute left-1/2 -translate-x-1/2 bottom-4 inline-flex items-center justify-center gap-2',
            'bg-cream text-espresso text-[10px] uppercase tracking-[0.25em] font-sans font-medium',
            'px-5 py-2.5 border border-transparent',
            'transition-all duration-500 ease-out',
            'opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0',
            'hover:bg-gold hover:text-cream',
            // Touch-friendly: always show on small screens
            'sm:opacity-0 sm:translate-y-3',
          )}
          aria-label={`Quick add ${product.name}`}
        >
          <Plus size={12} strokeWidth={1.6} />
          Add to Cart
        </button>

        {/* Mobile: discreet plus button always visible */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="sm:hidden absolute right-3 bottom-3 w-9 h-9 rounded-full bg-cream/95 text-espresso flex items-center justify-center shadow-[0_2px_12px_-4px_rgba(0,0,0,0.3)] active:bg-gold active:text-cream"
          aria-label={`Quick add ${product.name}`}
        >
          <Plus size={16} strokeWidth={1.6} />
        </button>
      </div>

      {/* Meta */}
      <div className="pt-5 pb-2">
        <p
          id={`card-${product.id}-cat`}
          className="text-[10px] uppercase tracking-[0.3em] text-mute font-sans"
        >
          {product.categoryLabel}
        </p>
        <h3
          id={`card-${product.id}-name`}
          className="mt-1.5 font-sans text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-espresso group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-espresso font-sans tabular-nums">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

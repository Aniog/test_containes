import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

const PRODUCT_IMAGES = {
  'vivid-aura-jewels': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
  'majestic-flora-nectar': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
  'golden-sphere-huggies': 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
  'amber-lace-earrings': 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=800&auto=format&fit=crop',
  'royal-heirloom-set': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
};

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.data?.id || product.id,
      name: product.data?.name || product.name,
      price: product.data?.price || product.price,
      image_url: product.data?.image_url || product.image_url || '',
    });
  };

  const slug = product.data?.slug || product.slug;
  const name = product.data?.name || product.name;
  const price = product.data?.price || product.price;
  const rating = product.data?.rating || product.rating || 4.5;
  const reviewCount = product.data?.review_count || product.review_count || 0;
  const imageUrl = PRODUCT_IMAGES[slug] || PRODUCT_IMAGES['vivid-aura-jewels'];

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-border overflow-hidden mb-4">
        <Link to={`/product/${slug}`} className="block w-full h-full">
          <img
            src={imageUrl}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-500" />
        </Link>
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 bg-cream/95 text-charcoal font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-cream z-10"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            Quick Add
          </button>
        )}
      </div>

      <Link to={`/product/${slug}`} className="block">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif text-sm tracking-widest uppercase text-charcoal mb-1">
              {name}
            </h3>
            <p className="font-sans text-sm text-stone">${price.toFixed(2)}</p>
          </div>
          {rating && (
            <div className="flex items-center gap-1 text-gold">
              <Star className="w-3.5 h-3.5 fill-gold" strokeWidth={0} />
              <span className="font-sans text-xs text-stone">{rating}</span>
              {reviewCount > 0 && (
                <span className="font-sans text-xs text-stone-light">({reviewCount})</span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

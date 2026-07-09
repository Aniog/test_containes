import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const { addItem } = useCart();

  const fields = product.data || product;
  const name = fields.name;
  const slug = fields.slug;
  const price = fields.price;
  const compare = fields.compare_at_price;
  const rating = fields.rating;
  const reviewCount = fields.review_count;
  const image = fields.image_url;
  const hoverImage = fields.hover_image_url;
  const shortDesc = fields.short_description;

  return (
    <div className="group block">
      {/* Image container — img navigates, button is independent sibling */}
      <div
        className="relative aspect-[3/4] bg-[var(--cream)] overflow-hidden mb-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image || 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E'}
          alt={name}
          onClick={() => navigate(`/product/${slug}`)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
          loading="lazy"
        />
        {hoverImage && hovered && (
          <img
            src={hoverImage}
            alt={`${name} alternate`}
            onClick={() => navigate(`/product/${slug}`)}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer"
          />
        )}
        {/* Quick add — hover-reveal on desktop, always visible on mobile */}
        <button
          type="button"
          onClick={() => addItem(fields, 'Gold', 1)}
          className="absolute bottom-3 left-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-[var(--charcoal)] font-sans text-xs uppercase tracking-[0.15em] py-3 flex items-center justify-center gap-2 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--charcoal)] hover:text-white cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <Link to={`/product/${slug}`} className="block">
        <div className="space-y-1">
          <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-[var(--charcoal)] group-hover:text-[var(--gold-dark)] transition-colors">
            {name}
          </h3>
          {shortDesc && (
            <p className="text-xs text-[var(--charcoal)]/50 leading-relaxed line-clamp-1">{shortDesc}</p>
          )}
          <div className="flex items-center gap-2 pt-1">
            <span className="font-sans text-sm font-medium text-[var(--charcoal)]">
              ${price?.toFixed(2)}
            </span>
            {compare && compare > price && (
              <span className="text-xs text-[var(--charcoal)]/40 line-through">
                ${compare.toFixed(2)}
              </span>
            )}
          </div>
          {rating > 0 && (
            <div className="flex items-center gap-2 pt-0.5">
              <StarRating rating={rating} size={12} />
              <span className="text-[10px] text-[var(--charcoal)]/40">({reviewCount})</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const fields = product.data || product;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = fields.variants?.[0] || 'gold';
    addItem({
      id: product.id,
      name: fields.name,
      price: fields.price,
      image_url: fields.image_url,
    }, variant);
  };

  return (
    <Link
      to={`/product/${fields.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-hairline overflow-hidden mb-4">
        <img
          src={fields.image_url}
          alt={fields.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            hovered && fields.hover_image_url ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {fields.hover_image_url && (
          <img
            src={fields.hover_image_url}
            alt={`${fields.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 left-3 right-3 bg-surface/95 text-base font-sans text-xs uppercase tracking-widest font-medium py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gold hover:text-base ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-sans text-xs uppercase tracking-widest font-medium text-base mb-1">
          {fields.name}
        </h3>
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(fields.rating || 0)
                    ? 'text-gold fill-gold'
                    : 'text-hairline fill-hairline'
                }`}
              />
            ))}
          </div>
          <span className="font-sans text-[11px] text-text-muted">
            ({fields.review_count || 0})
          </span>
        </div>
        <p className="font-sans text-sm text-base font-medium">
          ${fields.price}
        </p>
      </div>
    </Link>
  );
}

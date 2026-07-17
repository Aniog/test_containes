import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const imageMap = {
  'vivid-aura-1': 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop',
  'vivid-aura-2': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
  'flora-nectar-1': 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&h=750&fit=crop',
  'flora-nectar-2': 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop',
  'sphere-huggies-1': 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=750&fit=crop',
  'sphere-huggies-2': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop',
  'amber-lace-1': 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600&h=750&fit=crop',
  'amber-lace-2': 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=600&h=750&fit=crop',
  'heirloom-1': 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&h=750&fit=crop',
  'heirloom-2': 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&h=750&fit=crop',
};

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { addItem } = useCart();

  const img1 = imageMap[product.images[0]];
  const img2 = imageMap[product.images[1] || product.images[0]];
  const displayImg = hovered && img2 ? img2 : img1;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-sand/20 overflow-hidden rounded-sm">
        {!imgError ? (
          <img
            src={displayImg}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-sand/30 text-sand/60 font-serif text-sm">
            {product.name}
          </div>
        )}
        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="w-full bg-warmwhite/95 backdrop-blur-sm text-deepbrown font-sans text-xs tracking-wider uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-sm md:text-base tracking-[0.08em] uppercase text-deepbrown leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand/40'}`} />
            ))}
          </div>
          <span className="font-sans text-xs text-mocha/60">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm font-medium text-deepbrown">${product.price}</p>
      </div>
    </Link>
  );
}

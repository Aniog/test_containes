import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCartActions } from '@/context/CartContext';
import { useToast } from '@/components/ui/Toast';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCartActions();
  const toast = useToast();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    toast(`Added "${product.name}" to your bag`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase bg-velmora-charcoal text-white/90">
            {product.badge}
          </span>
        )}

        {/* Quick add on hover */}
        <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/95 backdrop-blur-sm text-velmora-charcoal text-xs font-medium tracking-wider uppercase hover:bg-velmora-gold hover:text-white transition-all duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3 className="product-name group-hover:text-velmora-gold transition-colors duration-200">{product.name}</h3>
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'fill-velmora-stone text-velmora-stone'}`}
            />
          ))}
          <span className="text-[11px] text-velmora-warmgray ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
      </div>
    </Link>
  );
}

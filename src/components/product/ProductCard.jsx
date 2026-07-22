import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-soft">
        <img
          src={`https://placehold.co/400x533/f5f5f5/666666?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-white text-charcoal-800 hover:bg-gray-100 border-none px-6 py-3 text-xs tracking-widest uppercase"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-serif text-sm font-medium text-charcoal-800 uppercase tracking-wide">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < Math.floor(product.rating)
                    ? "text-velmora-gold-500 fill-velmora-gold-500"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-charcoal-500">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-charcoal-700">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

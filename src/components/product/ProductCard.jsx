import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#FAF8F5] overflow-hidden mb-4">
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            data-strk-img-id={`card-front-${product.id}`}
            data-strk-img={`[${product.id}-subtitle] [${product.id}-name] gold jewelry product`}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={product.images[0].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            data-strk-img-id={`card-hover-${product.id}`}
            data-strk-img={`[${product.id}-subtitle] [${product.id}-name] gold jewelry worn`}
            data-strk-img-ratio={product.images[0].ratio}
            data-strk-img-width={product.images[0].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-widest px-3 py-1.5">
            Bestseller
          </span>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
              added
                ? 'bg-green-700 text-white'
                : 'bg-white/95 text-foreground hover:bg-[#1A1A1A] hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? 'Added' : 'Add to Bag'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div>
        <h3 className="product-name text-sm text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#6B6560] mt-1">{product.subtitle}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-[#E8E4DF]'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-[#6B6560]">({product.reviews})</span>
        </div>
        <p className="text-sm text-foreground mt-2">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

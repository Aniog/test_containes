import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={cardRef}
        className="relative aspect-[3/4] bg-[#E8E2DA] rounded-sm overflow-hidden mb-4"
      >
        <img
          data-strk-img-id={`card-${product.imgId}`}
          data-strk-img={`[${product.titleId}] [${product.descId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/20 flex items-end justify-center pb-6 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="bg-white text-[#1A1A1A] uppercase tracking-wider text-xs font-medium px-6 py-3 rounded-sm hover:bg-accent hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      <h3 className="product-name text-sm tracking-wider group-hover:text-accent transition-colors duration-300">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 mt-1.5">
        <StarRating rating={product.rating} size={12} />
        <span className="text-xs text-muted-foreground">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium mt-2">${product.price}</p>
    </Link>
  );
};

export default ProductCard;

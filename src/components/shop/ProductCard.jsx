import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative product-img-wrap bg-stone-pale overflow-hidden mb-4">
        {/* Primary image */}
        <img
          id={product.imgId}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover image */}
        <img
          id={product.img2Id}
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('new') && (
            <span className="bg-espresso text-ivory font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-ivory font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-espresso text-ivory font-inter text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-espresso-light transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div>
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-widest text-espresso mb-1 group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-inter text-xs text-stone mb-2 line-clamp-1"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-inter text-sm font-medium text-espresso">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#B8935A" className="text-gold" />
            <span className="font-inter text-[10px] text-stone">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

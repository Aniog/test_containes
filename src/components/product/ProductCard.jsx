import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import StarRating from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const ProductCard = ({ product, sectionId = 'section-bestsellers' }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const firstImage = product.images[0];
  const secondImage = product.images[1] || firstImage;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-4">
        <img
          data-strk-img-id={firstImage.imgId}
          data-strk-img={`[product-name-${product.id}] [product-category-${product.id}] [${sectionId}]`}
          data-strk-img-ratio={firstImage.ratio}
          data-strk-img-width={firstImage.width}
          src={PLACEHOLDER}
          alt={firstImage.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          data-strk-img-id={secondImage.imgId}
          data-strk-img={`[product-name-${product.id}] [product-category-${product.id}] [${sectionId}]`}
          data-strk-img-ratio={secondImage.ratio}
          data-strk-img-width={secondImage.width}
          src={PLACEHOLDER}
          alt={secondImage.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <button
          onClick={handleQuickAdd}
          className={`absolute left-0 right-0 bottom-0 mx-4 mb-4 btn-primary py-3 transform transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          aria-label={`Quick add ${product.name} to cart`}
        >
          <ShoppingBag size={16} className="mr-2" />
          Quick Add
        </button>
      </div>

      <div className="text-center">
        <h3 id={`product-name-${product.id}`} className="product-name mb-1.5">
          {product.name}
        </h3>
        <p id={`product-category-${product.id}`} className="sr-only">
          {product.category}
        </p>
        <div className="flex items-center justify-center gap-2 mb-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-stone">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      ...product,
      image: `https://api.strk.io/img?q=${product.name}+jewelry+on+background&w=400&h=600`
    });
    toast.success(`Added ${product.name} to bag`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#F4F4F4] overflow-hidden mb-4">
        {/* Main Image */}
        <img
          data-strk-img-id={`prod-img-${product.id}-1`}
          data-strk-img={`[${product.descId}] [${product.titleId}] jewelry gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Image (Second Image) */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
             <img
              data-strk-img-id={`prod-img-${product.id}-2`}
              data-strk-img={`[${product.descId}] [${product.titleId}] detail close-up`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={`${product.name} detail`}
              className="w-full h-full object-cover"
            />
        </div>

        {/* Quick Add - Desktop Only */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500 transform ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white text-black py-3 text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-all flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 id={product.titleId} className="text-xs uppercase tracking-[0.2em] font-medium leading-tight">
          {product.name}
        </h3>
        <p className="text-sm font-light">$${product.price}</p>
        <p id={product.descId} className="hidden">{product.description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
EOF > /workspace/my-app/src/components/ProductCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      ...product,
      image: `https://api.strk.io/img?q=${product.name}+jewelry+on+background&w=400&h=600`
    });
    toast.success(`Added ${product.name} to bag`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#F4F4F4] overflow-hidden mb-4">
        {/* Main Image */}
        <img
          data-strk-img-id={`prod-img-${product.id}-1`}
          data-strk-img={`[${product.descId}] [${product.titleId}] jewelry gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Image (Second Image) */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
             <img
              data-strk-img-id={`prod-img-${product.id}-2`}
              data-strk-img={`[${product.descId}] [${product.titleId}] detail close-up`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={`${product.name} detail`}
              className="w-full h-full object-cover"
            />
        </div>

        {/* Quick Add - Desktop Only */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500 transform ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white text-black py-3 text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-all flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 id={product.titleId} className="text-xs uppercase tracking-[0.2em] font-medium leading-tight">
          {product.name}
        </h3>
        <p className="text-sm font-light">$${product.price}</p>
        <p id={product.descId} className="hidden">{product.description}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-3">
        <img
          data-strk-img-id={hovered ? product.imgId2 : product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick add button on hover */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-cream/95 backdrop-blur-sm text-charcoal py-2.5 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold hover:text-cream transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <h3
        id={product.titleId}
        className="font-sans text-xs tracking-product uppercase text-charcoal font-medium"
      >
        {product.name}
      </h3>
      <p id={product.descId} className="sr-only">{product.description}</p>
      <p className="mt-1 font-sans text-sm text-muted">${product.price}</p>
    </Link>
  );
};

export default ProductCard;

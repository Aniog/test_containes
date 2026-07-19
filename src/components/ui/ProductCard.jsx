import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-velmora-cream block">
        {/* Main Image */}
        <img
          data-strk-img-id={product.imgId1}
          data-strk-img={`[${product.titleId}] [${product.catId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.title} worn`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            onClick={(e) => {
              e.preventDefault();
              addToCart({ ...product, variant: 'Gold' });
            }}
            className="w-full bg-white/90 text-velmora-charcoal backdrop-blur-sm hover:bg-velmora-charcoal hover:text-white py-2 text-xs"
          >
            Quick Add
          </Button>
        </div>
      </Link>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <p id={product.catId} className="text-[10px] text-velmora-taupe uppercase tracking-widestest mb-1">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`}>
            <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-widest hover:text-velmora-gold transition-colors">
              {product.title}
            </h3>
          </Link>
        </div>
        <span className="text-sm font-medium text-velmora-charcoal">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;

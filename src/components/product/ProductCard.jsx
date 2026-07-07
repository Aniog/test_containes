import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted-light overflow-hidden mb-3">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-0 left-0 right-0 bg-charcoal/90 text-white py-3 text-xs tracking-widest uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold"
          >
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <h3 className="font-serif text-xs md:text-sm uppercase tracking-product text-charcoal">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-sans text-charcoal">${product.price}</p>
      </Link>
    </div>
  );
}

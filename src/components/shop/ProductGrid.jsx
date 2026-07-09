import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getStrkImage } from '@/lib/utils';

export default function ProductGrid({ products }) {
  const { addItem } = useCart();

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-sans text-sm text-text-secondary">No products match your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => {
        const primarySrc = getStrkImage(product.imgId);
        const altSrc = getStrkImage(`${product.imgId}-alt`);

        return (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.slug}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  alt={product.name}
                  src={primarySrc || undefined}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {altSrc && (
                  <img
                    alt={`${product.name} alternate`}
                    src={altSrc}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
              </div>
            </Link>

            <button
              onClick={() => addItem(product)}
              className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-charcoal/80 hover:bg-gold text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>

            <div className="mt-3">
              <Link to={`/product/${product.slug}`}>
                <h3
                  id={product.titleId}
                  className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-text-primary group-hover:text-gold transition-colors"
                >
                  {product.name}
                </h3>
              </Link>
              <p
                id={product.descId}
                className="font-sans text-xs text-text-secondary mt-1 line-clamp-1"
              >
                {product.description}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}`}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-text-secondary">({product.reviews})</span>
              </div>
              <p className="font-sans text-sm text-text-primary mt-1">${product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

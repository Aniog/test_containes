import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { getStrkImage } from '@/lib/utils';

export default function Bestsellers() {
  const { addItem } = useCart();

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-text-primary">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const primarySrc = getStrkImage(product.imgId);
  const altSrc = getStrkImage(`${product.imgId}-alt`);

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
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

      {/* Quick add to cart */}
      <button
        onClick={() => onAddToCart(product)}
        className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-charcoal/80 hover:bg-gold text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="w-4 h-4" />
      </button>

      <div className="mt-3">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm md:text-base tracking-[0.15em] uppercase text-text-primary group-hover:text-gold transition-colors"
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
        <div className="flex items-center gap-2 mt-2">
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
        <p className="font-sans text-sm md:text-base font-medium text-text-primary mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

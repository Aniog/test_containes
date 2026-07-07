import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Rating } from '@/components/ui/Rating';
import { products } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ProductCard({ product, delay = 0 }) {
  const { addItem } = useCart();
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      ref={ref}
      className={`group block animate-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="product-card bg-white">
        {/* Image container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-warmStone/30">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-card-img-primary w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            src={product.images[1] || product.images[0]}
            alt={`${product.name} alternate view`}
            className="product-card-img-secondary w-full h-full object-cover"
          />
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-charcoal text-ivory font-sans text-[10px] font-semibold uppercase tracking-extra-wide px-2.5 py-1">
              {product.badge}
            </span>
          )}
          {/* Quick add */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 w-9 h-9 bg-ivory rounded-full flex items-center justify-center
                       shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300 hover:bg-gold hover:text-charcoal text-charcoal"
            aria-label="Add to bag"
          >
            <ShoppingBag size={15} />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="product-name text-[11px] text-charcoal leading-snug mb-1">
            {product.name}
          </h3>
          <Rating value={product.rating} count={product.reviews} size={11} />
          <p className="mt-2 font-serif text-base text-charcoal">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function Bestsellers() {
  const featured = products.slice(0, 5);

  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold mb-3">
            Customer Favourites
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-charcoal">
            Our Bestsellers
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 80} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/collection" className="btn-secondary">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}

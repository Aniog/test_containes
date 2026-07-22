import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Badge, StarRating } from '@/components/ui';
import { useCart } from '@/context/CartContext';
import { getBestsellers } from '@/data/products';
import { formatPrice } from '@/lib/utils';

export default function Bestsellers() {
  const [hoveredId, setHoveredId] = useState(null);
  const [wishlist, setWishlist] = useState({});
  const { addItem, openCart } = useCart();
  const products = getBestsellers();

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id);
    openCart();
  };

  return (
    <section className="section-padding bg-brand-bg-primary">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl text-brand-text-primary">
            Our Bestsellers
          </h2>
          <p className="mt-4 text-brand-text-secondary max-w-lg mx-auto">
            Discover the pieces our community can't stop wearing
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group block animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-brand-bg-secondary rounded-sm">
                {/* Primary Image */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === product.id && product.images[1]
                      ? 'opacity-0'
                      : 'opacity-100'
                  }`}
                />

                {/* Secondary Image */}
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={`${product.name} - alternate view`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="bestseller">Bestseller</Badge>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-3 right-3 p-2 bg-brand-bg-primary/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-gold hover:text-brand-bg-primary"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      wishlist[product.id] ? 'fill-current' : ''
                    }`}
                  />
                </button>

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleQuickAdd(product, e)}
                  className="absolute bottom-0 left-0 right-0 py-3 bg-brand-gold/95 backdrop-blur-sm text-brand-bg-primary text-xs font-medium uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  Quick Add
                </button>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-product-name text-brand-text-primary mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-brand-gold font-medium">
                    {formatPrice(product.price)}
                  </p>
                  <StarRating rating={product.rating} size="sm" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-brand-gold-hover transition-colors group"
          >
            View All Products
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block no-underline">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted/60 text-center px-4 font-serif italic">
              {product.name}
            </span>
          </div>
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-2.5 bg-dark/90 text-white text-xs font-medium uppercase tracking-wider hover:bg-dark transition-colors border-none rounded-none"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 className="font-serif text-sm font-medium text-heading uppercase tracking-product">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mt-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-border'}`}
              />
            ))}
            <span className="text-xs text-muted ml-1">({product.reviews})</span>
          </div>
          <p className="text-sm font-medium text-charcoal mt-1.5">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-heading">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-muted">
            Our most-loved pieces, chosen by you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-accent text-accent text-sm font-medium uppercase tracking-wider hover:bg-accent hover:text-white transition-colors no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

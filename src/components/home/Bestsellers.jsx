import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-brand-cream rounded-sm overflow-hidden mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={`bestseller-${product.id}`}
            data-strk-img={product.imgQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay with quick add */}
          <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all duration-300 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, 'gold');
              }}
              className="bg-brand-ivory text-brand-black px-6 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-brand-gold hover:text-white transition-all duration-300 translate-y-4 group-hover:translate-y-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 inline mr-2" />
              Add to Cart
            </button>
          </div>
          {/* Badges */}
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-brand-gold text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
              New
            </span>
          )}
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3 className="font-serif text-sm md:text-base uppercase tracking-widest text-brand-black mb-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
              />
            ))}
          </div>
          <p className="text-sm font-medium text-brand-charcoal">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.isBestseller);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-label mb-3">Our Bestsellers</p>
          <h2 className="heading-section">Most Loved Pieces</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

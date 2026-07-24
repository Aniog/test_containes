import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const bestsellers = products.filter((p) => p.isBestseller);

function ProductCard({ product, index }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: '-50px' }}
      className="group"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-50 mb-4">
          {/* Product image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-all duration-500" />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-4 left-4 right-4 btn-primary text-xs py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
          >
            <ShoppingBag className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Add to Cart
          </button>

          {/* Badge */}
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-gold-500 text-white text-caption px-3 py-1 uppercase tracking-wider">
              New
            </span>
          )}
        </div>
      </Link>

      {/* Product info */}
      <Link to={`/product/${product.slug}`}>
        <h3 className="product-name text-charcoal-800 mb-1.5">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold-500 fill-gold-500'
                    : 'text-charcoal-200'
                }`}
              />
            ))}
          </div>
          <span className="text-body-sm text-charcoal-400">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-body-sm font-medium text-charcoal-700">
          {formatPrice(product.price)}
        </p>
      </Link>
    </motion.div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-3">
            Curated Selection
          </p>
          <h2 className="heading-section text-charcoal-800">Bestsellers</h2>
          <div className="divider mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {bestsellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/shop" className="btn-outline text-xs">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

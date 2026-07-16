import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/lib/cart';
import { formatPrice, cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tones[0], 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/product/${product.slug}`}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-ivory rounded-sm overflow-hidden mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={`${product.id}-primary`}
            data-strk-img={`[${product.id}-name] ${product.searchTerms} jewelry product photo`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          />

          {/* Hover image (second image) */}
          <img
            data-strk-img-id={`${product.id}-hover`}
            data-strk-img={`${product.searchTerms} jewelry detail closeup`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
            alt={`${product.name} detail`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />

          {/* Quick add button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal 
                       py-3 flex items-center justify-center gap-2 font-sans text-xs tracking-ultra-wide uppercase
                       hover:bg-gold hover:text-white transition-colors duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </motion.button>
        </div>

        {/* Product info */}
        <div className="space-y-1.5">
          <h3 className="product-name text-sm lg:text-base" id={`${product.id}-name`}>
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-3 h-3',
                    i < Math.floor(product.rating)
                      ? 'fill-gold text-gold'
                      : 'text-champagne'
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-warm-gray">({product.reviewCount})</span>
          </div>
          <p className="font-sans text-base font-medium text-charcoal">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

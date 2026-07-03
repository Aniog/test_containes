import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../../data/products';

export default function RelatedProducts({ currentProductId }) {
  // Get related products (same category or random)
  const relatedProducts = products
    .filter(p => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section className="section bg-[#FAF8F5]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="label-uppercase text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--color-gold)' }}>
            Complete Your Look
          </p>
          <h2 className="heading-2" style={{ color: 'var(--color-text)' }}>
            You May Also Like
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] bg-[#F5F2ED] overflow-hidden mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="product-name text-[10px] md:text-[11px] mb-1 group-hover:text-[#C9A962] transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2.5 h-2.5"
                      fill={i < Math.floor(product.rating) ? '#C9A962' : 'none'}
                      stroke={i < Math.floor(product.rating) ? '#C9A962' : '#D5D0C8'}
                    />
                  ))}
                </div>

                <p className="font-medium text-sm text-[#2D2926]">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

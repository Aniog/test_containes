import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const addItem = useCartStore((s) => s.addItem);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="heading-section text-charcoal-800">You May Also Like</h2>
          <div className="divider mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {related.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-50 mb-4">
                  <img
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product);
                    }}
                    className="absolute bottom-3 left-3 right-3 btn-primary text-xs py-2.5 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 mr-1.5" strokeWidth={1.5} />
                    Add to Cart
                  </button>
                </div>
              </Link>
              <Link to={`/product/${product.slug}`}>
                <h3 className="product-name text-charcoal-800 mb-1 text-[11px]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-charcoal-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-body-sm font-medium text-charcoal-700">
                  {formatPrice(product.price)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

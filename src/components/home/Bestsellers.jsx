import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../hooks/useCart';
import { ShoppingBag, Star } from 'lucide-react';
import { formatPrice } from '../../lib/utils';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const bestsellers = products.filter(p => p.tags.includes('bestseller')).slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 mb-4">
            Bestsellers
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our most loved pieces, chosen by women who appreciate fine craftsmanship and timeless design.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative bg-neutral-50 rounded-lg overflow-hidden hover:shadow-medium transition-shadow duration-300"
            >
              {/* Product Image */}
              <Link to={`/product/${product.slug}`} className="block">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    data-strk-img-id={`bestseller-${product.id}`}
                    data-strk-img={`[${product.id}-desc] [${product.id}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Quick Add Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-neutral-900 font-medium px-4 py-2 rounded-lg shadow-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <Link to={`/product/${product.slug}`}>
                  <h3
                    id={`${product.id}-title`}
                    className="font-serif font-semibold text-neutral-900 text-sm uppercase tracking-wider mb-1 hover:text-brand-600 transition-colors"
                  >
                    {product.name}
                  </h3>
                </Link>
                <p
                  id={`${product.id}-desc`}
                  className="text-neutral-500 text-xs mb-2 line-clamp-2"
                >
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-neutral-900">
                    {formatPrice(product.price)}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-brand-400 text-brand-400" />
                    <span className="text-xs text-neutral-500">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
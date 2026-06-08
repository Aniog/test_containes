import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 'pro-rod-x9',
    title: 'ProCast X9 Spinning Rod',
    category: 'Rods',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 312,
    badge: 'Best Seller',
    titleId: 'prod-pro-rod-x9-title',
    descId: 'prod-pro-rod-x9-desc',
    imgId: 'prod-img-pro-rod-x9-p1q2r3',
    desc: 'Lightweight carbon fiber spinning rod for freshwater and saltwater fishing',
  },
  {
    id: 'reel-titan',
    title: 'Titan 4000 Baitcasting Reel',
    category: 'Reels',
    price: 189.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 198,
    badge: 'Top Rated',
    titleId: 'prod-reel-titan-title',
    descId: 'prod-reel-titan-desc',
    imgId: 'prod-img-reel-titan-s4t5u6',
    desc: 'High-performance baitcasting reel with magnetic braking system',
  },
  {
    id: 'lure-pack',
    title: 'Deep Diver Lure Set (12pc)',
    category: 'Lures',
    price: 44.99,
    originalPrice: 59.99,
    rating: 4.7,
    reviews: 541,
    badge: 'Sale',
    titleId: 'prod-lure-pack-title',
    descId: 'prod-lure-pack-desc',
    imgId: 'prod-img-lure-pack-v7w8x9',
    desc: 'Assorted deep diving crankbaits and jerkbaits for bass and pike fishing',
  },
  {
    id: 'fly-rod-elite',
    title: 'Elite Fly Rod 9ft #5',
    category: 'Fly Fishing',
    price: 249.99,
    originalPrice: null,
    rating: 5.0,
    reviews: 87,
    badge: 'New',
    titleId: 'prod-fly-rod-elite-title',
    descId: 'prod-fly-rod-elite-desc',
    imgId: 'prod-img-fly-rod-elite-y1z2a3',
    desc: 'Premium 4-piece fly rod for trout and salmon in rivers and streams',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" className="py-20 md:py-28 bg-teal-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Featured Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mt-3 mb-4">
            Top Picks for Anglers
          </h2>
          <p className="text-teal-700 max-w-xl mx-auto text-base leading-relaxed">
            Hand-selected by our expert team — the best gear for every style of fishing.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-xl transition-shadow overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-teal-50">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                    product.badge === 'Sale' ? 'bg-red-500 text-white' :
                    product.badge === 'New' ? 'bg-teal-600 text-white' :
                    'bg-amber-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors">
                  <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs text-teal-600 font-semibold uppercase tracking-wide">{product.category}</span>
                <h3 id={product.titleId} className="text-teal-900 font-semibold text-base mt-1 mb-1 leading-snug">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-teal-600 text-xs leading-relaxed mb-3 line-clamp-2">
                  {product.desc}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-teal-600">({product.reviews})</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-teal-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-teal-700 hover:bg-teal-800 text-white rounded-full p-2.5 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white rounded-full px-10 py-3 text-sm font-bold transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

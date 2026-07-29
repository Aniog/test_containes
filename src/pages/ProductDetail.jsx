import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Shield, Truck, Zap, Tag, MapPin, Ruler, Clock, Utensils } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { fetchProductById } from '../api/products.js';
import { useCart } from '../context/CartContext.jsx';
import { PRODUCT_IMG_IDS } from '../lib/product-img-ids.js';

const difficultyColors = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-yellow-100 text-yellow-700',
  expert: 'bg-red-100 text-red-700',
};

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!loading && product) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [loading, product]);

  const handleAddToCart = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="bg-seafoam min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl aspect-square animate-pulse" />
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl h-8 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-seafoam min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🐌</div>
          <h2 className="text-2xl font-bold text-navy mb-2">Product not found</h2>
          <Link to="/shop" className="text-teal-ocean hover:underline">Back to shop</Link>
        </div>
      </div>
    );
  }

  const d = product.data;
  const titleId = `detail-title-${product.id}`;
  const descId = `detail-desc-${product.id}`;

  return (
    <div className="bg-seafoam min-h-screen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-slate-text hover:text-teal-ocean transition-colors text-sm mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            <div
              data-strk-bg-id={PRODUCT_IMG_IDS[product.id]}
              data-strk-bg={`[${descId}] [${titleId}]`}
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
              className="w-full rounded-3xl aspect-square shadow-lg bg-cover bg-center bg-seafoam"
              role="img"
              aria-label={d.name}
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {d.is_new && (
                <span className="bg-teal-ocean text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> New Arrival
                </span>
              )}
              {d.is_sale && (
                <span className="bg-coral text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" /> On Sale
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-start gap-3 mb-2">
              <h1 id={titleId} className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight flex-1">
                {d.name}
              </h1>
              {d.difficulty && (
                <span className={`text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0 mt-1 ${difficultyColors[d.difficulty]}`}>
                  {d.difficulty}
                </span>
              )}
            </div>

            {d.scientific_name && (
              <p className="text-lg text-muted-text italic mb-4">{d.scientific_name}</p>
            )}

            {/* Rating */}
            {d.rating && (
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-5 h-5 ${s <= Math.round(d.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-slate-text text-sm font-medium">{d.rating} ({d.review_count} reviews)</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-extrabold text-teal-ocean">${d.price.toFixed(2)}</span>
              {d.original_price && (
                <span className="text-xl text-muted-text line-through">${d.original_price.toFixed(2)}</span>
              )}
              {d.original_price && (
                <span className="bg-coral/10 text-coral text-sm font-bold px-2 py-0.5 rounded-lg">
                  Save ${(d.original_price - d.price).toFixed(2)}
                </span>
              )}
            </div>

            <p id={descId} className="text-slate-text leading-relaxed mb-8">{d.description}</p>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {d.origin && (
                <div className="bg-white rounded-xl p-3 flex items-center gap-2 border border-border-ocean">
                  <MapPin className="w-4 h-4 text-teal-ocean flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-text">Origin</p>
                    <p className="text-sm font-semibold text-navy">{d.origin}</p>
                  </div>
                </div>
              )}
              {d.size_cm && (
                <div className="bg-white rounded-xl p-3 flex items-center gap-2 border border-border-ocean">
                  <Ruler className="w-4 h-4 text-teal-ocean flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-text">Adult Size</p>
                    <p className="text-sm font-semibold text-navy">{d.size_cm} cm</p>
                  </div>
                </div>
              )}
              {d.lifespan_years && (
                <div className="bg-white rounded-xl p-3 flex items-center gap-2 border border-border-ocean">
                  <Clock className="w-4 h-4 text-teal-ocean flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-text">Lifespan</p>
                    <p className="text-sm font-semibold text-navy">{d.lifespan_years} year{d.lifespan_years !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              )}
              {d.diet && (
                <div className="bg-white rounded-xl p-3 flex items-center gap-2 border border-border-ocean">
                  <Utensils className="w-4 h-4 text-teal-ocean flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-text">Diet</p>
                    <p className="text-sm font-semibold text-navy">{d.diet}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Stock */}
            {d.stock > 0 ? (
              <p className="text-sm text-green-600 font-semibold mb-4">
                ✓ In Stock ({d.stock} available)
              </p>
            ) : (
              <p className="text-sm text-red-500 font-semibold mb-4">✗ Out of Stock</p>
            )}

            {/* Qty + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border-ocean rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-slate-text hover:bg-surface-alt transition-colors font-bold"
                >
                  −
                </button>
                <span className="px-4 py-3 font-bold text-navy min-w-[3rem] text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(d.stock, q + 1))}
                  className="px-4 py-3 text-slate-text hover:bg-surface-alt transition-colors font-bold"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={d.stock === 0}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-lg transition-colors ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-coral text-white hover:bg-coral-light'
                } disabled:opacity-40 disabled:cursor-not-allowed`}
              >
                <ShoppingCart className="w-5 h-5" />
                {added ? 'Added!' : 'Add to Cart'}
              </button>
            </div>

            {/* Guarantees */}
            <div className="flex flex-col gap-2 pt-6 border-t border-border-ocean">
              <div className="flex items-center gap-2 text-sm text-slate-text">
                <Shield className="w-4 h-4 text-teal-ocean flex-shrink-0" />
                48-hour live arrival guarantee
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-text">
                <Truck className="w-4 h-4 text-teal-ocean flex-shrink-0" />
                Overnight shipping in insulated packaging
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

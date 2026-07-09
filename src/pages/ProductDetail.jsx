import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductAccordion from '@/components/product/ProductAccordion';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={12}
            className={i <= Math.round(rating) ? 'text-gold fill-gold' : 'text-sand fill-sand'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3
                id={`related-${product.titleId}`}
                className="font-serif text-sm uppercase tracking-widest-sm text-ink group-hover:text-gold transition-colors mb-1"
              >
                {product.name}
              </h3>
              <p className="font-sans text-sm font-medium text-ink">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addItem } = useCart();

  const imgIds = [
    { id: product.imgId, query: `[pdp-desc] [pdp-title] gold jewelry` },
    { id: product.imgId2, query: `[pdp-title] gold jewelry worn model` },
    { id: `${product.imgId}-3`, query: `[pdp-title] gold jewelry detail close-up` },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <div className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-muted hover:text-gold transition-colors">
            <ChevronLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="font-sans text-xs text-whisper">/</span>
          <span className="font-sans text-xs text-stone capitalize">{product.category}</span>
        </div>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {imgIds.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-sand hover:border-stone'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
              {imgIds.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id="pdp-title" className="hidden">{product.name}</span>
            <span id="pdp-desc" className="hidden">{product.shortDescription}</span>

            {product.badge && (
              <span className="inline-block bg-obsidian text-ivory font-sans text-[9px] uppercase tracking-widest-sm font-medium px-2.5 py-1 mb-4 self-start">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest-sm font-light text-ink mb-2 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="font-serif text-3xl text-ink mb-6">${product.price}</p>

            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest-md font-medium text-stone mb-3">
                Finish: <span className="text-ink">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs uppercase tracking-widest-sm font-medium px-4 py-2 border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-ivory'
                        : 'border-sand text-stone hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest-md font-medium text-stone mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-ink transition-colors font-sans text-lg"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-ink transition-colors font-sans text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest-md font-medium py-4 transition-colors ${
                  addedFeedback
                    ? 'bg-obsidian text-ivory'
                    : 'bg-gold text-ivory hover:bg-gold-dark'
                }`}
              >
                <ShoppingBag size={14} strokeWidth={1.5} />
                {addedFeedback ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
              <button
                onClick={() => setWishlisted(v => !v)}
                aria-label="Add to wishlist"
                className={`w-14 flex items-center justify-center border transition-colors ${
                  wishlisted
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-sand text-stone hover:border-gold hover:text-gold'
                }`}
              >
                <Heart size={16} strokeWidth={1.5} className={wishlisted ? 'fill-gold' : ''} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 py-4 border-y border-sand">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className="text-gold text-xs">✦</span>
                  <span className="font-sans text-xs text-muted">{t}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <ProductAccordion product={product} />
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-linen">
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}

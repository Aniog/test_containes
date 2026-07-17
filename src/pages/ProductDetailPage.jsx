import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            fill={s <= Math.round(rating) ? '#C9A96E' : 'none'}
            className={s <= Math.round(rating) ? 'text-velmora-gold' : 'text-velmora-mist'}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="text-xs text-velmora-dust">({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-mist">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-medium text-velmora-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} strokeWidth={1.5} className="text-velmora-slate flex-shrink-0" />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} className="text-velmora-slate flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="text-sm text-velmora-slate leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(product?.id ?? 0, 4);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-velmora-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="text-xs uppercase tracking-widest text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, id2: `${product.imgId}-pdp-0` },
    { id: product.imgId2, id2: `${product.imgId}-pdp-1` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10">
          <Link to="/" className="text-xs text-velmora-dust hover:text-velmora-gold transition-colors">Home</Link>
          <span className="text-velmora-mist text-xs">/</span>
          <Link to="/shop" className="text-xs text-velmora-dust hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="text-velmora-mist text-xs">/</span>
          <span className="text-xs text-velmora-slate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={img.id2}
                  data-strk-img-id={img.id2}
                  data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={img.id2}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-velmora-linen flex-shrink-0 transition-all duration-200 ${
                    activeImg === i
                      ? 'ring-1 ring-velmora-gold'
                      : 'ring-1 ring-transparent hover:ring-velmora-mist'
                  }`}
                  style={{ width: 72, height: 96 }}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    data-strk-img-id={`${img.id2}-thumb`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-velmora-gold font-medium mb-3">
              {product.category}
            </span>
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-2xl md:text-3xl font-light uppercase tracking-[0.15em] text-velmora-obsidian leading-tight mb-3"
            >
              {product.name}
            </h1>

            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="font-serif text-2xl font-light text-velmora-obsidian mb-6">
              ${product.price}
            </p>

            <p id={`pdp-desc-${product.id}`} className="text-sm text-velmora-slate leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-medium text-velmora-obsidian mb-3">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-velmora-obsidian text-velmora-cream'
                        : 'border border-velmora-mist text-velmora-slate hover:border-velmora-stone hover:text-velmora-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest font-medium text-velmora-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-mist w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-slate hover:text-velmora-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-slate hover:text-velmora-obsidian transition-colors"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                added
                  ? 'bg-velmora-gold text-velmora-obsidian'
                  : 'bg-velmora-obsidian text-velmora-cream hover:bg-velmora-charcoal'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-velmora-mist">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="text-[10px] uppercase tracking-widest text-velmora-dust font-medium">
                  ✦ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="font-medium text-velmora-obsidian">Materials:</strong> {product.materials}</p>
                <p><strong className="font-medium text-velmora-obsidian">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
                <p className="mt-2">Returns accepted within 30 days of delivery. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-24 md:mt-32">
          <div className="hairline mb-12" />
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-obsidian tracking-wide">
              You May Also Like
            </h2>
            <Link to="/shop" className="text-xs uppercase tracking-widest text-velmora-slate hover:text-velmora-gold transition-colors font-medium hidden md:block">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

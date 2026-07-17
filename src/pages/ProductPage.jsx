import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={12}
            className={i <= Math.round(rating) ? 'text-champagne fill-champagne' : 'text-blush'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-blush">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest font-semibold text-velvet">
          {title}
        </span>
        {open ? <ChevronUp size={14} className="text-stone" /> : <ChevronDown size={14} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = PRODUCTS.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="font-serif text-2xl md:text-3xl font-light text-velvet text-center mb-10">
          You May Also Like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative overflow-hidden aspect-[3/4] bg-parchment mb-3">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span id={`related-${product.titleId}`} className="sr-only">{product.name}</span>
                <span id={`related-${product.descId}`} className="sr-only">{product.shortDesc}</span>
              </div>
              <p className="product-name text-xs text-velvet mb-1">{product.name}</p>
              <p className="font-sans text-sm font-semibold text-velvet">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.slug === slug);
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQty(1);
      setAdded(false);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-velvet mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-widest text-champagne hover:text-gold transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 font-sans text-xs text-stone hover:text-champagne transition-colors"
        >
          <ArrowLeft size={13} />
          Back
        </button>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative aspect-[4/5] bg-cream overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[product.imgId, product.img2Id, product.imgId + '-t3', product.img2Id + '-t4'].map((imgId, i) => (
                <div key={i} className="aspect-square bg-cream overflow-hidden cursor-pointer border-2 border-transparent hover:border-champagne transition-colors">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`thumb-${imgId}-${i}`}
                    data-strk-img={`[${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-champagne text-velvet font-sans text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-velvet text-ivory font-sans text-[9px] uppercase tracking-widest px-2 py-0.5 font-semibold">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="product-name text-2xl md:text-3xl text-velvet mb-2 leading-tight"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-2xl font-semibold text-velvet mb-3">
              ${product.price}
            </p>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="w-full h-px bg-blush my-6" />

            {/* Short desc */}
            <p
              id={product.descId}
              className="font-sans text-sm text-stone leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-widest text-velvet font-semibold mb-3">
                  Tone: <span className="capitalize text-stone font-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 font-sans text-xs uppercase tracking-widest font-medium border transition-all duration-200 capitalize ${
                        selectedVariant === v
                          ? 'bg-velvet text-ivory border-velvet'
                          : 'bg-transparent text-stone border-blush hover:border-stone'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-velvet font-semibold mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-blush w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-velvet">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                added
                  ? 'bg-velvet text-ivory'
                  : 'bg-champagne hover:bg-gold text-velvet'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] uppercase tracking-widest text-stone/70">
                  ✦ {t}
                </span>
              ))}
            </div>

            <div className="w-full h-px bg-blush my-6" />

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-velvet">Materials:</strong> {product.materials}</p>
                <p><strong className="text-velvet">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}

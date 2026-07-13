import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import RelatedProducts from '../components/product/RelatedProducts';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            style={{
              color: s <= Math.round(rating) ? '#C9A96E' : '#D4C9B8',
              fill: s <= Math.round(rating) ? '#C9A96E' : 'none',
            }}
          />
        ))}
      </div>
      <span className="text-xs text-velmora-ash">({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-sand">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-velmora-obsidian">{title}</span>
        {open ? (
          <ChevronUp size={14} className="text-velmora-ash flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-velmora-ash flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-velmora-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = getRelatedProducts(product?.id, 4);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-linen pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-obsidian">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-xs tracking-widest uppercase text-velmora-gold border-b border-velmora-gold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbImages = [
    { id: `${product.imgId}-t1`, imgId: `${product.imgId}-thumb1`, query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.imgId}-t2`, imgId: `${product.imgId}-thumb2`, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-t3`, imgId: `${product.imgId}-thumb3`, query: `[${product.titleId}] gold jewelry worn model` },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-linen min-h-screen">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-velmora-ash">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-obsidian">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.imgId}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-velmora-cream" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={`${product.imgId}-main-${activeThumb}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category badge */}
            <span className="text-[10px] tracking-widest uppercase text-velmora-gold mb-3 capitalize">
              {product.category}
            </span>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl font-light tracking-widest uppercase text-velmora-obsidian"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-3 text-2xl font-light text-velmora-obsidian">${product.price}</p>

            {/* Rating */}
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-velmora-sand my-6" />

            {/* Short description */}
            <p id={product.descId} className="text-sm text-velmora-stone leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mt-6">
                <p className="text-[10px] tracking-widest uppercase text-velmora-ash mb-3">
                  Tone: <span className="text-velmora-obsidian capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs font-medium tracking-widest uppercase border transition-colors duration-200 ${
                        selectedVariant === v
                          ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-linen'
                          : 'border-velmora-sand text-velmora-stone hover:border-velmora-obsidian hover:text-velmora-obsidian'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[10px] tracking-widest uppercase text-velmora-ash mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 text-center text-sm text-velmora-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-velmora-gold text-velmora-obsidian text-xs font-semibold tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300"
            >
              {added ? '✦ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="text-[10px] tracking-widest uppercase text-velmora-ash flex items-center gap-1">
                  <span className="text-velmora-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
                {product.details && (
                  <ul className="mt-3 space-y-1">
                    {product.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-velmora-gold mt-0.5">·</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts products={related} />
    </div>
  );
}

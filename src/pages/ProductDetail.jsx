import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={i < Math.round(rating) ? 'text-gold' : 'text-taupe-light'}
            fill={i < Math.round(rating) ? '#C9A96E' : 'none'}
          />
        ))}
      </div>
      <span className="text-xs text-taupe">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-semibold text-obsidian">
          {title}
        </span>
        {open ? <ChevronUp size={14} className="text-taupe" /> : <ChevronDown size={14} className="text-taupe" />}
      </button>
      {open && (
        <div className="pb-5 text-sm text-taupe leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="font-serif text-2xl md:text-3xl font-light text-obsidian mb-10 text-center">
          You May Also Like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-title-${product.id}`} className="text-xs tracking-widest uppercase font-semibold text-obsidian mb-1">
                {product.name}
              </p>
              <p id={`related-desc-${product.id}`} className="text-xs text-taupe mb-1">{product.shortDescription}</p>
              <p className="text-sm font-semibold text-obsidian">${product.price}</p>
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
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setActiveImg(0);
    setQuantity(1);
  }, [slug, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { thumbId: `thumb-0-${product.imgId}`,  mainId: `pdp-main-${product.imgId}`,  query: `[${product.descId}] [${product.titleId}]` },
    { thumbId: `thumb-1-${product.imgId2}`, mainId: `shop-alt-${product.imgId2}`, query: `[${product.titleId}] gold jewelry detail close up` },
    { thumbId: `thumb-2-shop-${product.imgId}`, mainId: `related-${product.imgId}`, query: `[${product.titleId}] worn on model editorial` },
  ];

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-4">
        <nav className="flex items-center gap-2 text-xs text-taupe">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-obsidian">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Hidden text anchors rendered first so ImageHelper can resolve queries */}
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.description}</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors cursor-pointer ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-taupe-light'
                  }`}
                >
                  <img
                    data-strk-img-id={img.thumbId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-ivory-dark aspect-[3/4]">
              <img
                data-strk-img-id={images[activeImg].mainId}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.tags.includes('bestseller') && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-obsidian text-[9px] tracking-widest uppercase font-bold px-3 py-1.5">
                    Bestseller
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Product info */}
            <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-3 capitalize">
              {product.category}
            </p>
            <h1
              className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-obsidian mb-3 leading-tight"
            >
              {product.name}
            </h1>
            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="my-5 h-px bg-gold/20" />

            <p className="font-serif text-3xl text-obsidian mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase font-semibold text-obsidian mb-3">
                  Tone: <span className="text-taupe capitalize font-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 text-xs tracking-widest uppercase font-medium border transition-colors ${
                        selectedVariant === v
                          ? 'bg-obsidian text-ivory border-obsidian'
                          : 'bg-transparent text-taupe border-taupe-light hover:border-obsidian hover:text-obsidian'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase font-semibold text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-taupe-light w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium text-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAdd}
                className="flex-1 bg-obsidian text-ivory text-xs tracking-widest uppercase font-semibold py-4 flex items-center justify-center gap-2 hover:bg-obsidian-light transition-colors"
              >
                <ShoppingBag size={14} />
                {added ? 'Added to Bag!' : 'Add to Bag'}
              </button>
              <button
                className="w-12 h-12 border border-taupe-light flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                aria-label="Save to wishlist"
              >
                <Heart size={16} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 py-4 border-y border-gold/20">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="text-[10px] tracking-widest uppercase text-taupe font-medium">
                  ✦ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-obsidian">Materials:</strong> {product.materials}</p>
                <p><strong className="text-obsidian">Care:</strong> {product.care}</p>
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

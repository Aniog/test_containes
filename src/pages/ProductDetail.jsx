import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest text-obsidian font-sans font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} className="text-mist flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-mist flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            fill={i < Math.floor(rating) ? '#C9A96E' : 'none'}
            stroke={i < Math.floor(rating) ? 'none' : '#C9A96E'}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="text-xs text-mist">{rating} ({count} reviews)</span>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setAdded(false);
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry detail close up` },
    { id: `${product.imgId}-3`, query: `[${product.titleId}] jewelry worn on model` },
  ];

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="section-container py-5 border-b border-linen">
        <div className="flex items-center gap-2 text-xs text-mist">
          <Link to="/" className="hover:text-gold transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors duration-200">Shop</Link>
          <span>/</span>
          <span className="text-obsidian">{product.name}</span>
        </div>
      </div>

      <div ref={containerRef} className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
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
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-cream">
              <img
                data-strk-img-id={`${images[activeImg].id}-main`}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="text-[9px] uppercase tracking-widest bg-obsidian text-ivory px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="text-[9px] uppercase tracking-widest bg-gold text-obsidian px-2 py-1">
                  New
                </span>
              )}
            </div>

            <h1
              id={product.titleId}
              className="font-serif text-3xl lg:text-4xl uppercase tracking-widest text-obsidian mb-3"
            >
              {product.name}
            </h1>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="flex items-baseline gap-3 mt-4 mb-6">
              <span className="font-serif text-3xl text-obsidian">${product.price}</span>
              <span className="text-xs text-mist">Free shipping worldwide</span>
            </div>

            <p id={product.descId} className="text-stone text-sm leading-relaxed mb-8 border-t border-linen pt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-mist mb-3">
                Tone: <span className="text-obsidian capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-linen text-stone hover:border-stone'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-mist mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian hover:bg-linen transition-colors duration-200"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-obsidian border-x border-linen">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian hover:bg-linen transition-colors duration-200"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                added
                  ? 'bg-obsidian text-ivory'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <p className="text-center text-xs text-mist mt-3">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p className="text-sm text-stone leading-relaxed">{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="flex flex-col gap-2 mb-4">
                  {product.details.map((d, i) => (
                    <li key={i} className="text-sm text-stone flex items-start gap-2">
                      <span className="text-gold mt-1 flex-shrink-0">✦</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-stone leading-relaxed">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="text-sm text-stone leading-relaxed">{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="bg-cream py-16 lg:py-20">
        <div className="section-container">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl lg:text-4xl text-obsidian">You May Also Like</h2>
            <Link to="/shop" className="btn-ghost text-mist hidden md:block">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-parchment mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p id={`related-${p.id}-title`} className="product-name text-sm">{p.name}</p>
                <p id={`related-${p.id}-desc`} className="text-xs text-mist mt-1">{p.shortDescription}</p>
                <p className="font-serif text-base text-obsidian mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

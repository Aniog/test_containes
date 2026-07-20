import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingBag, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
            className={i <= Math.round(rating) ? 'text-velmora-gold' : 'text-velmora-divider'}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-velmora-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest-sm text-velmora-ink">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-velmora-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-velmora-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId]);

  return (
    <section ref={containerRef} className="border-t border-velmora-divider py-16 md:py-20">
      <div className="text-center mb-10">
        <p className="font-inter text-xs uppercase tracking-widest-lg text-velmora-gold mb-2">You May Also Like</p>
        <h2 className="font-cormorant text-3xl md:text-4xl text-velmora-ink font-light">Complete the Look</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(product => (
          <article key={product.id} className="group cursor-pointer">
            <Link to={`/product/${product.slug}`}>
              <div className="relative overflow-hidden bg-velmora-parchment aspect-[3/4]">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product); }}
                    className="w-full bg-velmora-ink text-velmora-cream font-inter text-[10px] uppercase tracking-widest-sm py-3 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={11} strokeWidth={1.5} />
                    Quick Add
                  </button>
                </div>
              </div>
            </Link>
            <div className="mt-3">
              <Link to={`/product/${product.slug}`}>
                <h3 id={product.titleId} className="font-cormorant text-sm uppercase tracking-widest-sm text-velmora-ink hover:text-velmora-gold transition-colors leading-tight">
                  {product.name}
                </h3>
              </Link>
              <p id={product.descId} className="hidden">{product.shortDescription}</p>
              <span className="font-cormorant text-base text-velmora-stone">${product.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setSelectedVariant('Gold Tone');
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-velmora-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-widest-sm text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-ink transition-all duration-300">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Build gallery images (main + hover as 2 images)
  const galleryImgs = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]`, label: 'Main' },
    { id: `pdp-hover-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry worn on model close up`, label: 'Worn' },
    { id: `pdp-detail-${product.imgId}b`, query: `[pdp-title-${product.id}] gold jewelry detail texture`, label: 'Detail' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-inter text-xs text-velmora-stone hover:text-velmora-ink transition-colors">Home</Link>
          <span className="text-velmora-divider">/</span>
          <Link to="/shop" className="font-inter text-xs text-velmora-stone hover:text-velmora-ink transition-colors">Shop</Link>
          <span className="text-velmora-divider">/</span>
          <span className="font-inter text-xs text-velmora-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              {galleryImgs.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden flex-shrink-0 border-2 transition-colors duration-300 ${activeImg === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-divider'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${img.label}`}
                    className="w-full h-full object-cover bg-velmora-parchment"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-parchment aspect-[3/4]">
              {galleryImgs.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} ${img.label}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}

              {/* Nav arrows */}
              <button
                onClick={() => setActiveImg(i => (i - 1 + galleryImgs.length) % galleryImgs.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-velmora-cream/80 flex items-center justify-center hover:bg-velmora-cream transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} strokeWidth={1.5} className="text-velmora-ink" />
              </button>
              <button
                onClick={() => setActiveImg(i => (i + 1) % galleryImgs.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-velmora-cream/80 flex items-center justify-center hover:bg-velmora-cream transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={16} strokeWidth={1.5} className="text-velmora-ink" />
              </button>
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-inter text-[9px] uppercase tracking-widest-sm bg-velmora-gold text-velmora-ink px-2 py-0.5">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="font-inter text-[9px] uppercase tracking-widest-sm bg-velmora-ink text-velmora-cream px-2 py-0.5">New</span>
              )}
            </div>

            <h1 id={`pdp-title-${product.id}`} className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest-sm text-velmora-ink font-medium leading-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-center justify-between mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
              <span className="font-cormorant text-3xl text-velmora-ink">${product.price}</span>
            </div>

            <div className="w-full h-px bg-velmora-divider mb-6" />

            <p id={`pdp-desc-${product.id}`} className="font-inter text-sm text-velmora-stone leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest-sm text-velmora-ink mb-3">
                Tone: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex items-center gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs uppercase tracking-widest-sm px-5 py-2.5 border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'bg-velmora-ink text-velmora-cream border-velmora-ink'
                        : 'bg-transparent text-velmora-stone border-velmora-divider hover:border-velmora-ink hover:text-velmora-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest-sm text-velmora-ink mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-10 text-center font-inter text-sm text-velmora-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-velmora-ink font-inter text-xs uppercase tracking-widest-md py-4 flex items-center justify-center gap-3 hover:bg-velmora-gold-light transition-colors duration-300 mb-3"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-velmora-divider text-velmora-stone font-inter text-xs uppercase tracking-widest-sm py-4 hover:border-velmora-ink hover:text-velmora-ink transition-all duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mb-8 py-4 border-t border-b border-velmora-divider">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-[10px] uppercase tracking-widest-sm text-velmora-stone">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials} {product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}

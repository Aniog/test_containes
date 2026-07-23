import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-ink group-hover:text-gold transition-colors">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-manrope text-sm text-muted leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = PRODUCTS.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">Complete the Look</p>
          <h3 className="font-cormorant text-3xl text-ink font-light">You May Also Like</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-ink group-hover:text-gold transition-colors">
                {product.name}
              </p>
              <p id={`related-${product.descId}`} className="font-manrope text-xs text-muted mt-0.5 line-clamp-1">
                {product.shortDescription}
              </p>
              <p className="font-manrope text-sm text-ink mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const product = PRODUCTS.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
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
      <div className="min-h-screen flex items-center justify-center bg-parchment pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-widest uppercase text-gold hover:text-gold-dark">
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

  // Generate gallery image IDs
  const galleryImages = [
    { id: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}]`, ratio: '3x4' },
    { id: `pdp-worn-${product.hoverImgId}`, query: `[${product.titleId}] gold jewelry worn model`, ratio: '3x4' },
    { id: `pdp-detail-${product.imgId}-2`, query: `[${product.titleId}] jewelry detail close up`, ratio: '3x4' },
    { id: `pdp-lifestyle-${product.imgId}-3`, query: `[${product.titleId}] jewelry lifestyle flat lay`, ratio: '3x4' },
  ];

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-manrope text-xs text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-linen">·</span>
          <Link to="/shop" className="font-manrope text-xs text-muted hover:text-gold transition-colors">Shop</Link>
          <span className="text-linen">·</span>
          <span className="font-manrope text-xs text-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-16 md:h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-linen aspect-[3/4]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={galleryImages[activeThumb].id}
                data-strk-img={galleryImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-ivory font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="border border-ink text-ink font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-ink font-medium leading-tight mb-2"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-manrope text-2xl text-ink mb-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-muted leading-relaxed mb-6 border-t border-linen pt-5"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-ink mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 font-manrope text-xs tracking-widest uppercase border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian text-ivory border-obsidian'
                        : 'bg-transparent text-ink border-linen hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-manrope text-sm text-ink border-x border-linen">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-manrope text-xs tracking-widest uppercase py-4 transition-all duration-300 ${
                added
                  ? 'bg-obsidian text-ivory'
                  : 'bg-gold text-ivory hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] tracking-widest uppercase text-muted flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
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

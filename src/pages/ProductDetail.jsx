import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            style={i <= Math.round(rating)
              ? { fill: '#C9A96E', color: '#C9A96E' }
              : { fill: '#E2D9CC', color: '#E2D9CC' }
            }
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-obsidian">{title}</span>
        <ChevronDown
          size={16}
          className={`text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-manrope text-sm text-stone leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs uppercase tracking-widest text-champagne border-b border-champagne pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgIds = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]`, ratio: '3x4' },
    { id: `pdp-alt1-${product.imgId}`, query: `[pdp-title-${product.id}] gold jewelry worn model close up`, ratio: '3x4' },
    { id: `pdp-alt2-${product.imgId}`, query: `[pdp-title-${product.id}] gold jewelry detail texture`, ratio: '3x4' },
    { id: `pdp-alt3-${product.imgId}`, query: `[pdp-title-${product.id}] gold jewelry flat lay`, ratio: '3x4' },
  ];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-stone hover:text-champagne transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </button>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {imgIds.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === i ? 'border-champagne' : 'border-transparent hover:border-divider'
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
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory relative">
              {imgIds.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-manrope text-[9px] uppercase tracking-widest bg-champagne text-obsidian px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-manrope text-[9px] uppercase tracking-widest bg-obsidian text-ivory px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-obsidian mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Price */}
            <p className="font-manrope text-2xl font-medium text-obsidian mb-6">
              ${product.price}
            </p>

            {/* Short desc */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-manrope text-sm text-stone leading-relaxed mb-8 border-b border-divider pb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-stone mb-3">
                Finish: <span className="text-obsidian">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-wider px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-champagne bg-champagne text-obsidian'
                        : 'border-divider text-stone hover:border-champagne hover:text-champagne'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs uppercase tracking-widest text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-obsidian">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-champagne text-obsidian font-manrope text-xs uppercase tracking-widest py-5 flex items-center justify-center gap-3 hover:bg-champagne-dark transition-all duration-300 mb-3"
            >
              <ShoppingBag size={16} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            <button className="w-full border border-obsidian text-obsidian font-manrope text-xs uppercase tracking-widest py-4 hover:bg-obsidian hover:text-ivory transition-all duration-300 mb-8">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-divider">
              {['Free Worldwide Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className="text-champagne text-xs">✦</span>
                  <span className="font-manrope text-[10px] uppercase tracking-wider text-stone">{t}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-obsidian">Material:</strong> {product.material}</p>
                <p className="mb-2">To keep your Velmora jewelry looking its best:</p>
                <ul className="list-disc list-inside space-y-1 text-stone">
                  <li>Remove before swimming, bathing, or exercising</li>
                  <li>Store in the provided pouch or a dry, cool place</li>
                  <li>Avoid contact with perfume, lotions, and oils</li>
                  <li>Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3"><strong className="text-obsidian">Shipping:</strong> Free worldwide shipping on all orders. Estimated delivery 5–10 business days.</p>
                <p><strong className="text-obsidian">Returns:</strong> We offer hassle-free 30-day returns on all unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <RelatedProducts products={related} />
    </div>
  );
}

function RelatedProducts({ products: relatedProducts }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
            You May Also Like
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group block">
              <div className="aspect-[3/4] overflow-hidden bg-parchment mb-3 relative">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p id={`related-title-${product.id}`} className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian mb-1">
                {product.name}
              </p>
              <p id={`related-desc-${product.id}`} className="hidden">{product.shortDesc}</p>
              <p className="font-manrope text-sm font-medium text-obsidian">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

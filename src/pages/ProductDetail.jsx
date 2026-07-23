import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ivory-dark">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans uppercase tracking-widest text-obsidian font-medium">
          {title}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-taupe transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm font-sans text-taupe leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-obsidian mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link
                to={`/product/${product.slug}`}
                className="block relative overflow-hidden bg-ivory-dark aspect-[3/4]"
              >
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover product-img-zoom"
                />
                <span id={`related-title-${product.id}`} className="sr-only">{product.name}</span>
                <span id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
              </Link>
              <div className="pt-3">
                <Link to={`/product/${product.slug}`}>
                  <p className="font-serif text-xs uppercase tracking-widest2 text-obsidian hover:text-gold transition-colors">
                    {product.name}
                  </p>
                </Link>
                <p className="text-sm font-sans font-medium text-obsidian mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveThumb(0);
      setAdded(false);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-obsidian">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-xs font-sans uppercase tracking-widest text-gold hover:text-gold-dark">
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

  // Generate thumbnail image IDs
  const thumbIds = [
    { imgId: `pdp-main-${product.imgId}`, img2Id: `pdp-thumb1-${product.img2Id}` },
    { imgId: `pdp-alt1-${product.img2Id}`, img2Id: `pdp-thumb2-${product.imgId}` },
    { imgId: `pdp-alt2-${product.imgId}-b`, img2Id: `pdp-thumb3-${product.img2Id}-b` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-widest text-taupe">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-obsidian">{product.name}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible scroll-hide">
              {thumbIds.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={i === 0 ? `pdp-thumb-main-${product.id}` : `pdp-thumb-alt${i}-${product.id}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry ${i === 0 ? 'product flat lay' : i === 1 ? 'worn on model' : 'detail close up'}`}
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
            <div className="flex-1 relative overflow-hidden bg-ivory-dark aspect-[3/4]">
              <img
                data-strk-img-id={`pdp-main-hero-${product.id}-${activeThumb}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry ${activeThumb === 0 ? 'product photography' : activeThumb === 1 ? 'worn on model lifestyle' : 'detail texture close up'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover product-img-zoom"
              />
              <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-[10px] font-sans uppercase tracking-widest text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest2 text-obsidian leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'none' : '#C9A96E'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-xs font-sans text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl font-light text-obsidian mt-4">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="mt-4 text-sm font-sans text-taupe leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="hairline my-6" />

            {/* Variant selector */}
            <div>
              <p className="text-[10px] font-sans uppercase tracking-widest text-obsidian mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex items-center gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-sans uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-ivory-dark text-taupe hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[10px] font-sans uppercase tracking-widest text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-ivory-dark w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian hover:bg-ivory-dark transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans font-medium text-obsidian border-x border-ivory-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-obsidian hover:bg-ivory-dark transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full py-4 text-xs uppercase tracking-widest font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-obsidian text-ivory'
                  : 'bg-gold text-obsidian hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-4 flex items-center justify-center gap-6">
              <span className="text-[10px] font-sans text-taupe-light uppercase tracking-widest">Free Shipping</span>
              <span className="w-px h-3 bg-ivory-dark" />
              <span className="text-[10px] font-sans text-taupe-light uppercase tracking-widest">30-Day Returns</span>
              <span className="w-px h-3 bg-ivory-dark" />
              <span className="text-[10px] font-sans text-taupe-light uppercase tracking-widest">Secure Checkout</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-obsidian font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-obsidian font-medium">Care:</strong> {product.care}</p>
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

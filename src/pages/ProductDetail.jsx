import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian font-medium">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-ash flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-ash flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-ash leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs uppercase tracking-[0.12em] text-gold border-b border-gold pb-0.5">
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

  // Create thumbnail image IDs
  const thumbIds = [
    { imgId: product.imgId, img2Id: `${product.imgId}-t1` },
    { imgId: product.img2Id, img2Id: `${product.img2Id}-t2` },
    { imgId: `${product.imgId}-t3`, img2Id: `${product.imgId}-t3b` },
    { imgId: `${product.imgId}-t4`, img2Id: `${product.imgId}-t4b` },
  ];

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-manrope text-[10px] uppercase tracking-[0.1em] text-dust hover:text-gold transition-colors">
            Home
          </Link>
          <span className="text-dust text-xs">/</span>
          <Link to="/shop" className="font-manrope text-[10px] uppercase tracking-[0.1em] text-dust hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-dust text-xs">/</span>
          <span className="font-manrope text-[10px] uppercase tracking-[0.1em] text-ash">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbIds.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${thumb.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.titleId}] gold jewelry ${product.categoryLabel}`}
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
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-linen relative">
              <img
                data-strk-img-id={`${product.imgId}-main-active`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Hidden text for image query */}
              <span id={product.titleId} className="sr-only">{product.name}</span>
              <span id={product.descId} className="sr-only">{product.shortDescription}</span>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <p className="font-manrope text-[10px] uppercase tracking-[0.14em] text-gold mb-2">
              {product.categoryLabel}
            </p>
            <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-obsidian font-medium mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-divider fill-divider'}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-ash">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-obsidian mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="font-manrope text-sm text-ash leading-relaxed mb-7 border-b border-divider pb-7">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-ash mb-3">
                Finish: <span className="text-obsidian font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-divider text-ash hover:border-ash'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-ash mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ash hover:text-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ash hover:text-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 font-manrope text-xs uppercase tracking-[0.14em] py-4 transition-all duration-300 font-medium mb-3 ${
                added
                  ? 'bg-obsidian text-ivory'
                  : 'bg-gold text-obsidian hover:bg-gold-light'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-2 mb-8">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] uppercase tracking-[0.1em] text-dust flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-divider">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To care for your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Orders are processed within 1–2 business days and delivered within 5–10 business days internationally. We offer free returns within 30 days of delivery for unworn items in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-linen py-16 md:py-20" ref={relatedRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

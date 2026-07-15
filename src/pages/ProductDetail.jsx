import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone/15">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} className="text-stone flex-shrink-0" />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} className="text-stone flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-sans text-sm text-stone font-light leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Link ref={containerRef} to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span id={`related-title-${product.id}`} className="sr-only">{product.name}</span>
        <span id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
      </div>
      <p className="font-serif text-xs uppercase tracking-widest text-obsidian group-hover:text-gold transition-colors">
        {product.name}
      </p>
      <p className="font-sans text-sm text-obsidian mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImage(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-cream pt-20">
        <p className="font-serif text-2xl text-obsidian">Product not found</p>
        <button
          onClick={() => navigate('/shop')}
          className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const images = [
    { imgId: `pdp-main-${product.imgId}`, imgId2: product.imgId, label: 'Main view' },
    { imgId: `pdp-alt-${product.imgId2}`, imgId2: product.imgId2, label: 'Alternate view' },
    { imgId: `pdp-detail-${product.imgId}`, imgId2: product.imgId, label: 'Detail view' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-sans text-xs text-mist hover:text-gold transition-colors">Home</Link>
          <span className="text-stone/30 text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-mist hover:text-gold transition-colors">Shop</Link>
          <span className="text-stone/30 text-xs">/</span>
          <span className="font-sans text-xs text-obsidian">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${i}-${product.id}-${img.imgId}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
              <img
                data-strk-img-id={`pdp-main-active-${product.id}-${activeImage}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-obsidian text-ivory px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-gold text-obsidian px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-obsidian font-light mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'none' : '#C9A96E'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-mist">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-obsidian mb-5">${product.price}</p>

            {/* Short description */}
            <p className="font-sans text-sm text-stone font-light leading-relaxed mb-6 border-b border-stone/15 pb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">
                  Finish: <span className="text-obsidian">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-obsidian'
                          : 'border-stone/30 text-stone hover:border-gold hover:text-gold'
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
              <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-stone/30 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-gold hover:bg-linen transition-colors"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-obsidian border-x border-stone/30">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-gold hover:bg-linen transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-sans text-xs tracking-widest uppercase py-4 transition-all duration-300 mb-3 ${
                added
                  ? 'bg-gold text-obsidian'
                  : 'bg-obsidian text-ivory hover:bg-charcoal'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button className="w-full border border-stone/30 text-stone font-sans text-xs tracking-widest uppercase py-4 hover:border-gold hover:text-gold transition-all duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Material */}
            <p className="font-sans text-xs text-mist mb-8">
              <span className="text-stone">Materials:</span> {product.material}
            </p>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.material}</p>
                <ul className="list-disc list-inside space-y-1 text-stone/80">
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Clean gently with a soft dry cloth</li>
                  <li>Remove before swimming or exercising</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2 text-stone/80">
                  <li><span className="text-obsidian font-medium">Free shipping</span> on all orders worldwide</li>
                  <li>Standard delivery: 3–7 business days</li>
                  <li>Express delivery: 1–3 business days</li>
                  <li><span className="text-obsidian font-medium">30-day returns</span> — unworn items in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28 pt-12 border-t border-stone/15">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

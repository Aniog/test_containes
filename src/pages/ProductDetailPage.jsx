import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-parchment">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-sans font-medium text-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-text-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-text-muted flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <div className="text-sm text-text-secondary font-sans leading-relaxed">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const product = getProductBySlug(slug);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const related = products.filter((p) => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
    setQuantity(1);
    if (product) setSelectedVariant(product.variants[0]);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase font-sans text-gold border-b border-gold pb-0.5">
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

  const images = [
    { imgId: product.imgId, titleId: product.titleId, descId: product.descId, label: 'main' },
    { imgId: product.imgId2, titleId: `${product.titleId}-alt`, descId: `${product.descId}-alt`, label: 'worn' },
  ];

  return (
    <div className="bg-ivory min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans text-text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft size={13} />
            Back
          </button>
          <span className="text-parchment">/</span>
          <Link to="/shop" className="text-xs tracking-widest uppercase font-sans text-text-muted hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-parchment">/</span>
          <span className="text-xs tracking-widest uppercase font-sans text-text-secondary truncate max-w-[160px]">
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={img.imgId}
                  onClick={() => setActiveImg(idx)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-ivory-dark">
              {images.map((img, idx) => (
                <div key={img.imgId} className={`absolute inset-0 transition-opacity duration-400 ${activeImg === idx ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Hidden text for image query */}
                  <span id={img.titleId} className="sr-only">{product.name}</span>
                  <span id={img.descId} className="sr-only">{product.shortDescription}</span>
                  <img
                    data-strk-img-id={img.imgId}
                    data-strk-img={`[${img.descId}] [${img.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.tags.includes('bestseller') && (
                  <span className="bg-gold text-obsidian text-[9px] tracking-widest uppercase font-sans font-medium px-2 py-0.5">
                    Bestseller
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-700 text-ivory text-[9px] tracking-widest uppercase font-sans font-medium px-2 py-0.5">
                    Sale
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase font-sans text-gold mb-2">
                {product.material}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-obsidian tracking-widest uppercase font-light leading-tight mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-parchment fill-parchment'}
                    />
                  ))}
                </div>
                <span className="text-sm font-sans text-text-secondary">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl text-obsidian">${product.price}</span>
                {product.originalPrice && (
                  <span className="font-sans text-lg text-text-muted line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            <div className="w-full h-px bg-parchment mb-6" />

            {/* Short description */}
            <p className="text-sm text-text-secondary font-sans leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase font-sans font-medium text-obsidian mb-3">
                  Finish: <span className="text-gold">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 text-xs tracking-widest uppercase font-sans border transition-colors duration-200 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-obsidian'
                          : 'border-parchment text-text-secondary hover:border-gold hover:text-gold'
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
              <p className="text-xs tracking-widest uppercase font-sans font-medium text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-parchment w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 py-4 font-sans text-xs tracking-widest uppercase transition-colors duration-300 mb-3 ${
                added
                  ? 'bg-gold text-obsidian'
                  : 'bg-obsidian text-ivory hover:bg-obsidian-light'
              }`}
            >
              <ShoppingBag size={16} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-2 mb-6">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="text-[11px] tracking-wide font-sans text-text-muted flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            <div className="w-full h-px bg-parchment mb-2" />

            {/* Accordions */}
            <Accordion title="Description">
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
              <p><strong>Care:</strong> {product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-2">Free worldwide shipping on all orders. Delivered in 3–7 business days.</p>
              <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="bg-ivory-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              You May Also Like
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

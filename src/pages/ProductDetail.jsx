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
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-ink">{title}</span>
        {open ? <ChevronUp size={14} className="text-ink-muted" /> : <ChevronDown size={14} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-ink-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <p className="font-cormorant text-sm uppercase tracking-[0.12em] text-ink">{product.name}</p>
        <p className="font-manrope text-sm text-ink mt-1">${product.price}</p>
      </div>
    </Link>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-ink-muted font-light">Product not found</p>
          <button onClick={() => navigate('/shop')} className="mt-4 font-manrope text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgIds = [product.imgId, product.imgId2];
  const imgIds2 = [`${product.imgId}-alt1`, `${product.imgId}-alt2`];

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-manrope text-xs text-ink-faint hover:text-gold transition-colors">Home</Link>
          <span className="text-ink-faint text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-ink-faint hover:text-gold transition-colors">Shop</Link>
          <span className="text-ink-faint text-xs">/</span>
          <span className="font-manrope text-xs text-ink-muted">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
              {[product.imgId, product.imgId2].map((imgId, i) => (
                <button
                  key={imgId}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`${imgId}-thumb`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="80"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-square md:aspect-[3/4] overflow-hidden bg-linen">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`pdp-main-${product.id}-${activeImg}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Hidden text for image queries */}
            <span id={`pdp-title-${product.id}`} className="sr-only">{product.name} {product.shortDescription}</span>
            <span id={`pdp-desc-${product.id}`} className="sr-only">{product.description}</span>

            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.map((tag) => (
                <span key={tag} className="font-manrope text-[9px] tracking-widest uppercase bg-linen text-ink-muted px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-ink font-medium leading-tight mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} className={i < Math.floor(product.rating) ? 'fill-current text-gold' : 'fill-current text-linen'} />
                ))}
              </div>
              <span className="font-manrope text-xs text-ink-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-ink mb-5">${product.price}</p>

            {/* Description */}
            <p className="font-manrope text-sm text-ink-muted leading-relaxed mb-6 border-t border-linen pt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-5">
              <p className="font-manrope text-xs tracking-widest uppercase text-ink-muted mb-3">
                Finish: <span className="text-ink">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-wide px-4 py-2 border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-widest uppercase text-ink-muted mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-gold transition-colors border-r border-linen"
                >
                  <Minus size={12} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-gold transition-colors border-l border-linen"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-obsidian text-cream font-manrope text-xs tracking-widest uppercase py-4 hover:bg-charcoal transition-colors flex items-center justify-center gap-3 mb-3"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button className="w-full border border-linen text-ink-muted font-manrope text-xs tracking-widest uppercase py-4 hover:border-gold hover:text-gold transition-colors mb-6">
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <strong>Materials:</strong> {product.materials}<br /><br />
                <strong>Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-linen mt-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl text-ink font-light mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

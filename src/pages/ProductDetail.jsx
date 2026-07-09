import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { getProductBySlug, products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            strokeWidth={1}
            style={s <= Math.round(rating) ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#E8E3DA', fill: '#E8E3DA' }}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-mist">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-[0.15em] text-ink">{title}</span>
        {open ? (
          <ChevronUp size={16} strokeWidth={1.5} className="text-mist flex-shrink-0" />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} className="text-mist flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-mist leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setAdded(false);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-mist">Product not found</p>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-[0.15em] text-gold mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const imgIds = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 lg:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-mist hover:text-gold transition-colors">Home</Link>
          <span className="text-divider text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-mist hover:text-gold transition-colors">Shop</Link>
          <span className="text-divider text-xs">/</span>
          <span className="font-sans text-xs text-ink">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Image Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden bg-linen">
              {activeImg === 0 ? (
                <img
                  data-strk-img-id="pdp-main-img"
                  data-strk-img="[pdp-product-desc] [pdp-product-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  data-strk-img-id="pdp-alt-img"
                  data-strk-img="gold jewelry worn model [pdp-product-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} worn`}
                  className="w-full h-full object-cover"
                />
              )}
              <span id="pdp-product-title" className="sr-only">{product.name}</span>
              <span id="pdp-product-desc" className="sr-only">{product.description}</span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveImg(0)}
                className={`w-16 h-16 overflow-hidden border-2 transition-colors ${activeImg === 0 ? 'border-gold' : 'border-transparent'}`}
              >
                <img
                  data-strk-img-id="pdp-thumb-0"
                  data-strk-img="[pdp-product-desc] [pdp-product-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="120"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="View 1"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveImg(1)}
                className={`w-16 h-16 overflow-hidden border-2 transition-colors ${activeImg === 1 ? 'border-gold' : 'border-transparent'}`}
              >
                <img
                  data-strk-img-id="pdp-thumb-1"
                  data-strk-img="gold jewelry worn model [pdp-product-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="120"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="View 2"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-sans text-[10px] uppercase tracking-[0.15em] bg-gold text-white px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-sans text-[10px] uppercase tracking-[0.15em] bg-obsidian text-parchment px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl lg:text-4xl uppercase tracking-[0.15em] font-light text-ink leading-tight">
              {product.name}
            </h1>

            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="font-sans text-2xl font-medium text-ink mt-4">
              ${product.price}
            </p>

            <p className="font-sans text-sm text-mist leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink mb-3">
                Finish: <span className="text-mist font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-white'
                        : 'border-divider text-mist hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-ink mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-divider w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors border-r border-divider"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors border-l border-divider"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full py-4 font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                added
                  ? 'bg-obsidian text-parchment'
                  : 'bg-gold text-white hover:bg-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-5 pt-5 border-t border-divider">
              <span className="font-sans text-[11px] text-mist">Free Shipping</span>
              <span className="w-px h-3 bg-divider" />
              <span className="font-sans text-[11px] text-mist">30-Day Returns</span>
              <span className="w-px h-3 bg-divider" />
              <span className="font-sans text-[11px] text-mist">Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}. {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-divider bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl font-light text-ink mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { StarRating } from '@/components/shared/StarRating';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-stone">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-mink" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-mink" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm font-sans text-velmora-charcoal leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-20 border-t border-velmora-stone">
      <div className="mb-10">
        <p className="text-xs font-sans uppercase tracking-widest text-velmora-gold mb-3">
          Complete the Look
        </p>
        <h2 className="font-serif font-light text-3xl text-velmora-obsidian">
          You May Also Like
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group block">
            <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-4">
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
            <h3
              id={`related-title-${product.id}`}
              className="font-serif text-xs uppercase tracking-product text-velmora-obsidian group-hover:text-velmora-gold transition-colors"
            >
              {product.name}
            </h3>
            <p id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
            <p className="font-serif text-sm text-velmora-charcoal mt-1">{formatPrice(product.price)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
      setAdded(false);
      setQuantity(1);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-ivory">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="text-xs font-sans uppercase tracking-widest text-velmora-gold border-b border-velmora-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const imgIds = [product.imgId, product.imgId2];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-velmora-ivory min-h-screen pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-[10px] font-sans uppercase tracking-widest text-velmora-mink">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative overflow-hidden bg-velmora-cream aspect-square md:aspect-[4/5]">
              {imgIds.map((imgId, i) => (
                <img
                  key={imgId}
                  data-strk-img-id={`pdp-main-${imgId}-${i}`}
                  data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {imgIds.map((imgId, i) => (
                <button
                  key={imgId}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 overflow-hidden bg-velmora-cream border transition-colors ${
                    activeImg === i ? 'border-velmora-gold' : 'border-velmora-stone hover:border-velmora-mink'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${imgId}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry thumbnail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="text-[9px] font-sans uppercase tracking-widest bg-velmora-obsidian text-velmora-ivory px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="text-[9px] font-sans uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif font-light text-3xl md:text-4xl uppercase tracking-product text-velmora-obsidian mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} size="md" />
              <span className="text-xs font-sans text-velmora-mink">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-obsidian mb-5">
              {formatPrice(product.price)}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-velmora-charcoal leading-relaxed mb-8 border-b border-velmora-stone pb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal mb-3">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs font-sans uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone text-velmora-charcoal hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-stone w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mink hover:text-velmora-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-sans text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mink hover:text-velmora-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 text-xs font-sans uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                  added
                    ? 'bg-velmora-charcoal text-velmora-ivory'
                    : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-dark'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
              <button
                className="w-12 h-12 border border-velmora-stone flex items-center justify-center text-velmora-mink hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Save to wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-velmora-stone">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="text-[10px] font-sans uppercase tracking-widest text-velmora-mink flex items-center gap-1.5">
                  <span className="text-velmora-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="font-medium text-velmora-obsidian">Materials:</strong> {product.materials}</p>
                <p><strong className="font-medium text-velmora-obsidian">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Standard delivery 3–7 business days. Express available at checkout.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}

import { useState, useRef, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-wider text-charcoal font-medium"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-40 pb-4' : 'max-h-0'
        )}
      >
        <div className="font-sans text-sm text-warm-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < Math.round(rating) ? 'fill-gold text-gold' : 'text-divider'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-warm-gray">
        {rating} ({count} reviews)
      </span>
    </div>
  );
}

function RelatedProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <article className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden">
          <img
            alt={product.name}
            className="w-full h-full object-cover"
            data-strk-img-id={`related-${product.id}`}
            data-strk-img={`[${product.id}-name] gold jewelry product close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </Link>
      <div className="mt-3 text-center">
        <Link to={`/product/${product.slug}`}>
          <h4 className="font-sans text-xs uppercase tracking-widest-xl text-charcoal font-medium hover:text-gold transition-colors">
            {product.name}
          </h4>
        </Link>
        <p className="font-serif text-sm text-charcoal mt-1">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter(p => p.id !== product.id).slice(0, 4);
  }, [product]);

  const allImages = useMemo(() => {
    if (!product) return [];
    return [product.imageIds.primary, product.imageIds.secondary, ...product.imageIds.gallery];
  }, [product]);

  useEffect(() => {
    setActiveImage(0);
    setSelectedVariant('Gold');
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [product, activeImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
        <div className="text-center">
          <h1 className="font-serif text-heading text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory pt-20 md:pt-24" ref={containerRef}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="font-sans text-xs text-warm-gray mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-cream rounded-sm overflow-hidden mb-4">
              <img
                alt={product.name}
                className="w-full h-full object-cover"
                data-strk-img-id={allImages[activeImage]}
                data-strk-img={`[pdp-name] [pdp-desc] gold jewelry product detailed view`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {allImages.map((imgId, index) => (
                <button
                  key={imgId}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'w-16 h-16 md:w-20 md:h-20 bg-cream rounded-sm overflow-hidden border-2 transition-colors',
                    activeImage === index ? 'border-gold' : 'border-transparent hover:border-divider'
                  )}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gold/10 to-rose-gold/10" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1
              id="pdp-name"
              className="font-serif text-2xl md:text-3xl text-charcoal uppercase tracking-wider"
            >
              {product.name}
            </h1>

            <p className="font-serif text-xl text-charcoal mt-2">
              {formatPrice(product.price)}
            </p>

            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p id="pdp-desc" className="font-sans text-sm text-warm-gray leading-relaxed mt-5">
              {product.description}
            </p>

            <div className="hairline my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal font-medium mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-2.5 font-sans text-xs uppercase tracking-wider border transition-all',
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-divider text-charcoal hover:border-charcoal'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-wider text-charcoal font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center gap-0 border border-divider rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="font-sans text-sm text-charcoal w-10 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal hover:text-gold transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full btn-primary text-center"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <div className="hairline my-6" />

            {/* Accordions */}
            <div>
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p><strong>Material:</strong> {product.material}</p>
                <p className="mt-2"><strong>Care:</strong> {product.careInstructions}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Items ship within 1-2 business days.</p>
                <p className="mt-2">30-day returns accepted. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div className="mt-16 md:mt-20">
          <h2 className="section-title">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {product.reviews.map((review, i) => (
              <div key={i} className="bg-cream rounded-sm p-6">
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={review.rating} />
                </div>
                <p className="font-sans text-sm text-charcoal italic mb-3">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-sans text-xs uppercase tracking-wider text-warm-gray">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-20">
          <h2 className="section-title">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {relatedProducts.map(p => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

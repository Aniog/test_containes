import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share2, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/StarRating';
import { QuantitySelector } from '@/components/QuantitySelector';
import { Accordion } from '@/components/Accordion';
import { ProductCard } from '@/components/ProductCard';

const placeholderSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

// Image queries are inlined below to keep build-time image resolution static.

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.id === productId);

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0]);
      setQuantity(1);
      setAdded(false);
      setActiveImage(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [productId, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [productId]);

  if (!product) {
    return (
      <div className="mx-auto max-w-[1600px] px-5 py-32 text-center md:px-10">
        <h1 className="font-serif text-3xl text-velmora-charcoal">Product Not Found</h1>
        <button
          type="button"
          onClick={() => navigate('/shop')}
          className="mt-6 bg-velmora-charcoal px-8 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const titleId = 'pd-title';
  const descId = 'pd-desc';

  const handleAdd = () => {
    addToCart(product, quantity, selectedTone);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.details} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div ref={containerRef}>
      <div className="mx-auto max-w-[1600px] px-5 py-8 pt-24 md:px-10 md:pt-28">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-warm-gray transition-colors hover:text-velmora-gold"
        >
          <ChevronLeft size={14} />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream-dark">
              <img
                data-strk-img-id="pd-main"
                data-strk-img="[pd-title] [pd-desc] gold jewelry product elegant"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={cn(
                  'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                  activeImage === 0 ? 'opacity-100' : 'opacity-0'
                )}
              />
              <img
                data-strk-img-id="pd-worn"
                data-strk-img="[pd-title] [pd-desc] gold jewelry worn model"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} worn`}
                className={cn(
                  'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                  activeImage === 1 ? 'opacity-100' : 'opacity-0'
                )}
              />
              <img
                data-strk-img-id="pd-detail"
                data-strk-img="[pd-title] [pd-desc] gold jewelry detail closeup"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} detail`}
                className={cn(
                  'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                  activeImage === 2 ? 'opacity-100' : 'opacity-0'
                )}
              />
              <div className="absolute bottom-4 right-4 flex gap-2 lg:hidden">
                <button
                  type="button"
                  onClick={() => setActiveImage((i) => (i === 0 ? 2 : i - 1))}
                  className="flex h-9 w-9 items-center justify-center bg-white/90 text-velmora-charcoal backdrop-blur-sm"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveImage((i) => (i === 2 ? 0 : i + 1))}
                  className="flex h-9 w-9 items-center justify-center bg-white/90 text-velmora-charcoal backdrop-blur-sm"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="hidden grid-cols-3 gap-4 lg:grid">
              <button
                type="button"
                onClick={() => setActiveImage(0)}
                className={cn(
                  'aspect-square overflow-hidden bg-velmora-cream-dark ring-1 ring-transparent transition-all',
                  activeImage === 0 && 'ring-velmora-gold'
                )}
              >
                <img
                  data-strk-img-id="pd-thumb-1"
                  data-strk-img="[pd-title] [pd-desc] gold jewelry product elegant"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view 1`}
                  className="h-full w-full object-cover"
                />
              </button>
              <button
                type="button"
                onClick={() => setActiveImage(1)}
                className={cn(
                  'aspect-square overflow-hidden bg-velmora-cream-dark ring-1 ring-transparent transition-all',
                  activeImage === 1 && 'ring-velmora-gold'
                )}
              >
                <img
                  data-strk-img-id="pd-thumb-2"
                  data-strk-img="[pd-title] [pd-desc] gold jewelry worn model"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view 2`}
                  className="h-full w-full object-cover"
                />
              </button>
              <button
                type="button"
                onClick={() => setActiveImage(2)}
                className={cn(
                  'aspect-square overflow-hidden bg-velmora-cream-dark ring-1 ring-transparent transition-all',
                  activeImage === 2 && 'ring-velmora-gold'
                )}
              >
                <img
                  data-strk-img-id="pd-thumb-3"
                  data-strk-img="[pd-title] [pd-desc] gold jewelry detail closeup"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view 3`}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-8">
            <p className="font-sans text-xs font-medium uppercase tracking-widest-xl text-velmora-gold">
              {product.material}
            </p>
            <h1
              id={titleId}
              className="mt-3 font-serif text-3xl uppercase tracking-widest-xl text-velmora-charcoal md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={descId} className="sr-only" aria-hidden="true">
              {product.description}
            </p>

            <div className="mt-4 flex items-center gap-4">
              <span className="font-sans text-2xl font-medium text-velmora-charcoal">
                {formatPrice(product.price)}
              </span>
              <div className="h-5 w-px bg-velmora-stone" />
              <StarRating rating={product.rating} showValue />
              <span className="text-xs text-velmora-taupe">{product.reviews} reviews</span>
            </div>

            <p className="mt-6 font-sans font-light leading-relaxed text-velmora-warm-gray">
              {product.description}
            </p>

            {product.tone.length > 1 && (
              <div className="mt-8">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
                  Tone
                </span>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        'rounded-full border px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest transition-all',
                        selectedTone === tone
                          ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                          : 'border-velmora-stone bg-white text-velmora-charcoal hover:border-velmora-charcoal'
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-charcoal">
                Quantity
              </span>
              <div className="mt-3">
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  'flex flex-1 items-center justify-center gap-2 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-all',
                  added ? 'bg-green-700' : 'bg-velmora-gold hover:bg-velmora-gold-dark'
                )}
              >
                {added ? (
                  <>
                    <Check size={16} />
                    Added to Cart
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>
              <button
                type="button"
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center border border-velmora-stone bg-white text-velmora-charcoal transition-colors hover:border-velmora-charcoal"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
              <button
                type="button"
                className="flex h-14 w-14 flex-shrink-0 items-center justify-center border border-velmora-stone bg-white text-velmora-charcoal transition-colors hover:border-velmora-charcoal"
                aria-label="Share product"
              >
                <Share2 size={18} />
              </button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-velmora-stone bg-velmora-cream py-16 md:py-24">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <h2 className="mb-10 text-center font-serif text-3xl text-velmora-charcoal md:mb-14 md:text-4xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {related.map((product) => {
                const slug = product.id;
                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    imgId={`product-thumb-${slug}`}
                    hoverImgId={`product-hover-${slug}`}
                    titleId={`product-title-${slug}`}
                    descId={`product-desc-${slug}`}
                    query={`[product-desc-${slug}] [product-title-${slug}] gold jewelry elegant`}
                    hoverQuery={`[product-desc-${slug}] [product-title-${slug}] gold jewelry worn on model`}
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

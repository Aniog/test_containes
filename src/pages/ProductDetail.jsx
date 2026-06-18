import { useEffect, useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, Truck, Shield, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import ProductCard from '@/components/product/ProductCard';
import strkImgConfig from '@/strk-img-config.json';

const ACCORDIONS = [
  {
    id: 'description',
    title: 'Description',
    icon: Sparkles,
  },
  {
    id: 'materials',
    title: 'Materials & Care',
    icon: Shield,
  },
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    icon: Truck,
  },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);
  const { addItem } = useCart();

  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    setVariant(product?.variants?.[0] || 'Gold');
    setQuantity(1);
    setActiveImage(0);
  }, [slug, product]);

  if (!product) return <Navigate to="/shop" replace />;

  // Build gallery from already-resolved ProductCard slot URLs in the config.
  // We reuse the primary/secondary slots and pad with the primary if needed.
  const slot = (id) => {
    const entry = strkImgConfig?.[id];
    if (!entry) return '';
    const picked = entry.results?.find((r) => r.id === entry.picked) || entry.results?.[0];
    return picked?.url || '';
  };

  const primarySrc = slot(`product-${product.id}-img-primary`);
  const secondarySrc = slot(`product-${product.id}-img-secondary`) || primarySrc;
  // Pull two more candidates from primary results array for variety
  const primaryEntry = strkImgConfig?.[`product-${product.id}-img-primary`];
  const altPool = primaryEntry?.results?.filter((r) => r.id !== primaryEntry.picked) || [];
  const altSrc1 = altPool[0]?.url || primarySrc;
  const altSrc2 = altPool[1]?.url || secondarySrc;

  const galleryImages = [
    { angle: 'main', label: 'Front view', src: primarySrc },
    { angle: 'angle', label: 'Detail angle', src: secondarySrc },
    { angle: 'on-model', label: 'Worn on model', src: altSrc1 },
    { angle: 'flatlay', label: 'Studio flat lay', src: altSrc2 },
  ];

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, { variant, quantity });
  };

  const titleId = `pdp-title-${product.id}`;
  const hintId = `pdp-hint-${product.id}`;

  const accordionContent = {
    description: product.description,
    materials:
      'Crafted in 18K gold plate over recycled brass with a hand-polished finish. To preserve the warm tone, avoid contact with perfume and store in the included pouch.',
    shipping:
      'Complimentary worldwide shipping on every order. We offer 30-day returns on unworn pieces. Most orders ship within 1–2 business days from our New York studio.',
  };

  return (
    <div className="bg-ivory">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 md:pt-10">
        <nav className="text-xs uppercase tracking-eyebrow text-mocha">
          <Link to="/" className="hover:text-espresso">Home</Link>
          <span className="mx-2 text-stone-warm">/</span>
          <Link to="/shop" className="hover:text-espresso">Shop</Link>
          <span className="mx-2 text-stone-warm">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 md:w-20">
                {galleryImages.map((img, idx) => (
                  <button
                    key={img.angle}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      'relative w-20 h-24 md:w-full md:h-24 overflow-hidden flex-shrink-0 transition-all duration-300',
                      activeImage === idx
                        ? 'ring-1 ring-espresso'
                        : 'opacity-70 hover:opacity-100'
                    )}
                    aria-label={`Show ${img.label}`}
                  >
                    <img
                      alt={img.label}
                      src={img.src}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="relative flex-1 aspect-[3/4] bg-cream overflow-hidden">
                {galleryImages.map((img, idx) => (
                  <img
                    key={img.angle}
                    alt={`${product.name} — ${img.label}`}
                    src={img.src}
                    className={cn(
                      'absolute inset-0 w-full h-full object-cover transition-opacity duration-700',
                      activeImage === idx ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <p className="text-[11px] uppercase tracking-eyebrow text-gold font-medium">
              {product.material}
            </p>
            <h1
              id={titleId}
              className="mt-3 font-serif text-3xl md:text-5xl uppercase tracking-editorial font-light text-espresso leading-tight"
            >
              {product.name}
            </h1>
            <span id={hintId} className="sr-only">{product.queryHint}</span>

            {/* Price + rating */}
            <div className="mt-5 flex items-center gap-4 flex-wrap">
              <p className="text-2xl text-espresso font-medium">
                {formatPrice(product.price)}
              </p>
              <span className="w-px h-5 bg-stone-warm" />
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-4 h-4',
                        i < Math.round(product.rating) ? 'fill-gold' : 'fill-none'
                      )}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="text-xs text-mocha uppercase tracking-eyebrow">
                  {product.rating} · {product.reviewCount} reviews
                </span>
              </div>
            </div>

            <p className="mt-6 text-charcoal leading-relaxed text-base max-w-md">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-9">
              <p className="text-xs uppercase tracking-eyebrow text-mocha font-medium">
                Tone — <span className="text-espresso">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      'px-6 py-2.5 text-xs uppercase tracking-eyebrow border transition-colors duration-300',
                      variant === v
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-stone-warm text-charcoal hover:border-espresso'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="text-xs uppercase tracking-eyebrow text-mocha font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-stone-warm">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 grid place-items-center hover:bg-cream"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 grid place-items-center hover:bg-cream"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-8 w-full bg-espresso text-ivory py-5 text-xs uppercase tracking-eyebrow font-medium hover:bg-charcoal transition-colors duration-300"
            >
              Add to Bag — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust mini */}
            <ul className="mt-6 space-y-2 text-xs uppercase tracking-eyebrow text-mocha font-medium">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                Free worldwide shipping
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                30-day returns on unworn pieces
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-stone-warm">
              {ACCORDIONS.map((acc) => (
                <div key={acc.id} className="border-b border-stone-warm">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenAccordion((cur) => (cur === acc.id ? null : acc.id))
                    }
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-serif text-lg uppercase tracking-editorial text-espresso">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-espresso transition-transform duration-300',
                        openAccordion === acc.id && 'rotate-180'
                      )}
                      strokeWidth={1.5}
                    />
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-500',
                      openAccordion === acc.id ? 'max-h-96 pb-5' : 'max-h-0'
                    )}
                  >
                    <p className="text-sm text-charcoal leading-relaxed pr-6">
                      {accordionContent[acc.id]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-stone-warm/50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="text-xs uppercase tracking-eyebrow text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Shop All
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

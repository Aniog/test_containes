import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown, Minus, Plus, RotateCcw, Sparkles, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import { ALL_PRODUCTS, formatPrice, getProductById } from '@/data/products.js';
import { ImageScope, StrkImg } from '@/components/StrkImage.jsx';
import ProductCard, { Stars } from '@/components/product/ProductCard.jsx';

const GALLERY_VIEWS = [
  { key: 'hero', label: 'Front', hint: 'product photography on warm neutral linen background, soft studio light' },
  { key: 'worn', label: 'Worn', hint: 'worn by a woman, close-up on skin, warm editorial photography' },
  { key: 'macro', label: 'Detail', hint: 'extreme macro detail shot, warm dark background, luxurious' },
  { key: 'styled', label: 'Styled', hint: 'styled flat lay with silk ribbon and dried flowers, warm tones' },
];

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-linen">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[11px] font-medium uppercase tracking-luxe text-espresso">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-mink transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm leading-relaxed text-umber">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [view, setView] = useState('hero');
  const [variant, setVariant] = useState('Gold');
  const [qty, setQty] = useState(1);

  const related = useMemo(() => {
    if (!product) return [];
    const sameCat = ALL_PRODUCTS.filter(
      (p) => p.id !== product.id && p.category === product.category,
    );
    const others = ALL_PRODUCTS.filter(
      (p) => p.id !== product.id && p.category !== product.category,
    );
    return [...sameCat, ...others].slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-40 text-center md:px-10">
        <h1 className="font-serif text-4xl text-espresso">This piece has sold out</h1>
        <p className="mt-3 text-sm text-mink">The page you're looking for no longer exists.</p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-bronze px-10 py-4 text-[11px] font-medium uppercase tracking-luxe text-ivory transition-colors hover:bg-bronze-dark"
        >
          Back to the Collection
        </Link>
      </div>
    );
  }

  const activeView = GALLERY_VIEWS.find((v) => v.key === view);

  return (
    <div className="pt-16 md:pt-[72px]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-6 md:px-10">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-mink">
          <Link to="/" className="transition-colors hover:text-espresso">Home</Link>
          <span>/</span>
          <Link to="/shop" className="transition-colors hover:text-espresso">Shop</Link>
          <span>/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:px-10 md:py-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <ImageScope deps={[product.id, view]}>
          <div className="relative overflow-hidden bg-cream">
            <StrkImg
              key={`${product.id}-${view}`}
              imgId={`pdp-main-${product.id}-${view}`}
              query={`elegant gold jewelry, ${product.tagline}, ${activeView.hint}`}
              ratio="4x3"
              width={1100}
              alt={`${product.name} — ${activeView.label}`}
              className="aspect-[4/5] w-full object-cover animate-fade-in"
            />
            {product.compareAtPrice && (
              <span className="absolute left-4 top-4 bg-ivory/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-bronze-dark">
                Gift Set · Save {formatPrice(product.compareAtPrice - product.price)}
              </span>
            )}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {GALLERY_VIEWS.map((v) => (
              <button
                key={v.key}
                onClick={() => setView(v.key)}
                aria-label={`View ${v.label}`}
                className={`relative overflow-hidden border transition-all duration-300 ${
                  view === v.key ? 'border-espresso' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <StrkImg
                  imgId={`pdp-thumb-${product.id}-${v.key}`}
                  query={`elegant gold jewelry, ${product.tagline}, ${v.hint}`}
                  ratio="1x1"
                  width={240}
                  alt={v.label}
                  className="aspect-square w-full object-cover"
                />
              </button>
            ))}
          </div>
        </ImageScope>

        {/* Details */}
        <div className="lg:py-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">
            {product.category}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.1em] text-espresso md:text-4xl">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <Stars rating={product.rating} className="h-4 w-4" />
            <span className="text-xs text-mink">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-serif text-3xl text-espresso">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-base text-ash line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <p className="mt-5 border-t border-linen pt-5 text-[15px] leading-relaxed text-umber">
            {product.short}
          </p>

          {/* Variant selector */}
          <div className="mt-7">
            <p className="text-[11px] font-medium uppercase tracking-luxe text-espresso">
              Finish · <span className="text-mink normal-case tracking-normal">{variant} tone</span>
            </p>
            <div className="mt-3 flex gap-2">
              {['Gold', 'Silver'].map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`border px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                    variant === v
                      ? 'border-espresso bg-espresso text-ivory'
                      : 'border-linen bg-transparent text-umber hover:border-espresso/40'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add */}
          <div className="mt-7 flex gap-3">
            <div className="flex items-center border border-linen">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-[52px] w-11 items-center justify-center text-mink transition-colors hover:bg-cream hover:text-espresso"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-10 text-center text-sm font-medium text-espresso">{qty}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="flex h-[52px] w-11 items-center justify-center text-mink transition-colors hover:bg-cream hover:text-espresso"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              onClick={() => addItem(product, variant, qty)}
              className="h-[52px] flex-1 bg-bronze text-[11px] font-medium uppercase tracking-luxe text-ivory transition-all duration-300 hover:bg-bronze-dark hover:shadow-[0_12px_30px_rgba(169,126,63,0.35)]"
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </button>
          </div>

          {/* Mini trust row */}
          <div className="mt-7 grid grid-cols-3 gap-2 border-y border-linen py-4">
            {[
              { icon: Truck, label: 'Free Shipping' },
              { icon: RotateCcw, label: '30-Day Returns' },
              { icon: Sparkles, label: '18K Gold' },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-1.5 text-center">
                <t.icon className="h-4 w-4 text-bronze" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.14em] text-mink">{t.label}</span>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="mt-2">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">{product.materials}</Accordion>
            <Accordion title="Shipping & Returns">
              Complimentary worldwide shipping on every order, dispatched within 1–2 business
              days in our signature gift packaging. Not the right fit? You have 30 days to
              return or exchange unworn pieces — no questions, no fees. Every order is
              trackable, and our care team replies within one business day.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-linen bg-cream/60">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
          <div className="mb-8 text-center md:mb-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-bronze">
              Continue the Story
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-espresso md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <ImageScope className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 md:gap-x-6" deps={[product.id]}>
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </ImageScope>
        </div>
      </section>
    </div>
  );
}

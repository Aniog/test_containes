import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Plus, Minus, ChevronDown, ShoppingBag, Check } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useStrkImages } from '@/lib/useStrkImages';
import { formatPrice } from '@/lib/utils';
import Stars from '@/components/ui/Stars';
import ProductCard from '@/components/product/ProductCard';

const galleryImgIds = (slug) =>
  [0, 1, 2, 3].map((i) => `pdp-gallery-${slug}-${i}`);

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[11px] uppercase tracking-widest2 text-ink">
          {title}
        </span>
        <ChevronDown
          width={16}
          height={16}
          className={`text-ink transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-stone">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const ref = useStrkImages([slug, activeImg]);
  const related = getRelatedProducts(slug, 4);

  if (!product) return <Navigate to="/shop" replace />;

  const galleryIds = galleryImgIds(product.slug);

  const handleAdd = () => {
    addItem(product, { variant, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={ref} className="pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <nav className="text-[11px] uppercase tracking-widest2 text-stone-light">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex gap-3 md:flex-col">
              {galleryIds.map((gid, i) => (
                <button
                  key={gid}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square w-16 shrink-0 overflow-hidden bg-sand transition-all md:w-20 ${
                    activeImg === i ? 'ring-1 ring-gold' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={gid}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${product.name} view ${i + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative flex-1 overflow-hidden bg-sand aspect-[4/5]">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-main-${product.slug}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] ${product.name} main view`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-[11px] uppercase tracking-widest2 text-gold">
              {product.type}
            </p>
            <h1
              id={product.titleId}
              className="mt-3 font-serif text-4xl uppercase tracking-widest3 text-ink md:text-5xl"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDesc}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} size={15} />
              <span className="text-xs text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone">
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-stone">
                Tone: <span className="text-ink">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`min-w-24 border px-5 py-2.5 text-[11px] uppercase tracking-widest2 transition-all ${
                      variant === v
                        ? 'border-ink bg-ink text-cream'
                        : 'border-hairline text-ink hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-stone">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink transition-colors hover:text-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus width={14} height={14} />
                </button>
                <span className="min-w-12 text-center text-sm text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink transition-colors hover:text-gold"
                  aria-label="Increase quantity"
                >
                  <Plus width={14} height={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors duration-300 hover:bg-gold-deep"
            >
              {added ? (
                <>
                  <Check width={15} height={15} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag width={15} height={15} />
                  Add to Cart
                </>
              )}
            </button>

            <p className="mt-4 text-center text-[11px] uppercase tracking-widest2 text-stone-light">
              Free shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
                <br />
                <br />
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-hairline bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 text-center">
            <p className="text-[11px] uppercase tracking-widest2 text-gold">
              Complete the Look
            </p>
            <h2
              id="related-title"
              className="mt-3 font-serif text-4xl text-ink md:text-5xl"
            >
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} sectionTitleId="related-title" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

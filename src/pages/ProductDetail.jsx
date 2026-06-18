import React, { useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';
import Accordion from '@/components/ui/Accordion';
import JewelryImage from '@/components/ui/JewelryImage';
import ProductCard from '@/components/product/ProductCard';
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from '@/data/products';
import { useStrkImages } from '@/lib/useStrkImages';
import { useCart, formatPrice } from '@/context/CartContext';

const KIND_BY_CATEGORY = {
  earrings: 'earring',
  necklaces: 'necklace',
  huggies: 'huggie',
  sets: 'set',
};

function NotFound() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center text-center px-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
            404
          </p>
          <h1 className="mt-3 font-serif text-5xl text-espresso">
            We couldn’t find that piece.
          </h1>
          <Button as={Link} to="/shop" variant="outline" className="mt-8">
            Back to the Shop
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0]?.id || 'gold',
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  // Build a small gallery using primary, alt, and 2 themed views
  const gallery = useMemo(() => {
    if (!product) return [];
    const kind = KIND_BY_CATEGORY[product.category] || 'earring';
    return [
      {
        imgId: `${product.imgPrimaryId}-pdp-main`,
        query: `[pdp-name] [pdp-cat]`,
        kind,
        theme: 'warm',
      },
      {
        imgId: `${product.imgAltId}-pdp-alt`,
        query: `[pdp-cat] [pdp-name]`,
        kind,
        theme: 'linen',
      },
      {
        imgId: `${product.id}-pdp-detail`,
        query: `[pdp-detail-eyebrow] [pdp-name]`,
        kind,
        theme: 'dark',
      },
      {
        imgId: `${product.id}-pdp-on-model`,
        query: `[pdp-eyebrow] [pdp-name]`,
        kind,
        theme: 'warm',
      },
    ];
  }, [product]);

  useStrkImages(containerRef, [activeImage, selectedVariant, slug]);

  if (!product) return <NotFound />;

  const accordionItems = [
    { title: 'Description', body: product.long },
    { title: 'Materials & Care', body: [...product.materials, ...product.care] },
    {
      title: 'Shipping & Returns',
      body: [
        'Free worldwide shipping on orders over $80.',
        'Standard delivery: 3–7 business days.',
        '30-day free returns. Each piece is shipped in protective Velmora packaging.',
      ],
    },
  ];

  const related = getRelatedProducts(product.slug, 4);

  function handleAddToCart() {
    addItem(product, { variantId: selectedVariant, quantity });
  }

  return (
    <Layout>
      <div ref={containerRef} className="bg-porcelain">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-8 md:pt-10">
          <nav className="text-[10px] uppercase tracking-[0.25em] text-mute font-sans">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span className="mx-2 text-hairline">/</span>
            <Link to="/shop" className="hover:text-gold">Shop</Link>
            <span className="mx-2 text-hairline">/</span>
            <Link
              to={`/shop?category=${product.category}`}
              className="hover:text-gold"
            >
              {product.categoryLabel}
            </Link>
          </nav>
        </div>

        {/* Main */}
        <section className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-6 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div className="flex flex-col-reverse md:flex-row gap-4">
                {/* Thumbs */}
                <div className="flex md:flex-col gap-3 md:gap-4">
                  {gallery.map((g, i) => (
                    <button
                      key={g.imgId}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={clsx(
                        'relative w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border transition-all',
                        activeImage === i
                          ? 'border-gold ring-1 ring-gold'
                          : 'border-hairline hover:border-espresso',
                      )}
                      aria-label={`View image ${i + 1}`}
                    >
                      <JewelryImage
                        imgId={`${g.imgId}-thumb`}
                        query={g.query}
                        ratio="3x4"
                        width={160}
                        kind={g.kind}
                        theme={g.theme}
                        className="w-full h-full"
                      />
                    </button>
                  ))}
                </div>

                {/* Main image */}
                <div className="flex-1 aspect-[4/5] overflow-hidden bg-espresso">
                  <JewelryImage
                    imgId={gallery[activeImage].imgId}
                    query={gallery[activeImage].query}
                    fallbackQuery={
                      activeImage === 0
                        ? product.imgQueryPrimary
                        : product.imgQueryAlt
                    }
                    ratio="4x3"
                    width={1400}
                    kind={gallery[activeImage].kind}
                    theme={gallery[activeImage].theme}
                    alt={`${product.name} view ${activeImage + 1}`}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5">
              <p
                id="pdp-eyebrow"
                className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans"
              >
                <span id="pdp-cat">{product.categoryLabel}</span> · Demi-Fine
              </p>
              <h1
                id="pdp-name"
                className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl text-espresso uppercase"
                style={{ letterSpacing: '0.06em' }}
              >
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-4">
                <StarRating value={product.rating} />
                <span className="text-xs text-mute font-sans">
                  {product.rating.toFixed(1)} · {product.reviews} reviews
                </span>
              </div>

              <p className="mt-6 text-2xl md:text-3xl font-serif text-espresso tabular-nums">
                {formatPrice(product.price)}
              </p>

              <p className="mt-6 text-[15px] md:text-base text-espresso/85 font-sans leading-relaxed">
                {product.short}
              </p>

              <div className="mt-8">
                <span
                  id="pdp-detail-eyebrow"
                  className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans"
                >
                  Finish
                </span>
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  {product.variants.map((v) => {
                    const active = v.id === selectedVariant;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v.id)}
                        className={clsx(
                          'px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-sans transition-all duration-300 border',
                          active
                            ? 'bg-espresso text-cream border-espresso'
                            : 'bg-transparent text-espresso border-hairline hover:border-espresso',
                        )}
                      >
                        <span className="inline-flex items-center gap-2">
                          <span
                            className={clsx(
                              'inline-block w-3 h-3 rounded-full',
                              v.tone === 'gold'
                                ? 'bg-gold'
                                : 'bg-hairline',
                            )}
                            aria-hidden
                          />
                          {v.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity + Add */}
              <div className="mt-8 flex items-stretch gap-3">
                <div className="inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-3.5 text-espresso hover:text-gold disabled:opacity-30"
                    disabled={quantity <= 1}
                  >
                    <Minus size={14} strokeWidth={1.6} />
                  </button>
                  <span className="px-4 text-sm font-sans tabular-nums text-espresso min-w-[2ch] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3.5 py-3.5 text-espresso hover:text-gold"
                  >
                    <Plus size={14} strokeWidth={1.6} />
                  </button>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1"
                >
                  Add to Cart · {formatPrice(product.price * quantity)}
                </Button>
              </div>

              {/* Trust micro */}
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] font-sans text-mute">
                <li className="flex items-center gap-2">
                  <Truck size={14} strokeWidth={1.4} className="text-gold" />
                  Free worldwide shipping
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw size={14} strokeWidth={1.4} className="text-gold" />
                  30-day free returns
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck size={14} strokeWidth={1.4} className="text-gold" />
                  Hypoallergenic
                </li>
              </ul>

              {/* Accordions */}
              <div className="mt-12">
                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="bg-linen py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <div className="text-center mb-12 md:mb-14">
              <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
                Pairs beautifully with
              </p>
              <h2 className="mt-3 font-serif font-light text-espresso text-3xl md:text-4xl lg:text-5xl">
                You may also like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-6 md:gap-y-14">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

// Compile-time existence check (helps tree-shake unused imports for dev)
void PRODUCTS;

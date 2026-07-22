import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';

const relatedGroups = [
  {
    id: 'vivid-aura-jewels',
    related: ['golden-sphere-huggies', 'amber-lace-earrings', 'royal-heirloom-set'],
  },
  {
    id: 'majestic-flora-nectar',
    related: ['royal-heirloom-set', 'amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'golden-sphere-huggies',
    related: ['vivid-aura-jewels', 'amber-lace-earrings', 'majestic-flora-nectar'],
  },
  {
    id: 'amber-lace-earrings',
    related: ['vivid-aura-jewels', 'majestic-flora-nectar', 'royal-heirloom-set'],
  },
  {
    id: 'royal-heirloom-set',
    related: ['majestic-flora-nectar', 'golden-sphere-huggies', 'vivid-aura-jewels'],
  },
];

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-dark">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-ink-soft transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <div className="font-sans text-sm leading-relaxed text-ink-soft">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedTone(product?.tone?.[0] || 'gold');
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center bg-cream px-6 text-center">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <Link
          to="/shop"
          className="mt-4 font-sans text-sm uppercase tracking-wider text-gold-deep underline"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-ink-soft transition-colors hover:text-ink"
        >
          <ArrowLeft size={14} /> Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            {products.map((p) =>
              p.id === id ? (
                <div key={p.id} className="space-y-4">
                  <div className="aspect-[4/5] overflow-hidden bg-cream-warm">
                    <img
                      data-strk-img-id={`product-main-${p.id}-${activeImage}`}
                      data-strk-img={`${p.description} ${p.name}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[0, 1, 2, 3].map((idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImage(idx)}
                        className={`aspect-square overflow-hidden bg-cream-warm ${activeImage === idx ? 'ring-1 ring-ink' : 'opacity-70'}`}
                      >
                        <img
                          data-strk-img-id={`product-thumb-${p.id}-${idx}`}
                          data-strk-img={`${p.description} ${p.name}`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={`${p.name} view ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center lg:py-10">
            <div className="mb-2 flex items-center gap-2">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <h1
              id={titleId}
              className="font-serif text-3xl font-semibold uppercase tracking-wider text-ink md:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <p id={descId} className="sr-only">
              {product.description}
            </p>
            <p className="mt-3 font-sans text-2xl font-light text-ink-soft">
              ${product.price}
            </p>
            <p className="mt-6 font-sans font-light leading-relaxed text-ink-soft">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-wider transition-all ${
                      selectedTone === tone
                        ? 'border-ink bg-ink text-cream'
                        : 'border-cream-dark text-ink hover:border-ink'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                Quantity
              </span>
              <div className="inline-flex items-center border border-cream-dark">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 text-ink transition-colors hover:bg-cream-warm"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 text-ink transition-colors hover:bg-cream-warm"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, quantity, selectedTone)}
              className="mt-10 w-full bg-gold py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-deep"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">
                  <strong className="text-ink">Materials:</strong> {product.materials}
                </p>
                <p>
                  <strong className="text-ink">Care:</strong> {product.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on orders over $75. Orders ship within
                  1–2 business days. Enjoy 30-day hassle-free returns on unworn
                  pieces in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedGroups.map((group) =>
        group.id === id ? (
          <section
            key={group.id}
            className="border-t border-cream-dark bg-cream px-6 py-16 md:px-10 lg:px-16"
          >
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-10 font-serif text-3xl font-medium text-ink">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
                {products
                  .filter((p) => group.related.includes(p.id))
                  .map((p) => (
                    <ProductCard key={p.id} product={p}>
                      <img
                        data-strk-img-id={`related-${p.id}`}
                        data-strk-img={`${p.description} ${p.name} Velmora Related`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </ProductCard>
                  ))}
              </div>
              <h2 id="related-heading" className="sr-only">
                Related Velmora Products
              </h2>
            </div>
          </section>
        ) : null
      )}
    </div>
  );
}

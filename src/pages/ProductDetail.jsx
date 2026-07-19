import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Plus, Minus, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import StarRating from '@/components/ui/StarRating.jsx';
import ProductCard from '@/components/ui/ProductCard.jsx';
import { StockImage } from '@/components/ui/StockImage.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-foreground">{title}</span>
        <ChevronDown
          size={16}
          className={`text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-sm leading-relaxed text-muted">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const pageRef = useRef(null);

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!product) return;
    setSelectedTone(product.tone[0]);
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product, id]);

  useEffect(() => {
    if (!pageRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, [product?.id]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-accent hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const gallery = [product.imageQuery, product.hoverQuery, product.imageQuery];

  return (
    <main ref={pageRef} className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 text-xs font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-foreground"
        >
          ← Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface">
              <StockImage
                id={`product-detail-${product.id}-${activeImage}`}
                query={`[product-detail-name]`}
                ratio="4x5"
                width="800"
                alt={product.name}
                className="h-full w-full"
                containerRef={pageRef}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-surface ${
                    activeImage === idx ? 'ring-1 ring-foreground' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <StockImage
                    id={`product-detail-thumb-${product.id}-${idx}`}
                    query={`[product-detail-name]`}
                    ratio="1x1"
                    width="250"
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full"
                    containerRef={pageRef}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{product.category}</p>
            <h1
              id="product-detail-name"
              className="mt-2 font-serif text-3xl uppercase tracking-widest-xl text-foreground md:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-muted">{product.reviewCount} reviews</span>
            </div>

            <p className="mt-5 font-serif text-2xl font-light md:text-3xl">${product.price}</p>

            <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">{product.description}</p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-foreground">
                Metal Tone
              </p>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all ${
                      selectedTone === tone
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-hairline text-foreground hover:border-foreground/50'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-foreground">Quantity</p>
              <div className="inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-muted hover:text-foreground"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-muted hover:text-foreground"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, quantity, selectedTone)}
              className="mt-8 w-full bg-accent py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-accent-hover"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-hairline pt-6">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: ShieldCheck, label: '1-Year Warranty' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <item.icon size={18} className="text-accent" />
                  <span className="text-[10px] uppercase tracking-wider text-muted">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.details}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on orders over $50. Orders are processed within 1–2 business days.
                  Returns accepted within 30 days of delivery in original condition.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-hairline bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-serif text-2xl font-light md:text-3xl">You May Also Like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

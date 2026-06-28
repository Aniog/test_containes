import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, Truck, RefreshCcw, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, products } from '@/data/products';
import { productGalleryEntries } from '@/data/productGalleryEntries';
import ProductCard from '@/components/shop/ProductCard';
import { useCart } from '@/context/CartContext';

const Accordion = ({ title, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-velmora-line">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-velmora-ink">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-ink transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-sm leading-relaxed text-velmora-muted">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold');
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  const galleryImages = productGalleryEntries.filter((g) => g.productId === id);

  useEffect(() => {
    if (!product) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, activeImg]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveImg(0);
  }, [id]);

  if (!product) {
    return (
      <div className="bg-velmora-cream min-h-screen pt-32 px-6 text-center">
        <p className="font-serif text-3xl text-velmora-ink">Piece not found.</p>
        <Link to="/shop" className="mt-6 inline-block border-b border-velmora-ink pb-1 text-xs uppercase tracking-[0.3em]">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-velmora-cream pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-6">
        <nav className="text-xs uppercase tracking-[0.25em] text-velmora-muted">
          <Link to="/" className="hover:text-velmora-ink">Home</Link>
          <span className="mx-3">/</span>
          <Link to="/shop" className="hover:text-velmora-ink">Shop</Link>
          <span className="mx-3">/</span>
          <span className="text-velmora-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbs */}
          <div className="flex md:flex-col gap-3 md:w-20 overflow-x-auto no-scrollbar">
            {galleryImages.map((g, i) => (
              <button
                key={g.thumbId}
                onClick={() => setActiveImg(i)}
                className={`flex-shrink-0 w-20 h-24 md:w-full md:h-24 bg-velmora-soft overflow-hidden border transition-colors ${
                  activeImg === i ? 'border-velmora-ink' : 'border-transparent hover:border-velmora-line'
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt={`${product.name} thumb ${i + 1}`}
                  data-strk-img-id={g.thumbId}
                  data-strk-img={g.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1 aspect-[4/5] bg-velmora-soft overflow-hidden relative">
            {galleryImages.map((g, i) => (
              <img
                key={g.mainId}
                alt={product.name}
                data-strk-img-id={g.mainId}
                data-strk-img={g.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  activeImg === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="lg:pt-6">
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4">
            {product.category}
          </p>
          <h1
            id="product-name"
            className="font-serif text-3xl md:text-5xl font-light text-velmora-ink leading-tight uppercase tracking-[0.06em]"
          >
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-velmora-line'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-velmora-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-velmora-ink">${product.price}</p>

          <p className="mt-6 text-velmora-muted leading-relaxed">{product.description}</p>

          {/* Variants */}
          <div className="mt-9">
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-ink mb-3">
              Tone — <span className="text-velmora-muted">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-5 py-2 text-xs uppercase tracking-[0.2em] border rounded-full transition-colors ${
                    variant === v
                      ? 'bg-velmora-ink text-velmora-cream border-velmora-ink'
                      : 'bg-transparent text-velmora-ink border-velmora-line hover:border-velmora-ink'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-velmora-line">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-12 h-14 flex items-center justify-center hover:bg-velmora-soft"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-12 h-14 flex items-center justify-center hover:bg-velmora-soft"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => addItem(product, variant, qty)}
              className="flex-1 bg-velmora-ink text-velmora-cream py-4 text-xs uppercase tracking-[0.3em] hover:bg-velmora-gold-dark transition-colors"
            >
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </button>
          </div>

          {/* Mini-perks */}
          <div className="mt-8 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-[0.2em] text-velmora-muted">
            <div className="flex flex-col items-center text-center gap-2 py-3 border-y border-velmora-line">
              <Truck className="w-4 h-4 text-velmora-gold" />
              Free Shipping
            </div>
            <div className="flex flex-col items-center text-center gap-2 py-3 border-y border-velmora-line">
              <RefreshCcw className="w-4 h-4 text-velmora-gold" />
              30-Day Returns
            </div>
            <div className="flex flex-col items-center text-center gap-2 py-3 border-y border-velmora-line">
              <ShieldCheck className="w-4 h-4 text-velmora-gold" />
              Lifetime Care
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-3">{product.materials}</p>
              <p>
                Keep away from perfume, lotion, and water to preserve the warm gold finish. Wipe
                gently with the included polishing cloth.
              </p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-3">
                Complimentary worldwide shipping on every order. Most orders ship within 1–2
                business days from our atelier.
              </p>
              <p>
                Not in love? Return any unworn piece within 30 days for a full refund. Gift sets
                arrive in our signature keepsake box.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 border-t border-velmora-line">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">
            You may also like
          </h2>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.3em] border-b border-velmora-ink pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-12">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

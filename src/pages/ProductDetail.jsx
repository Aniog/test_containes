import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            className={i <= Math.round(rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}
            strokeWidth={1}
          />
        ))}
      </div>
      <span className="font-inter text-xs text-velmora-text-muted">({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-velmora-text-secondary">{title}</span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-text-muted" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-text-muted" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-velmora-text-secondary leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="section-padding bg-velmora-linen">
      <div className="section-container">
        <h2 className="font-cormorant text-3xl md:text-4xl text-velmora-obsidian mb-10">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-velmora-sand mb-3">
                <img
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-${p.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-${p.titleId}`} className="product-name text-sm hover:text-velmora-gold transition-colors">
                {p.name}
              </h3>
              <p className="font-cormorant text-lg text-velmora-obsidian mt-1">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug, activeImg]);

  const images = [
    { id: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}]`, ratio: '3x4', width: 800 },
    { id: `pdp-alt-${product.imgId2}`, query: `[${product.titleId}]`, ratio: '3x4', width: 800 },
  ];

  return (
    <>
      <div ref={containerRef} className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
        <div className="section-container py-10 md:py-16">
          {/* Breadcrumb */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 font-inter text-xs uppercase tracking-widest text-velmora-text-muted hover:text-velmora-gold transition-colors mb-8"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Gallery */}
            <div className="space-y-3">
              {/* Main image */}
              <div className="aspect-[3/4] overflow-hidden bg-velmora-linen">
                <img
                  data-strk-img-id={images[activeImg].id}
                  data-strk-img={images[activeImg].query}
                  data-strk-img-ratio={images[activeImg].ratio}
                  data-strk-img-width={images[activeImg].width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                      activeImg === i ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      data-strk-img-id={`thumb-${img.id}`}
                      data-strk-img={img.query}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} view ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="label-ui text-velmora-gold mb-2">{product.category}</p>
                <h1 id={product.titleId} className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-velmora-obsidian font-medium leading-tight">
                  {product.name}
                </h1>
                <p className="font-cormorant text-3xl text-velmora-obsidian mt-3">${product.price}</p>
              </div>

              <StarRating rating={product.rating} count={product.reviewCount} />

              <p id={product.descId} className="font-inter text-sm text-velmora-text-secondary leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Variant selector */}
              <div className="space-y-3">
                <p className="font-inter text-xs uppercase tracking-widest text-velmora-text-muted">
                  Tone: <span className="text-velmora-obsidian">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 font-inter text-xs uppercase tracking-widest border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                          : 'border-velmora-sand text-velmora-text-secondary hover:border-velmora-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <p className="font-inter text-xs uppercase tracking-widest text-velmora-text-muted">Quantity</p>
                <div className="flex items-center border border-velmora-sand w-fit">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
                  >
                    <Minus size={13} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center font-inter text-sm text-velmora-obsidian">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
                  >
                    <Plus size={13} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="btn-primary w-full flex items-center justify-center gap-2 py-4"
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 pt-2">
                {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                  <span key={t} className="font-inter text-[10px] uppercase tracking-widest text-velmora-text-muted flex items-center gap-1">
                    <span className="text-velmora-gold">✦</span> {t}
                  </span>
                ))}
              </div>

              {/* Accordions */}
              <div className="pt-4">
                <Accordion title="Description">{product.description}</Accordion>
                <Accordion title="Materials & Care">{product.material} — {product.care}</Accordion>
                <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </>
  );
}

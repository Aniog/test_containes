import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velmora-ink font-medium">{title}</span>
        {open ? <ChevronUp size={16} className="text-velmora-muted" /> : <ChevronDown size={16} className="text-velmora-muted" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-velmora-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Link to={`/product/${product.slug}`} ref={containerRef} className="group block">
      <div className="relative overflow-hidden bg-velmora-stone aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span id={`related-title-${product.id}`} className="hidden">{product.name}</span>
        <span id={`related-desc-${product.id}`} className="hidden">{product.shortDescription}</span>
      </div>
      <h4 className="font-serif text-sm uppercase tracking-widest text-velmora-ink group-hover:text-velmora-gold transition-colors">{product.name}</h4>
      <p className="font-sans text-sm text-velmora-muted mt-1">${product.price}</p>
    </Link>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-muted">Product not found</p>
          <Link to="/shop" className="font-sans text-sm text-velmora-gold mt-4 inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry` },
    { id: product.imgId2, id2: `pdp-hover-${product.id}`, query: `[pdp-title-${product.id}] gold jewelry worn model` },
    { id: `pdp-detail-${product.id}`, id2: `pdp-detail2-${product.id}`, query: `[pdp-title-${product.id}] jewelry detail close up` },
  ];

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-sans text-xs text-velmora-subtle hover:text-velmora-ink transition-colors">Home</Link>
          <span className="text-velmora-subtle text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-velmora-subtle hover:text-velmora-ink transition-colors">Shop</Link>
          <span className="text-velmora-subtle text-xs">/</span>
          <span className="font-sans text-xs text-velmora-ink">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-velmora-stone aspect-square">
              {images.map((img, i) => (
                <img
                  key={img.id2}
                  data-strk-img-id={img.id2}
                  data-strk-img={img.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={img.id2}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-20 overflow-hidden bg-velmora-stone border-2 transition-colors ${activeImg === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-linen'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-velmora-obsidian text-white px-2 py-1">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="font-sans text-[9px] tracking-widest uppercase bg-velmora-gold text-velmora-obsidian px-2 py-1">New</span>
              )}
            </div>

            {/* Name */}
            <h1 id={`pdp-title-${product.id}`} className="font-serif text-3xl md:text-4xl uppercase tracking-widest font-light text-velmora-ink leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={product.rating} size={13} />
              <span className="font-sans text-xs text-velmora-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velmora-ink mb-6">${product.price}</p>

            {/* Description */}
            <p id={`pdp-desc-${product.id}`} className="font-sans text-sm text-velmora-muted leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-3">
                Finish: <span className="text-velmora-muted">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    style={selectedVariant === v ? { background: '#1A1714', borderColor: '#1A1714', color: '#fff' } : {}}
                    className={`font-sans text-xs tracking-wider uppercase px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-ink'
                        : 'border-velmora-linen text-velmora-muted hover:border-velmora-ink hover:text-velmora-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-velmora-ink mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-velmora-muted hover:text-velmora-ink transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="font-sans text-sm text-velmora-ink w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-velmora-muted hover:text-velmora-ink transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase font-semibold py-5 flex items-center justify-center gap-3 hover:bg-velmora-gold-light transition-colors duration-300 mb-4"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="font-sans text-xs text-velmora-subtle text-center mb-8">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} To care for your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Standard delivery 5–10 business days. Express available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">Discover More</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">You May Also Like</h2>
            <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => <RelatedCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

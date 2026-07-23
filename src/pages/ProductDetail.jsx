import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-medium text-ink">{title}</span>
        {open ? <ChevronUp size={16} className="text-ink-muted" /> : <ChevronDown size={16} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5 text-sm text-ink-muted leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbIds = [product.imgId, product.imgId2];

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1 text-xs text-ink-muted hover:text-gold transition-colors">
            <ArrowLeft size={13} />
            <span className="tracking-wide">Back to Shop</span>
          </Link>
          <span className="text-ink-faint text-xs">/</span>
          <span className="text-xs text-ink-faint tracking-wide">{product.name}</span>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="aspect-square overflow-hidden bg-linen">
              <img
                data-strk-img-id={activeImg === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {thumbIds.map((id, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${activeImg === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${id}-thumb`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-xs tracking-widest uppercase text-gold mb-2 font-sans">{product.category}</p>
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl font-light text-ink tracking-wide uppercase mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-3xl text-ink mb-6">${product.price}</p>

            <p
              id={`pdp-desc-${product.id}`}
              className="text-sm text-ink-muted leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-linen mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-ink mb-3 font-sans">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase text-ink mb-3 font-sans">Quantity</p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-gold hover:bg-linen transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-ink border-x border-linen">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-gold hover:bg-linen transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="w-full bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold py-4 hover:bg-gold-light transition-colors duration-200 mb-3"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <button className="w-full border border-ink text-ink text-xs tracking-widest uppercase py-4 hover:bg-ink hover:text-parchment transition-all duration-200">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="text-[11px] text-ink-faint tracking-wide flex items-center gap-1">
                  <span className="text-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div ref={relatedRef} className="mt-24">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-sans">You May Also Like</p>
            <h2 className="font-serif text-3xl font-light text-ink">Complete the Look</h2>
            <div className="w-10 h-px bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-linen mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p id={`related-title-${p.id}`} className="text-xs tracking-widest uppercase font-medium text-ink group-hover:text-gold transition-colors">
                  {p.name}
                </p>
                <p id={`related-desc-${p.id}`} className="text-xs text-ink-faint mt-0.5 line-clamp-1">{p.shortDescription}</p>
                <p className="font-serif text-lg text-ink mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

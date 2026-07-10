import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ShoppingBag, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} size={13} className={i <= Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'} strokeWidth={1} />
        ))}
      </div>
      <span className="font-manrope text-xs text-velmora-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-stone" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-stone" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-manrope text-sm text-velmora-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const cardRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div ref={cardRef} className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4] mb-4">
          <img
            data-strk-img-id={`related-${product.imgId}`}
            data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p id={`related-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian mb-1">{product.name}</p>
        <p id={`related-${product.descId}`} className="font-manrope text-xs text-velmora-muted hidden">{product.shortDesc}</p>
        <p className="font-manrope text-sm font-semibold text-velmora-obsidian">${product.price}</p>
      </Link>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/shop" className="flex items-center gap-1 font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-velmora-sand">/</span>
          <span className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-velmora-linen aspect-[4/5]">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[product.imgId, product.imgId2, product.imgId, product.imgId2].map((imgId, i) => (
                <div key={i} className={`relative overflow-hidden bg-velmora-linen aspect-square cursor-pointer border-2 transition-colors ${i === 0 ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'}`}>
                  <img
                    data-strk-img-id={`thumb-${imgId}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-manrope text-[9px] uppercase tracking-widest bg-velmora-obsidian text-velmora-cream px-2 py-1">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="font-manrope text-[9px] uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2 py-1">New</span>
              )}
            </div>

            <h1 id={`pdp-title-${product.id}`} className="font-cormorant text-2xl md:text-3xl uppercase tracking-widest text-velmora-obsidian mb-3 leading-tight">
              {product.name}
            </h1>

            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="font-cormorant text-3xl text-velmora-obsidian mb-5">${product.price}</p>

            <p id={`pdp-desc-${product.id}`} className="font-manrope text-sm text-velmora-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-stone mb-3">
                Tone: <span className="text-velmora-obsidian capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? 'bg-velmora-obsidian text-velmora-cream border-velmora-obsidian'
                        : 'border-velmora-sand text-velmora-stone hover:border-velmora-obsidian hover:text-velmora-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-stone mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-obsidian transition-colors font-manrope text-lg"
                >
                  −
                </button>
                <span className="w-12 text-center font-manrope text-sm text-velmora-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-obsidian transition-colors font-manrope text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-manrope text-xs uppercase tracking-widest py-4 transition-all duration-300 ${
                addedFeedback
                  ? 'bg-velmora-obsidian text-velmora-cream'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {addedFeedback ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-xs text-velmora-muted flex items-center gap-1">
                  <span className="text-velmora-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">{product.details}</Accordion>
              <Accordion title="Materials & Care">{product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="border-t border-velmora-sand pt-12 mb-10">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">You May Also Like</p>
            <h2 className="font-cormorant text-3xl font-light text-velmora-obsidian">Complete the Look</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

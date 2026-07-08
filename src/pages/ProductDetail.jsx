import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-gold-light">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velmora-black">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-stone" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-stone" />}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-velmora-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId]);

  return (
    <section className="py-16 md:py-20 border-t border-velmora-gold-light">
      <div className="mb-10">
        <p className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-2">Discover More</p>
        <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-black">You May Also Like</h2>
      </div>
      <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map(product => (
          <div key={product.id} className="group">
            <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="pt-3">
              <Link to={`/product/${product.slug}`}>
                <h3 id={product.titleId} className="font-serif text-xs tracking-widest2 uppercase text-velmora-black hover:text-velmora-gold transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p id={product.descId} className="sr-only">{product.shortDescription}</p>
              <p className="font-sans text-sm font-medium text-velmora-black mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeThumb]);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl italic text-velmora-stone mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-velmora-black border-b border-velmora-black pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const thumbImages = [
    { imgId: `pdp-main-${product.imgId}`, query: `[${product.descId}] [${product.titleId}] gold jewelry product` },
    { imgId: `pdp-alt1-${product.imgId2}`, query: `[${product.titleId}] gold jewelry worn model` },
    { imgId: `pdp-alt2-${product.imgId}b`, query: `[${product.titleId}] gold jewelry detail close up` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 font-sans text-[10px] tracking-widest uppercase text-velmora-stone hover:text-velmora-black transition-colors">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-velmora-sand">/</span>
          <Link to="/shop" className="font-sans text-[10px] tracking-widest uppercase text-velmora-stone hover:text-velmora-black transition-colors">Shop</Link>
          <span className="text-velmora-sand">/</span>
          <span className="font-sans text-[10px] tracking-widest uppercase text-velmora-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex gap-3">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2 w-16 flex-shrink-0">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`aspect-square overflow-hidden border transition-colors ${activeThumb === i ? 'border-velmora-gold' : 'border-velmora-gold-light hover:border-velmora-sand'}`}
                >
                  <img
                    data-strk-img-id={thumb.imgId}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-velmora-cream">
              <img
                data-strk-img-id={`pdp-active-${product.id}-${activeThumb}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category tag */}
            <p className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-widest2 uppercase text-velmora-black font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} size={13} showNumber />

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-velmora-black mt-4 mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p id={product.descId} className="font-sans text-sm text-velmora-stone leading-relaxed mb-6 border-t border-velmora-gold-light pt-5">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-stone mb-3">
                Finish: <span className="text-velmora-black">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wider px-5 py-2 rounded-full border transition-colors ${
                      selectedVariant === v
                        ? 'bg-velmora-black text-velmora-ivory border-velmora-black'
                        : 'border-velmora-sand text-velmora-stone hover:border-velmora-black hover:text-velmora-black'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-stone mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-gold-light w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-black transition-colors"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-sans text-sm text-velmora-black">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-stone hover:text-velmora-black transition-colors"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 font-sans text-xs tracking-widest uppercase py-4 transition-colors duration-300 ${
                added
                  ? 'bg-velmora-gold text-velmora-black'
                  : 'bg-velmora-black text-velmora-ivory hover:bg-velmora-charcoal'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Bag ✦' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] text-velmora-stone tracking-wide">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials} {product.care}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}

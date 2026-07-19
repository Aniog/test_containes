import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-mink-light/30">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-mink flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-mink flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-manrope text-sm text-charcoal leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ current }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== current.id).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 border-t border-mink-light/30">
      <div className="mb-10">
        <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-3">
          Complete the Look
        </p>
        <h2 className="font-cormorant text-3xl font-light text-obsidian">
          You May Also Like
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {related.map(product => (
          <div key={product.id} className="group">
            <Link to={`/product/${product.slug}`}>
              <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p id={`related-title-${product.id}`} className="font-cormorant text-sm uppercase tracking-widest text-obsidian mb-1 group-hover:text-gold transition-colors">
                {product.name}
              </p>
              <p id={`related-desc-${product.id}`} className="sr-only">{product.description}</p>
              <p className="font-manrope text-sm font-medium text-charcoal">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeThumb]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const thumbImages = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc] [pdp-title]`, ratio: '3x4' },
    { id: `pdp-alt1-${product.imgId2}`, query: `[pdp-title] gold jewelry detail close up`, ratio: '3x4' },
    { id: `pdp-alt2-${product.imgId}-3`, query: `[pdp-title] jewelry worn on model`, ratio: '3x4' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-xs text-mink hover:text-gold transition-colors uppercase tracking-widest">
            Home
          </Link>
          <span className="text-mink-light text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-mink hover:text-gold transition-colors uppercase tracking-widest">
            Shop
          </Link>
          <span className="text-mink-light text-xs">/</span>
          <span className="font-manrope text-xs text-obsidian uppercase tracking-widest">
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${i}-${thumb.id}`}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio={thumb.ratio}
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory-dark relative">
              <img
                data-strk-img-id={`pdp-active-${thumbImages[activeThumb].id}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category tag */}
            <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-3">
              {product.category}
            </p>

            {/* Product name */}
            <h1
              id="pdp-title"
              className="font-cormorant text-3xl lg:text-4xl uppercase tracking-[0.12em] text-obsidian font-medium mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-mink-light text-mink-light'}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-mink">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-obsidian mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p id="pdp-desc" className="font-manrope text-sm text-charcoal leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian mb-3">
                Finish: <span className="text-mink">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-[0.1em] px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-mink-light/50 text-charcoal hover:border-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs uppercase tracking-[0.12em] text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-mink-light/40 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mink hover:text-obsidian transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mink hover:text-obsidian transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-obsidian text-ivory font-manrope text-xs uppercase tracking-[0.15em] py-4 hover:bg-charcoal transition-colors mb-3"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <button className="w-full border border-mink-light/50 text-charcoal font-manrope text-xs uppercase tracking-[0.12em] py-3.5 hover:border-obsidian transition-colors">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-mink-light/30">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[11px] uppercase tracking-widest text-mink">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K gold plating over hypoallergenic brass base</li>
                  <li>• Nickel-free, lead-free, cadmium-free</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Clean gently with a soft, dry cloth</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–7 business days</li>
                  <li>• Express delivery: 2–3 business days</li>
                  <li>• Free returns within 30 days of delivery</li>
                  <li>• Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts current={product} />
      </div>
    </div>
  );
}

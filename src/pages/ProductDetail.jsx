import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-sand">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-espresso group-hover:text-gold transition-colors duration-200">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-muted" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-muted" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-luxury ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-charcoal leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-sand">
      <div className="mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso">You May Also Like</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group block">
            <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-3">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-${product.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
            </div>
            <p id={`related-${product.titleId}`} className="product-name text-xs mb-1">{product.name}</p>
            <p className="font-sans text-sm text-espresso">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveThumb(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Generate thumb image IDs
  const thumbIds = [
    { imgId: `pdp-main-${product.imgId}`, img2Id: `pdp-thumb1-${product.img2Id}` },
    { imgId: `pdp-alt1-${product.img2Id}`, img2Id: `pdp-thumb2-${product.imgId}` },
    { imgId: `pdp-alt2-${product.imgId}`, img2Id: `pdp-thumb3-${product.img2Id}` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-sans text-xs text-muted hover:text-gold transition-colors duration-200">Home</Link>
          <span className="text-sand text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-muted hover:text-gold transition-colors duration-200">Shop</Link>
          <span className="text-sand text-xs">/</span>
          <span className="font-sans text-xs text-espresso">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {thumbIds.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={i === 0 ? thumb.imgId : thumb.img2Id}
                    data-strk-img={`[pdp-title-${product.id}] ${product.name} gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream aspect-[3/4]">
              <img
                data-strk-img-id={`pdp-active-${product.imgId}-${activeThumb}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-espresso text-ivory font-sans text-[9px] tracking-widest uppercase px-2.5 py-1">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-gold text-ivory font-sans text-[9px] tracking-widest uppercase px-2.5 py-1">New</span>
              )}
            </div>

            {/* Name */}
            <h1 id={`pdp-title-${product.id}`} className="font-serif text-3xl md:text-4xl text-espresso uppercase tracking-widest2 mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-sand fill-sand'} />
                ))}
              </div>
              <span className="font-sans text-xs text-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-espresso mb-5">${product.price}</p>

            {/* Short description */}
            <p id={`pdp-desc-${product.id}`} className="font-sans text-sm text-charcoal leading-relaxed mb-7 border-b border-sand pb-7">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-3">
                Finish: <span className="text-espresso">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-sand text-charcoal hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-muted mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-sand w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold hover:bg-cream transition-colors duration-200"
                >
                  <Minus size={12} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-espresso border-x border-sand">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold hover:bg-cream transition-colors duration-200"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                added
                  ? 'bg-espresso text-ivory'
                  : 'bg-gold text-ivory hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-sand">
              {['Free Worldwide Shipping', '30-Day Returns', 'Secure Checkout'].map(item => (
                <span key={item} className="font-sans text-[10px] tracking-wide text-muted flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {item}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To maintain your jewelry's finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}

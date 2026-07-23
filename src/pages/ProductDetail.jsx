import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/products/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-charcoal">{title}</span>
        {open
          ? <ChevronUp size={16} strokeWidth={1.5} className="text-warm-gray flex-shrink-0" />
          : <ChevronDown size={16} strokeWidth={1.5} className="text-warm-gray flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-6 animate-fadeIn">
          <div className="font-inter text-sm text-warm-gray leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  // Generate gallery image IDs for this product
  const galleryImgs = [
    { id: `pdp-main-${product.id}-img-a1`, query: `[${product.descId}] [${product.titleId}] gold jewelry product` },
    { id: `pdp-alt1-${product.id}-img-b2`, query: `[${product.titleId}] gold jewelry worn model close up` },
    { id: `pdp-alt2-${product.id}-img-c3`, query: `[${product.titleId}] gold jewelry detail texture` },
    { id: `pdp-alt3-${product.id}-img-d4`, query: `[${product.titleId}] gold jewelry lifestyle flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-inter text-xs text-warm-gray hover:text-gold transition-colors">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-light-gray text-xs">/</span>
          <span className="font-inter text-xs text-light-gray">{product.category}</span>
          <span className="text-light-gray text-xs">/</span>
          <span className="font-inter text-xs text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImgs.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={img.id}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory">
              <img
                data-strk-img-id={`pdp-active-${product.id}-${activeImg}-img-e5`}
                data-strk-img={galleryImgs[activeImg]?.query || `[${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-charcoal font-medium mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-light-gray'}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-charcoal mb-5">${product.price}</p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-warm-gray leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-charcoal mb-3">
                Finish: <span className="text-warm-gray normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-warm-gray border-border hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-xs uppercase tracking-widest text-charcoal mb-3">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="font-inter text-sm text-charcoal w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-inter text-xs uppercase tracking-widest transition-colors duration-200 mb-4 ${
                added
                  ? 'bg-gold text-white'
                  : 'bg-charcoal text-cream hover:bg-gold'
              }`}
            >
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-[10px] uppercase tracking-widest text-warm-gray flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-b border-border">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-charcoal font-medium">Material:</strong> {product.material}</p>
                <p className="mb-2">To keep your Velmora piece looking its best:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Clean gently with a soft, dry cloth</li>
                  <li>Remove before swimming or exercising</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3"><strong className="text-charcoal font-medium">Shipping:</strong> Free worldwide shipping on all orders. Estimated delivery 3–7 business days.</p>
                <p><strong className="text-charcoal font-medium">Returns:</strong> We offer hassle-free 30-day returns on all unworn items in original packaging. Contact our team to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-border bg-ivory py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">You May Also Like</p>
            <h2 className="font-cormorant text-3xl md:text-4xl text-charcoal font-light">
              Complete Your Look
            </h2>
          </div>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

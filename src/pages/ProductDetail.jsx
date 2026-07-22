import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-mist">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-inter text-xs uppercase tracking-widest2 text-charcoal group-hover:text-gold transition-colors">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-warm-gray" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-warm-gray" />
        }
      </button>
      {open && (
        <div className="pb-6 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, activeThumb]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl font-light text-warm-gray">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-inter text-xs uppercase tracking-widest2 text-gold hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const thumbImages = [
    { id: `${product.imgId}-t0`, queryId: product.imgId, titleId: product.titleId, descId: product.descId },
    { id: `${product.img2Id}-t1`, queryId: product.img2Id, titleId: product.titleId, descId: product.descId },
    { id: `${product.imgId}-t2`, queryId: `${product.imgId}-alt2`, titleId: product.titleId, descId: product.descId },
    { id: `${product.imgId}-t3`, queryId: `${product.imgId}-alt3`, titleId: product.titleId, descId: product.descId },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-mist">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1.5 font-inter text-xs text-warm-gray hover:text-gold transition-colors">
            <ArrowLeft size={12} strokeWidth={1.5} />
            Shop
          </Link>
          <span className="text-mist">/</span>
          <span className="font-inter text-xs text-warm-gray capitalize">{product.category}</span>
          <span className="text-mist">/</span>
          <span className="font-inter text-xs text-charcoal uppercase tracking-widest2">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {thumbImages.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent hover:border-mist'
                  }`}
                >
                  <img
                    data-strk-img-id={`${thumb.queryId}-thumb-${i}`}
                    data-strk-img={`[${thumb.descId}] [${thumb.titleId}]`}
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
            <div className="flex-1 aspect-square md:aspect-[3/4] overflow-hidden bg-blush">
              <img
                data-strk-img-id={`${thumbImages[activeThumb].queryId}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block self-start bg-espresso text-ivory font-inter text-[9px] uppercase tracking-widest2 px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest2 text-charcoal font-light leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-mist fill-mist'}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-charcoal mt-4">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-warm-gray leading-relaxed mt-4 mb-6"
            >
              {product.shortDescription}
            </p>

            <div className="h-px bg-mist mb-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest2 text-warm-gray mb-3">
                Tone: <span className="text-charcoal capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs uppercase tracking-widest2 px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-mist text-warm-gray hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest2 text-warm-gray mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-mist w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-inter text-sm text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-inter text-xs uppercase tracking-widest2 font-medium transition-all duration-300 ${
                added
                  ? 'bg-charcoal text-ivory'
                  : 'bg-gold text-espresso hover:bg-gold-dark'
              }`}
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-inter text-[10px] uppercase tracking-widest2 text-warm-gray/70">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p className="font-inter text-sm text-warm-gray leading-relaxed">
                  {product.description}
                </p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="space-y-2 mb-4">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 font-inter text-sm text-warm-gray">
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="font-inter text-sm text-warm-gray leading-relaxed">{product.care}</p>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <p className="font-inter text-sm text-warm-gray leading-relaxed">{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="border-t border-mist bg-warm-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="font-inter text-xs uppercase tracking-widest2 text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

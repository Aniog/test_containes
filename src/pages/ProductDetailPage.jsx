import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import CartDrawer from '../components/layout/CartDrawer';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={13}
            strokeWidth={1}
            style={i <= Math.round(rating) ? { fill: '#C9A96E', color: '#C9A96E' } : { fill: '#E8E0D0', color: '#E8E0D0' }}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-taupe">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-espresso">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-taupe transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-taupe leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, activeImg]);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-espresso mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-widest text-taupe hover:text-espresso border-b border-taupe/30">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, id2: product.imgId2 },
    { id: product.imgId2, id2: product.imgId },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <CartDrawer />

      <main ref={containerRef} className="pt-16 md:pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 font-sans text-xs text-taupe hover:text-espresso transition-colors uppercase tracking-widest"
            >
              <ArrowLeft size={12} strokeWidth={2} />
              Back
            </button>
            <span className="text-linen">/</span>
            <Link to="/shop" className="font-sans text-xs text-taupe hover:text-espresso transition-colors uppercase tracking-widest">
              Shop
            </Link>
            <span className="text-linen">/</span>
            <span className="font-sans text-xs text-espresso uppercase tracking-widest">{product.name}</span>
          </div>
        </div>

        {/* Product layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">

            {/* Left: Image gallery */}
            <div className="flex flex-col gap-4">
              {/* Main image */}
              <div className="relative overflow-hidden bg-parchment aspect-square md:aspect-[4/5]">
                {activeImg === 0 ? (
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`pdp-main-${product.imgId}`}
                    data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="900"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`pdp-alt-${product.imgId2}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry worn model close-up`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="900"
                    alt={`${product.name} worn`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {[0, 1].map(idx => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`relative w-20 h-20 overflow-hidden bg-parchment flex-shrink-0 transition-all duration-200 ${
                      activeImg === idx ? 'ring-1 ring-espresso' : 'ring-1 ring-transparent hover:ring-linen'
                    }`}
                  >
                    {idx === 0 ? (
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        data-strk-img-id={`pdp-thumb1-${product.imgId}`}
                        data-strk-img={`[pdp-title-${product.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        alt="View 1"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        data-strk-img-id={`pdp-thumb2-${product.imgId2}`}
                        data-strk-img={`[pdp-title-${product.id}] worn`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        alt="View 2"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product info */}
            <div className="flex flex-col">
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {product.tags.includes('bestseller') && (
                  <span className="font-sans text-[9px] uppercase tracking-widest bg-espresso text-cream px-2 py-1">
                    Bestseller
                  </span>
                )}
                {product.tags.includes('new') && (
                  <span className="font-sans text-[9px] uppercase tracking-widest bg-gold text-espresso px-2 py-1">
                    New
                  </span>
                )}
              </div>

              {/* Name */}
              <h1
                id={`pdp-title-${product.id}`}
                className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-espresso leading-tight mb-3"
              >
                {product.name}
              </h1>

              {/* Price */}
              <p className="font-sans text-2xl font-light text-espresso mb-4">
                ${product.price}
              </p>

              {/* Rating */}
              <StarRating rating={product.rating} count={product.reviewCount} />

              <div className="w-full h-px bg-linen my-6" />

              {/* Description */}
              <p
                id={`pdp-desc-${product.id}`}
                className="font-sans text-sm text-taupe leading-relaxed mb-8"
              >
                {product.description}
              </p>

              {/* Variant selector */}
              <div className="mb-6">
                <p className="font-sans text-xs uppercase tracking-widest text-espresso mb-3">
                  Finish: <span className="text-taupe font-normal normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs px-5 py-2.5 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-espresso bg-espresso text-cream'
                          : 'border-linen text-taupe hover:border-espresso hover:text-espresso'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-sans text-xs uppercase tracking-widest text-espresso mb-3">Quantity</p>
                <div className="flex items-center border border-linen w-fit">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 py-3 text-taupe hover:text-espresso transition-colors"
                    aria-label="Decrease"
                  >
                    <Minus size={13} strokeWidth={2} />
                  </button>
                  <span className="font-sans text-sm text-espresso w-10 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 py-3 text-taupe hover:text-espresso transition-colors"
                    aria-label="Increase"
                  >
                    <Plus size={13} strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full font-sans text-xs uppercase tracking-widest py-4 transition-all duration-300 ${
                  added
                    ? 'bg-gold text-espresso'
                    : 'bg-espresso text-cream hover:bg-charcoal'
                }`}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>

              {/* Trust icons */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-linen">
                {[
                  { icon: Truck, label: 'Free Shipping' },
                  { icon: RotateCcw, label: '30-Day Returns' },
                  { icon: Shield, label: 'Hypoallergenic' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5">
                    <Icon size={16} strokeWidth={1.5} className="text-gold" />
                    <span className="font-sans text-[10px] uppercase tracking-wider text-taupe">{label}</span>
                  </div>
                ))}
              </div>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description">
                  {product.description}
                </Accordion>
                <Accordion title="Materials & Care">
                  {product.materials} Clean gently with a soft cloth. Avoid contact with water, perfume, and harsh chemicals. Store in the provided pouch when not wearing.
                </Accordion>
                <Accordion title="Shipping & Returns">
                  Free worldwide shipping on all orders. Estimated delivery 3–7 business days. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div className="border-t border-linen py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-espresso mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                  <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img-id={`related-${p.imgId}`}
                      data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p id={`related-title-${p.id}`} className="font-serif text-sm uppercase tracking-widest text-espresso">
                    {p.name}
                  </p>
                  <p id={`related-desc-${p.id}`} className="font-sans text-xs text-taupe mt-0.5 line-clamp-1">
                    {p.description}
                  </p>
                  <p className="font-sans text-sm font-medium text-espresso mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { getProductById, getRelatedProducts } from '@/data/products';
import ProductCard from '@/components/shared/ProductCard';
import { StarRating } from '@/components/shared/ProductCard';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-parchment">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-[0.12em] text-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-mist flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-mist flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-inter text-sm text-stone leading-relaxed">{children}</div>
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

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants?.[0] || null);
      setActiveImg(0);
      setQuantity(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-charcoal font-light">Product not found</p>
          <Link
            to="/shop"
            className="mt-6 inline-block font-inter text-xs uppercase tracking-[0.1em] text-gold border-b border-gold pb-0.5"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { imgId: product.imgId, imgId2: `${product.imgId}-pdp1` },
    { imgId: product.imgId2, imgId2: `${product.imgId2}-pdp2` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-ivory pt-16 md:pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 font-inter text-xs text-mist">
          <Link to="/" className="hover:text-gold transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors duration-200">Shop</Link>
          <span>/</span>
          <span className="text-stone">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-square bg-cream overflow-hidden">
              <img
                data-strk-img-id={activeImg === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry editorial`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`w-20 h-20 bg-cream overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === idx ? 'border-gold' : 'border-transparent hover:border-parchment'
                  }`}
                >
                  <img
                    data-strk-img-id={idx === 0 ? `thumb-${product.imgId}` : `thumb-${product.imgId2}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="bg-gold text-ivory font-inter text-[9px] uppercase tracking-[0.1em] px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="bg-charcoal text-ivory font-inter text-[9px] uppercase tracking-[0.1em] px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-charcoal font-light leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} />
              <span className="font-inter text-xs text-mist">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-charcoal mt-4">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-inter text-sm text-stone leading-relaxed mt-4"
            >
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-parchment my-6" />

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="font-inter text-xs uppercase tracking-[0.12em] text-charcoal mb-3">
                  Finish: <span className="text-stone normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`font-inter text-xs px-5 py-2.5 border transition-colors duration-200 ${
                        selectedVariant === variant
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'border-parchment text-stone hover:border-gold hover:text-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-[0.12em] text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-parchment w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-stone hover:text-charcoal transition-colors duration-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 font-inter text-sm text-charcoal min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-stone hover:text-charcoal transition-colors duration-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-inter text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                added
                  ? 'bg-charcoal text-ivory'
                  : 'bg-gold text-ivory hover:bg-gold-dark'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-parchment">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                  <Icon className="w-4 h-4 text-gold" />
                  <span className="font-inter text-[10px] uppercase tracking-[0.08em] text-mist">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">
                  To maintain the beauty of your Velmora piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft, dry cloth.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free standard shipping on all orders. Express shipping available at checkout.</p>
                <p className="mt-3">
                  We offer hassle-free 30-day returns on all unworn items in original packaging. Simply contact our team to initiate a return.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-cream py-16 md:py-20 mt-8" ref={relatedRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal tracking-wide mb-10">
            You May Also Like
          </h2>
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

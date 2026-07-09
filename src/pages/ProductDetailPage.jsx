import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm font-semibold tracking-wider uppercase text-velvet-800">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velvet-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velvet-500" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          <div className="font-sans text-sm text-velvet-600 leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedVariant(0);
    setSelectedImage(0);
    setQuantity(1);
    setAdded(false);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [id, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-heading-2 text-velvet-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="velmora-btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="velmora-container py-4">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-velvet-800 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velvet-800 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet-800">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="velmora-container pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-4">
              <img
                data-strk-img-id={`pdp-${product.id}-main-${selectedImage}`}
                data-strk-img={`[pdp-name] [pdp-desc] ${product.images[selectedImage]?.query || ''}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage]?.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-gold'
                      : 'border-transparent hover:border-velvet-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${index}`}
                    data-strk-img={`[pdp-name] ${img.query}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="velmora-overline mb-2 text-gold-600">
              {product.category === 'sets' ? 'Gift Set' : product.category}
            </p>

            <h1
              id="pdp-name"
              className="font-serif text-heading-2 md:text-[2.5rem] text-velvet-900 uppercase tracking-wider leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-velvet-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-semibold text-velvet-900 mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p id="pdp-desc" className="font-sans text-sm text-velvet-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="font-sans text-xs font-semibold tracking-wider uppercase text-velvet-700 mb-3">
                Tone: {product.variants[selectedVariant]}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-2.5 text-sm font-sans font-medium tracking-wider border transition-all duration-200 ${
                      selectedVariant === index
                        ? 'border-velvet-900 bg-velvet-900 text-cream'
                        : 'border-border text-velvet-600 hover:border-velvet-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs font-semibold tracking-wider uppercase text-velvet-700 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velvet-600 hover:text-velvet-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-sm font-medium text-velvet-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velvet-600 hover:text-velvet-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`velmora-btn-primary w-full text-base py-4.5 transition-all duration-300 ${
                added ? 'bg-green-700 hover:bg-green-700' : ''
              }`}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2.5">
                <RotateCcw className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground">30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground">Hypoallergenic</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20 bg-velvet-50 border-t border-border">
          <div className="velmora-container">
            <div className="text-center mb-10">
              <h2 className="font-serif text-heading-3 text-velvet-900">
                You May Also Like
              </h2>
              <div className="w-10 h-px bg-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group velmora-card"
                >
                  <div className="aspect-[3/4] bg-velvet-100 overflow-hidden">
                    <img
                      data-strk-img-id={`related-${rp.id}`}
                      data-strk-img={`[related-title-${rp.id}] ${rp.images[0]?.query || ''}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={rp.images[0]?.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3
                      id={`related-title-${rp.id}`}
                      className="font-serif text-sm font-semibold text-velvet-900 uppercase tracking-wider mb-1"
                    >
                      {rp.name}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-velvet-700">
                      {formatPrice(rp.price)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

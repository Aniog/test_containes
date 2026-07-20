import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="text-xs uppercase tracking-[0.15em] font-sans font-medium text-text-primary">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-text-secondary" />
        ) : (
          <ChevronDown className="w-4 h-4 text-text-secondary" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-text-secondary text-sm leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const found = products.find(p => p.slug === slug);
    setProduct(found);
    setSelectedVariant('Gold');
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-text-secondary">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-text-primary">{product.name}</span>
          </div>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="relative aspect-square bg-bg-warm overflow-hidden mb-3">
              <img
                src={product.images[activeImage].url}
                alt={product.images[activeImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === idx ? 'border-gold' : 'border-border-subtle hover:border-text-secondary'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p id="pdp-name" className="hidden">{product.name}</p>
            <p id="pdp-desc" className="hidden">{product.description}</p>

            <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-2">
              {product.category}
            </p>

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] text-text-primary mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border-subtle'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-serif text-gold tracking-wide mb-6">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-lg">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.15em] text-text-secondary font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 border ${
                      selectedVariant === variant
                        ? 'bg-gold text-bg-deep border-gold'
                        : 'bg-transparent text-text-primary border-border-subtle hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-text-secondary font-medium mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border-subtle">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-10 flex items-center justify-center text-sm text-text-primary font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-bg-deep py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="border-t border-border-subtle">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-text-primary text-xs uppercase tracking-wider mb-1">Materials</p>
                    <p>{product.materials}</p>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary text-xs uppercase tracking-wider mb-1">Care</p>
                    <p>{product.care}</p>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-text-primary">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

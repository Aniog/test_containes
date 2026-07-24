import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-brand-gold transition-colors"
      >
        <span className="text-sm font-medium tracking-wider uppercase">{title}</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-brand-warmgray leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <main ref={containerRef} className="pt-20">
      {/* Breadcrumb */}
      <div className="container-narrow py-4">
        <nav className="flex items-center gap-2 text-xs text-brand-warmgray">
          <Link to="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brand-black transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-brand-black">{product.name}</span>
        </nav>
      </div>

      <section className="container-narrow pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-brand-cream rounded-sm overflow-hidden mb-4">
              <img
                data-strk-img-id={`product-${product.images[activeImage].id}`}
                data-strk-img={product.imgQuery}
                data-strk-img-ratio={product.images[activeImage].ratio}
                data-strk-img-width={product.images[activeImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "aspect-square bg-brand-cream rounded-sm overflow-hidden border-2 transition-all",
                    activeImage === idx ? "border-brand-gold" : "border-transparent hover:border-brand-sand"
                  )}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={product.imgQuery}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <p className="text-label mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-brand-black mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-warmgray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-brand-black mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="text-brand-warmgray leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase text-brand-warmgray mb-3">
                Tone: <span className="text-brand-black font-medium capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={cn(
                      "px-6 py-2.5 text-xs tracking-widest uppercase border transition-all",
                      selectedVariant === variant.id
                        ? "border-brand-black bg-brand-black text-brand-ivory"
                        : variant.available
                          ? "border-brand-sand hover:border-brand-black text-brand-charcoal"
                          : "border-brand-sand/50 text-brand-sand cursor-not-allowed"
                    )}
                  >
                    {variant.name}
                    {!variant.available && " — Sold Out"}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase text-brand-warmgray mb-3">Quantity</p>
              <div className="inline-flex items-center border border-brand-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-brand-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-sm font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-brand-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 text-sm justify-center"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-brand-sand">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: Shield, text: 'Hypoallergenic' },
              ].map(badge => (
                <div key={badge.text} className="text-center">
                  <badge.icon className="w-5 h-5 mx-auto text-brand-gold mb-1.5" />
                  <p className="text-[10px] tracking-wider uppercase text-brand-warmgray">{badge.text}</p>
                </div>
              ))}
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
                <p className="mb-2"><strong>Shipping:</strong> {product.shipping}</p>
                <p><strong>Returns:</strong> {product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-brand-cream">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <p className="text-label mb-3">You May Also Like</p>
            <h2 className="heading-section">Complete Your Look</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] bg-brand-ivory rounded-sm overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={p.imgQuery}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-widest text-center mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-center font-medium">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

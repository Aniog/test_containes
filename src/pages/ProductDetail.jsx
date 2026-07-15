import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/products/ProductCard';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-stone">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium text-charcoal tracking-wide uppercase">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-warm-gray" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-warm-gray text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id || 'gold');
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setQuantity(1);
  };

  const stars = Array.from({ length: 5 });

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-main py-4">
        <nav className="flex items-center gap-2 text-warm-gray text-xs">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="container-main pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-warm-white rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.imgId}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] elegant gold jewelry product close-up warm lighting`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail row */}
            <div className="grid grid-cols-4 gap-2">
              {[product.imgId, product.imgIdAlt].map((imgId, i) => (
                <div
                  key={imgId}
                  className={`aspect-square bg-warm-white rounded-sm overflow-hidden cursor-pointer border-2 ${
                    i === 0 ? 'border-gold' : 'border-transparent hover:border-stone-dark'
                  } transition-colors`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] jewelry product angle view`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {/* Badge */}
            {product.tags?.includes('bestseller') && (
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] tracking-widest uppercase font-medium rounded-sm mb-4">
                Bestseller
              </span>
            )}

            {/* Name */}
            <h1 className="product-name text-xl md:text-2xl text-charcoal mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-gold text-2xl font-serif font-light mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {stars.map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone'
                    }`}
                  />
                ))}
              </div>
              <span className="text-warm-gray text-sm">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-warm-gray text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wide uppercase text-charcoal mb-3">
                Tone: <span className="text-warm-gray normal-case">{product.variants.find(v => v.id === selectedVariant)?.name}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant.id)}
                    disabled={!variant.available}
                    className={`px-6 py-2.5 border rounded-sm text-sm font-sans tracking-wide uppercase transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'border-charcoal bg-charcoal text-white'
                        : variant.available
                        ? 'border-stone text-charcoal hover:border-charcoal'
                        : 'border-stone/50 text-stone-dark cursor-not-allowed line-through'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wide uppercase text-charcoal mb-3">Quantity</p>
              <div className="inline-flex items-center border border-stone rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 py-3 text-sm font-medium text-charcoal border-x border-stone min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full py-4 text-base mb-4">
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust features */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-stone">
              <div className="text-center">
                <Truck className="w-5 h-5 text-gold mx-auto mb-1.5" />
                <p className="text-warm-gray text-[10px] tracking-wide uppercase">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 text-gold mx-auto mb-1.5" />
                <p className="text-warm-gray text-[10px] tracking-wide uppercase">30-Day Returns</p>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-5 h-5 text-gold mx-auto mb-1.5" />
                <p className="text-warm-gray text-[10px] tracking-wide uppercase">Hypoallergenic</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">{product.shipping}</p>
                <p>{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="section-padding bg-warm-white">
        <div className="container-main">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">
              Discover
            </p>
            <h2 className="section-title text-2xl md:text-3xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

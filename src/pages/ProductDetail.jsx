import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ui/ProductCard';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-extra-wide uppercase font-sans font-medium text-brand-charcoal">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="text-sm text-brand-muted font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedVariant(0);
      setQuantity(1);
      setActiveImage(0);
    }
  }, [product]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeImage, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-brand-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline text-xs">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-brand-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs font-sans text-brand-muted">
          <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] bg-brand-ivory overflow-hidden mb-3">
              <img
                data-strk-img-id={`${product.imgId}-main-${activeImage}`}
                data-strk-img={`[${product.descId}] ${product.images[activeImage]} [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[3x4] bg-brand-ivory overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] ${img} [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:pl-4">
            <h1 id={product.titleId} className="product-name text-2xl md:text-3xl text-brand-charcoal mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-gold text-brand-gold'
                        : 'text-brand-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-muted font-sans">
                ({product.reviews})
              </span>
            </div>

            <p className="text-2xl font-serif text-brand-charcoal mb-4">${product.price}</p>

            <p id={product.descId} className="text-sm text-brand-muted font-sans leading-relaxed mb-6">
              {product.longDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <label className="text-xs tracking-extra-wide uppercase font-sans font-medium text-brand-charcoal block mb-3">
                Tone
              </label>
              <div className="flex gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2 text-xs tracking-wide uppercase font-sans border transition-all duration-200 ${
                      selectedVariant === i
                        ? 'border-brand-charcoal bg-brand-charcoal text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-xs tracking-extra-wide uppercase font-sans font-medium text-brand-charcoal block mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-brand-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans text-brand-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-brand-muted hover:text-brand-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="w-full btn-gold py-4 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc list-inside space-y-1">
                  <li>18K Gold Plated over 925 Sterling Silver</li>
                  <li>Hypoallergenic — nickel and lead free</li>
                  <li>Tarnish-resistant coating for lasting shine</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Avoid contact with perfume, lotions, and water</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="list-disc list-inside space-y-1">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–10 business days</li>
                  <li>Express delivery: 2–4 business days (available at checkout)</li>
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-10">
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

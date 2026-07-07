import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import strkImgConfig from '../strk-img-config.json';

function getImgUrl(key) {
  const entry = strkImgConfig[key];
  return entry?.results?.[0]?.url || '';
}

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-sm font-medium tracking-wider uppercase text-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-warm-gray" />
        ) : (
          <ChevronDown size={16} className="text-warm-gray" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="font-sans text-sm text-warm-gray leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(0);
    setSelectedImage(0);
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-display mb-4">Product Not Found</h1>
          <p className="body-text mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-warm-gray">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i
                      ? 'border-gold'
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.id}-thumb-${i}`}
                    data-strk-img={`[${product.id}-name] jewelry product thumbnail view ${i + 1}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="100"
                    src={getImgUrl(`${product.id}-thumb-${i}`)}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-cream-dark rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`${product.id}-main-${selectedImage}`}
                data-strk-img={`[${product.id}-name] jewelry product main photo`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src={getImgUrl(`${product.id}-main-${selectedImage}`)}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
              {product.category}
            </p>

            <h1 className="font-serif text-2xl md:text-3xl tracking-widest-plus uppercase text-charcoal mb-3">
              {product.name}
            </h1>

            <p className="font-serif text-2xl text-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(product.rating)
                        ? 'fill-gold text-gold'
                        : 'fill-none text-warm-gray-light'
                    }
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-warm-gray leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="h-px bg-border mb-8" />

            {/* Variant selector */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">
                Tone: <span className="text-warm-gray font-normal">{product.variants[selectedVariant]}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-6 py-2.5 border font-sans text-xs tracking-wider uppercase transition-all ${
                      selectedVariant === i
                        ? 'border-charcoal bg-charcoal text-cream'
                        : 'border-border text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-sm w-12 text-center text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 text-sm mb-4"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full flex items-center justify-center gap-2 py-3 font-sans text-xs tracking-wider uppercase text-warm-gray hover:text-charcoal transition-colors">
              <Heart size={16} />
              Add to Wishlist
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: Shield, text: 'Hypoallergenic' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="text-center">
                  <Icon size={18} className="mx-auto text-gold mb-2" />
                  <span className="font-sans text-[10px] tracking-wider uppercase text-warm-gray">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <div className="space-y-3">
                  <p><strong className="text-charcoal">Materials:</strong> {product.materials}</p>
                  <p><strong className="text-charcoal">Care:</strong> {product.care}</p>
                </div>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <div className="space-y-3">
                  <p><strong className="text-charcoal">Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
                  <p><strong className="text-charcoal">Returns:</strong> We offer a 30-day return policy. Items must be unworn, in original packaging. Free return shipping on all domestic orders.</p>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">You May Also Like</h2>
            <div className="section-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

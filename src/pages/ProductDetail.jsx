import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setSelectedImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: `${product.materials}\n\nCare: Store in the provided pouch when not wearing. Avoid contact with water, perfume, and lotions. Gently polish with a soft cloth to restore shine.`,
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout.\n\nReturns accepted within 30 days of delivery. Items must be unworn and in original packaging. Contact us to initiate a return.',
    },
  ];

  const imgIds = [
    { id: `${product.imgId}-detail-0`, query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.img2Id}-detail-1`, query: `[${product.titleId}] gold jewelry worn on model` },
    { id: `${product.imgId}-detail-2`, query: `[${product.titleId}] jewelry detail close up` },
    { id: `${product.img2Id}-detail-3`, query: `[${product.descId}] jewelry lifestyle` },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-taupe hover:text-gold transition-colors font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      {/* Hidden text for image queries */}
      <p id={product.descId} className="sr-only">{product.shortDescription}</p>
      <p id={product.titleId} className="sr-only">{product.name}</p>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {imgIds.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[4/5] overflow-hidden bg-parchment">
              <img
                data-strk-img-id={`${imgIds[selectedImg].id}-main`}
                data-strk-img={imgIds[selectedImg].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-cream text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 font-sans">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-ink text-cream text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 font-sans">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest font-light text-ink leading-tight mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-ink mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-sans text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="w-full h-px bg-border mb-6" />

            {/* Short description */}
            <p className="text-base font-sans text-taupe leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest font-medium text-ink mb-3 font-sans">
                Finish: <span className="text-taupe normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-widest font-medium font-sans border transition-colors ${
                      selectedVariant === v
                        ? 'bg-ink text-cream border-ink'
                        : 'bg-transparent text-ink border-border hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest font-medium text-ink mb-3 font-sans">
                Quantity
              </p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-ink transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-ink transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-cream py-4 text-xs uppercase tracking-widest font-medium font-sans hover:bg-gold-dark transition-colors flex items-center justify-center gap-3 mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-ink text-ink py-4 text-xs uppercase tracking-widest font-medium font-sans hover:bg-ink hover:text-cream transition-colors mb-8">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 text-xs font-sans text-taupe mb-8">
              <span>✓ Free worldwide shipping</span>
              <span>✓ 30-day returns</span>
              <span>✓ Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="border-t border-border">
              {accordions.map(acc => (
                <Accordion
                  key={acc.id}
                  label={acc.label}
                  content={acc.content}
                  isOpen={openAccordion === acc.id}
                  onToggle={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts products={related} />
    </div>
  );
}

function Accordion({ label, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-medium text-ink font-sans">
          {label}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-taupe flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-taupe flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 animate-fadeIn">
          {content.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm font-sans text-taupe leading-relaxed mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ products: relatedProducts }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
            You May Also Like
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`}>
                <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
                  <p id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</p>
                  <p id={`related-${product.titleId}`} className="sr-only">{product.name}</p>
                  <img
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => { e.preventDefault(); addItem(product); }}
                    className="absolute bottom-0 left-0 right-0 bg-ink/90 text-cream py-3 text-[10px] uppercase tracking-widest font-medium font-sans translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Quick Add
                  </button>
                </div>
                <h3 className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-sm font-medium text-ink mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

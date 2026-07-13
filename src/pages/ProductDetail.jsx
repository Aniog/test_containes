import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import RelatedProducts from '@/components/product/RelatedProducts';

const variants = [
  { id: 'gold', label: 'Gold Tone' },
  { id: 'silver', label: 'Silver Tone' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('description');
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-text-primary mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-gold border-b border-velmora-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}] gold jewelry` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.id}-detail-img-a1b2`, query: `[${product.titleId}] jewelry detail close up` },
    { id: `${product.id}-lifestyle-img-c3d4`, query: `[${product.titleId}] jewelry lifestyle flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: (
        <div>
          <p className="font-sans text-sm text-velmora-text-secondary leading-relaxed mb-4">
            {product.description}
          </p>
          <ul className="flex flex-col gap-2">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 font-sans text-sm text-velmora-text-secondary">
                <span className="text-velmora-gold mt-1 flex-shrink-0">—</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'care',
      label: 'Materials & Care',
      content: (
        <p className="font-sans text-sm text-velmora-text-secondary leading-relaxed">
          {product.care}
        </p>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: (
        <p className="font-sans text-sm text-velmora-text-secondary leading-relaxed">
          {product.shipping}
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-cream page-enter" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-24 md:pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 md:mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-sans text-xs tracking-[0.1em] text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>
          <span className="text-velmora-sand">·</span>
          <Link to="/shop" className="font-sans text-xs tracking-[0.1em] text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200">
            Shop
          </Link>
          <span className="text-velmora-sand">·</span>
          <span className="font-sans text-xs tracking-[0.1em] text-velmora-text-primary capitalize">
            {product.category}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-linen aspect-[4/5]">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImage === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.tags.includes('bestseller') && (
                  <span className="bg-velmora-gold text-velmora-obsidian font-sans text-[9px] tracking-[0.15em] uppercase px-2.5 py-1">
                    Bestseller
                  </span>
                )}
                {product.tags.includes('new') && (
                  <span className="bg-velmora-obsidian text-velmora-cream font-sans text-[9px] tracking-[0.15em] uppercase px-2.5 py-1">
                    New
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-gold mb-3 capitalize">
              {product.category}
            </p>

            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl tracking-[0.1em] uppercase text-velmora-text-primary leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-velmora-text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-3xl text-velmora-text-primary mb-6">
              ${product.price}
            </p>

            <p
              id={product.descId}
              className="font-sans text-sm text-velmora-text-secondary leading-relaxed mb-8 border-t border-velmora-sand pt-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-text-muted mb-3">
                Finish: <span className="text-velmora-text-primary capitalize">{selectedVariant} tone</span>
              </p>
              <div className="flex gap-2">
                {variants.map(v => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`font-sans text-xs tracking-[0.1em] px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v.id
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone/40 text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-text-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-stone/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-velmora-text-muted hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-velmora-text-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-velmora-text-muted hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-sans text-xs tracking-[0.25em] uppercase font-semibold py-5 transition-all duration-300 ${
                added
                  ? 'bg-velmora-obsidian text-velmora-cream'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-velmora-sand">
              {[
                { label: 'Free Shipping', sub: 'Worldwide' },
                { label: '30-Day Returns', sub: 'Hassle-free' },
                { label: '18K Gold Plated', sub: 'Hypoallergenic' },
              ].map(t => (
                <div key={t.label} className="text-center">
                  <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-velmora-text-primary font-medium">
                    {t.label}
                  </p>
                  <p className="font-sans text-[10px] text-velmora-text-muted mt-0.5">{t.sub}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-sand">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-velmora-sand">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-velmora-text-primary font-medium">
                      {acc.label}
                    </span>
                    {openAccordion === acc.id
                      ? <ChevronUp className="w-4 h-4 text-velmora-text-muted" />
                      : <ChevronDown className="w-4 h-4 text-velmora-text-muted" />
                    }
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-5 animate-fadeIn">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentProduct={product} />
    </div>
  );
}

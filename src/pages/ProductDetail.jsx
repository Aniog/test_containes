import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-linen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-text-muted mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-linen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-sans text-xs text-velmora-text-light hover:text-velmora-gold transition-colors tracking-wide">Home</Link>
          <span className="text-velmora-sand">/</span>
          <Link to="/shop" className="font-sans text-xs text-velmora-text-light hover:text-velmora-gold transition-colors tracking-wide">Shop</Link>
          <span className="text-velmora-sand">/</span>
          <span className="font-sans text-xs text-velmora-text-muted tracking-wide">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Accordions */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-2xl">
          <ProductAccordions product={product} />
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} containerRef={containerRef} />
    </div>
  );
}

function ProductGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = [
    { id: product.imgId, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: product.img2Id, query: `[pdp-title-${product.id}] gold jewelry worn model` },
    { id: `pdp-img3-${product.id}-e4f5g6`, query: `[pdp-title-${product.id}] jewelry detail close up` },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-sand">
        <img
          data-strk-img-id={images[activeIdx].id}
          data-strk-img={images[activeIdx].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {/* Hidden text for queries */}
        <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
        <span id={`pdp-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`relative w-20 aspect-square overflow-hidden bg-velmora-sand border-2 transition-colors duration-200 ${
              activeIdx === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
            }`}
          >
            <img
              data-strk-img-id={`thumb-${img.id}`}
              data-strk-img={img.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`View ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col">
      {/* Category */}
      <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
        {product.category}
      </p>

      {/* Product name */}
      <h1 className="font-serif text-3xl md:text-4xl font-light tracking-[0.1em] uppercase text-velmora-text mb-4">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand fill-velmora-sand'}
            />
          ))}
        </div>
        <span className="font-sans text-xs text-velmora-text-muted">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="font-serif text-3xl font-light text-velmora-text mb-6">
        ${product.price}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-velmora-sand mb-6" />

      {/* Short description */}
      <p className="font-sans text-sm leading-relaxed text-velmora-text-muted mb-8">
        {product.shortDescription}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-velmora-text mb-3">
          Finish: <span className="text-velmora-gold">{selectedVariant}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-5 py-2.5 text-xs font-sans font-medium tracking-[0.12em] uppercase border transition-all duration-200 ${
                selectedVariant === v
                  ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                  : 'border-velmora-sand text-velmora-text-muted hover:border-velmora-gold hover:text-velmora-gold'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <p className="font-sans text-xs font-medium tracking-[0.15em] uppercase text-velmora-text mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-velmora-sand w-fit">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text hover:bg-velmora-sand transition-colors"
          >
            <Minus size={14} strokeWidth={1.5} />
          </button>
          <span className="w-12 text-center font-sans text-sm font-medium text-velmora-text">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text hover:bg-velmora-sand transition-colors"
          >
            <Plus size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 ${
          added
            ? 'bg-velmora-obsidian text-velmora-gold'
            : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
        }`}
      >
        <ShoppingBag size={16} strokeWidth={1.5} />
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>

      {/* Trust signals */}
      <div className="mt-6 flex flex-col gap-2">
        {['Free worldwide shipping', '30-day returns', 'Hypoallergenic & nickel-free'].map(item => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-velmora-gold flex-shrink-0" />
            <span className="font-sans text-xs text-velmora-text-light tracking-wide">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductAccordions({ product }) {
  const [open, setOpen] = useState('description');

  const sections = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="border-t border-velmora-sand">
      {sections.map(section => (
        <div key={section.id} className="border-b border-velmora-sand">
          <button
            onClick={() => setOpen(open === section.id ? null : section.id)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-velmora-text">
              {section.label}
            </span>
            {open === section.id
              ? <ChevronUp size={16} strokeWidth={1.5} className="text-velmora-gold flex-shrink-0" />
              : <ChevronDown size={16} strokeWidth={1.5} className="text-velmora-text-light flex-shrink-0" />
            }
          </button>
          {open === section.id && (
            <div className="pb-6 animate-fadeIn">
              {section.content.split('\n\n').map((para, i) => (
                <p key={i} className="font-sans text-sm leading-relaxed text-velmora-text-muted mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function RelatedProducts({ currentId, containerRef }) {
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentId, containerRef]);

  return (
    <section className="bg-velmora-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-text tracking-wide">
            You May Also Like
          </h2>
          <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-velmora-sand mb-3 relative">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-obsidian/0 group-hover:bg-velmora-obsidian/10 transition-colors duration-300" />
              </div>
              <p id={`related-title-${product.id}`} className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-velmora-text mb-1 group-hover:text-velmora-gold-muted transition-colors">
                {product.name}
              </p>
              <p id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
              <p className="font-sans text-sm font-medium text-velmora-text">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

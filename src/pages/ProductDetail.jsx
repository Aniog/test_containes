import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const containerRef = useRef(null);

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
      <div className="min-h-screen flex items-center justify-center bg-parchment">
        <div className="text-center">
          <p className="font-serif text-2xl text-muted mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-all">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product);

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 border-b border-divider">
        <nav className="flex items-center gap-2 font-sans text-xs text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-obsidian">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Accordions */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="max-w-xl border-t border-divider">
          <Accordion title="Description" defaultOpen>
            <p className="font-sans text-sm text-muted leading-relaxed">{product.description}</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <div className="space-y-3">
              <p className="font-sans text-sm text-muted leading-relaxed"><strong className="text-obsidian font-medium">Materials:</strong> {product.materials}</p>
              <p className="font-sans text-sm text-muted leading-relaxed"><strong className="text-obsidian font-medium">Care:</strong> {product.care}</p>
            </div>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p className="font-sans text-sm text-muted leading-relaxed">{product.shipping}</p>
          </Accordion>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <RelatedProducts products={related} />
      )}
    </div>
  );
}

function ProductGallery({ product }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const images = [
    { imgId: product.imgId },
    { imgId: product.imgId2 },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
              activeIdx === i ? 'border-gold' : 'border-transparent'
            }`}
          >
            <img
              data-strk-img-id={img.imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="160"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square md:aspect-[3/4] overflow-hidden bg-linen relative">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeIdx === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeIdx === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
}

function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    console.log(`Added ${quantity}x ${product.name} (${selectedVariant}) to cart`);
  };

  return (
    <div className="flex flex-col">
      {/* Category */}
      <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
        {product.category}
      </p>

      {/* Name */}
      <h1
        id={product.titleId}
        className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-obsidian font-light mb-3 leading-tight"
      >
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
              stroke={i < Math.floor(product.rating) ? 'none' : '#C9A96E'}
              strokeWidth={1.5}
            />
          ))}
        </div>
        <span className="font-sans text-xs text-muted">{product.rating} ({product.reviewCount} reviews)</span>
      </div>

      {/* Price */}
      <p className="font-sans text-2xl font-medium text-obsidian mb-5">${product.price}</p>

      {/* Short description */}
      <p id={product.descId} className="font-sans text-sm text-muted leading-relaxed mb-7 border-b border-divider pb-7">
        {product.shortDescription}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-3">
          Tone: <span className="text-obsidian">{selectedVariant}</span>
        </p>
        <div className="flex gap-2">
          {product.variants.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-5 py-2 font-sans text-xs tracking-wider border transition-all duration-200 ${
                selectedVariant === v
                  ? 'bg-obsidian text-ivory border-obsidian'
                  : 'bg-transparent text-muted border-divider hover:border-muted'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <p className="font-sans text-xs tracking-widest uppercase text-muted mb-3">Quantity</p>
        <div className="flex items-center border border-divider w-fit">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-12 text-center font-sans text-sm text-obsidian">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-espresso transition-colors duration-300"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Cart
        </button>
        <button
          onClick={() => setWishlisted(v => !v)}
          aria-label="Add to wishlist"
          className={`w-12 h-12 border flex items-center justify-center transition-all duration-200 ${
            wishlisted ? 'border-gold bg-gold/10 text-gold' : 'border-divider text-muted hover:border-gold hover:text-gold'
          }`}
        >
          <Heart size={16} strokeWidth={1.5} fill={wishlisted ? '#C9A96E' : 'none'} />
        </button>
      </div>

      {/* Trust signals */}
      <div className="border-t border-divider pt-5 flex flex-col gap-2">
        {['Free worldwide shipping', '30-day returns', 'Hypoallergenic & nickel-free'].map(item => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-gold" />
            <span className="font-sans text-xs text-muted">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} strokeWidth={1.5} className="text-muted" />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} className="text-muted" />
        )}
      </button>
      {open && (
        <div className="pb-5 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ products }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory border-t border-divider py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-obsidian font-light mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <RelatedCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({ product }) {
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4] mb-3">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <p className="font-sans text-[10px] tracking-widest uppercase text-muted mb-1">{product.category}</p>
      <Link to={`/product/${product.slug}`}>
        <h3
          id={product.titleId}
          className="font-serif text-sm uppercase tracking-wider text-obsidian hover:text-gold transition-colors"
        >
          {product.name}
        </h3>
      </Link>
      <p id={product.descId} className="sr-only">{product.shortDescription}</p>
      <p className="font-sans text-sm font-medium text-obsidian mt-1">${product.price}</p>
    </div>
  );
}

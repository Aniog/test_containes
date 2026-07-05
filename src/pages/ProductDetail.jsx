import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft, Truck, RotateCcw, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            fill={i < Math.floor(rating) ? '#C9A96E' : 'transparent'}
            className={i < Math.floor(rating) ? 'text-gold' : 'text-mink'}
          />
        ))}
      </div>
      <span className="text-xs text-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-mink/50">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[10px] tracking-widest uppercase text-parchment font-medium group-hover:text-gold transition-colors duration-300">
          {title}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="text-sm text-parchment/70 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section ref={containerRef} className="py-16 border-t border-mink/50">
      <div className="mb-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-medium">You May Also Like</p>
        <h3 className="font-serif text-3xl text-parchment font-light">Complete the Look</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group block">
            <div className="relative overflow-hidden bg-charcoal aspect-product mb-3">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p id={`related-title-${product.id}`} className="text-[9px] tracking-widest uppercase text-parchment font-medium group-hover:text-gold transition-colors duration-300 mb-1">
              {product.name}
            </p>
            <p id={`related-desc-${product.id}`} className="text-xs text-stone">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}`, titleId: product.titleId, descId: product.descId },
    { id: product.imgId2, id2: `pdp-alt-${product.id}`, titleId: product.titleId, descId: product.descId },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-obsidian pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-[10px] tracking-widest uppercase text-stone hover:text-gold transition-colors duration-300">Home</Link>
          <span className="text-mink text-xs">/</span>
          <Link to="/shop" className="text-[10px] tracking-widest uppercase text-stone hover:text-gold transition-colors duration-300">Shop</Link>
          <span className="text-mink text-xs">/</span>
          <span className="text-[10px] tracking-widest uppercase text-parchment/60">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border transition-all duration-300 ${
                    activeImage === i ? 'border-gold' : 'border-mink/40 hover:border-mink'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-charcoal" style={{ aspectRatio: '3/4' }}>
              {images.map((img, i) => (
                <img
                  key={i}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={img.id2}
                  data-strk-img={`[${img.descId}] [${img.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImage === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.tags.includes('bestseller') && (
                  <span className="bg-gold text-obsidian text-[8px] tracking-widest uppercase px-2 py-1 font-medium">
                    Bestseller
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-3 font-medium">
                {product.category}
              </p>
              <h1 id={product.titleId} className="font-serif text-3xl lg:text-4xl text-parchment font-light tracking-wide mb-4">
                {product.name.toUpperCase()}
              </h1>
              <StarRating rating={product.rating} count={product.reviewCount} />
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-serif text-3xl text-parchment">${product.price}</span>
                <span className="text-xs text-stone">Free shipping worldwide</span>
              </div>
            </div>

            <div className="w-full h-px bg-mink/40 mb-6" />

            {/* Short description */}
            <p id={product.descId} className="text-sm text-parchment/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[10px] tracking-widest uppercase text-parchment/60 mb-3 font-medium">
                Finish: <span className="text-parchment">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-[10px] tracking-widest uppercase border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold-muted text-gold'
                        : 'border-mink/60 text-stone hover:border-parchment/40 hover:text-parchment'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[10px] tracking-widest uppercase text-parchment/60 mb-3 font-medium">Quantity</p>
              <div className="flex items-center border border-mink/60 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-parchment transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm text-parchment">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-parchment transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-obsidian text-[10px] tracking-widest uppercase py-5 font-medium hover:bg-gold-light transition-all duration-300 mb-4 shadow-gold"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full border border-mink/60 text-parchment/60 text-[10px] tracking-widest uppercase py-4 hover:border-gold hover:text-gold transition-all duration-300 mb-8">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: Truck, text: 'Free worldwide shipping on all orders' },
                { icon: RotateCcw, text: '30-day hassle-free returns' },
                { icon: Shield, text: 'Hypoallergenic · 18K gold plated' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={14} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                  <span className="text-xs text-stone">{text}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="border-t border-mink/50">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-parchment/80">Materials:</strong> {product.materials}</p>
                <p><strong className="text-parchment/80">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts currentId={product.id} />
      </div>
    </div>
  );
}

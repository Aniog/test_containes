import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-linen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl font-light text-velmora-ink mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-velmora-linen min-h-screen pt-16 md:pt-20">
      <ProductContent product={product} />
      <RelatedProducts currentId={product.id} />
    </div>
  );
}

function ProductContent({ product }) {
  const containerRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const { addItem } = useCart();

  const images = [
    { id: `pdp-main-${product.id}`, imgId: product.imgId, label: 'Main view' },
    { id: `pdp-alt-${product.id}`, imgId: product.imgId2, label: 'Detail view' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 mb-8 text-xs text-velmora-mist">
        <Link to="/" className="hover:text-velmora-gold transition-colors duration-200">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-200">Shop</Link>
        <span>/</span>
        <span className="text-velmora-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(idx)}
                className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${
                  activeImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                }`}
                aria-label={img.label}
              >
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={img.label}
                  data-strk-img-id={`thumb-${img.imgId}`}
                  data-strk-img={`[pdp-product-desc] [pdp-product-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 relative overflow-hidden bg-velmora-cream aspect-[3/4]">
            {images.map((img, idx) => (
              <img
                key={img.id}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={img.imgId}
                data-strk-img={`[pdp-product-desc] [pdp-product-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  activeImage === idx ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {product.badge && (
              <div className="absolute top-4 left-4 bg-velmora-obsidian text-velmora-ivory text-[9px] tracking-widest uppercase font-medium px-3 py-1.5">
                {product.badge}
              </div>
            )}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          {/* Name & Price */}
          <div className="mb-6">
            <h1
              id="pdp-product-name"
              className="font-serif text-2xl md:text-3xl font-medium tracking-[0.15em] uppercase text-velmora-ink mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-sand'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-mist">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-sans text-2xl font-medium text-velmora-ink">${product.price}</span>
              <span className="text-xs text-velmora-mist">Free shipping worldwide</span>
            </div>
          </div>

          <div className="w-full h-px bg-velmora-stone/15 mb-6" />

          {/* Description */}
          <p
            id="pdp-product-desc"
            className="text-sm text-velmora-mist leading-relaxed mb-8"
          >
            {product.description}
          </p>

          {/* Variant selector */}
          {product.variants.length > 1 && (
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-3">
                Tone: <span className="text-velmora-gold capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs tracking-widest uppercase font-medium border transition-all duration-200 capitalize ${
                      selectedVariant === v
                        ? 'bg-velmora-obsidian text-velmora-ivory border-velmora-obsidian'
                        : 'bg-transparent text-velmora-ink border-velmora-stone/40 hover:border-velmora-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase font-medium text-velmora-ink mb-3">Quantity</p>
            <div className="flex items-center border border-velmora-stone/30 w-fit">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-ink transition-colors duration-200"
                aria-label="Decrease quantity"
              >
                <ChevronDown size={14} strokeWidth={2} />
              </button>
              <span className="w-10 text-center text-sm font-medium text-velmora-ink">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-ink transition-colors duration-200"
                aria-label="Increase quantity"
              >
                <ChevronUp size={14} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-velmora-gold text-velmora-obsidian text-xs tracking-widest uppercase font-semibold py-4 flex items-center justify-center gap-2 hover:bg-velmora-gold-light transition-all duration-300"
            >
              <ShoppingBag size={14} strokeWidth={2} />
              Add to Cart
            </button>
            <button
              onClick={() => setWishlist(v => !v)}
              className={`w-12 h-12 border flex items-center justify-center transition-all duration-200 ${
                wishlist
                  ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-gold'
                  : 'border-velmora-stone/30 text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold'
              }`}
              aria-label="Add to wishlist"
            >
              <Heart size={16} strokeWidth={1.5} fill={wishlist ? '#C9A96E' : 'none'} />
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-velmora-stone/20">
            <Accordion title="Description">
              <ul className="flex flex-col gap-2">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-velmora-mist">
                    <span className="text-velmora-gold mt-1.5 flex-shrink-0">·</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="text-sm text-velmora-mist leading-relaxed">{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="text-sm text-velmora-mist leading-relaxed">{product.shipping}</p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-velmora-stone/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-medium text-velmora-ink">{title}</span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-mist" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-mist" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-slideDown">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const related = products.filter(p => p.id !== currentId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentId]);

  return (
    <section className="bg-velmora-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-light text-velmora-ink tracking-wide">
            You May Also Like
          </h2>
          <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-linen aspect-[3/4] mb-3">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>
              <Link to={`/product/${product.slug}`}>
                <h3
                  id={product.titleId}
                  className="font-serif text-sm font-medium tracking-[0.12em] uppercase text-velmora-ink hover:text-velmora-gold transition-colors duration-200"
                >
                  {product.name}
                </h3>
              </Link>
              <p id={product.descId} className="text-xs text-velmora-mist mt-1">{product.shortDescription}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-medium text-velmora-ink">${product.price}</span>
                <button
                  onClick={() => addItem(product, 'gold', 1)}
                  className="text-[10px] tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors duration-200 font-medium"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

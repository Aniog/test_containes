import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-blush">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-manrope uppercase tracking-widest text-charcoal font-medium">
          {title}
        </span>
        {open ? <ChevronUp size={14} className="text-stone" /> : <ChevronDown size={14} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5 text-sm font-manrope text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug) || products[0];
  const related = products.filter(p => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    setSelectedVariant(product.variants?.[0] || null);
    setQuantity(1);
    setActiveImg(0);
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

  const images = [
    { id: product.imgId, id2: `${product.imgId}-pdp-main` },
    { id: product.imgId2, id2: `${product.imgId2}-pdp-alt` },
  ];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="text-xs font-manrope text-stone hover:text-gold transition-colors">Home</Link>
          <span className="text-stone/40 text-xs">/</span>
          <Link to="/shop" className="text-xs font-manrope text-stone hover:text-gold transition-colors">Shop</Link>
          <span className="text-stone/40 text-xs">/</span>
          <span className="text-xs font-manrope text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-blush hover:border-stone'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id2}-thumb`}
                    data-strk-img={`[${product.titleId}] gold jewelry ${i === 0 ? 'front view' : 'detail close up'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-blush/20 relative">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={`${img.id2}-main`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry ${i === 0 ? 'editorial' : 'worn on model'}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="text-[9px] font-manrope uppercase tracking-widest bg-gold text-obsidian px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="text-[9px] font-manrope uppercase tracking-widest bg-obsidian text-parchment px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl font-medium uppercase tracking-widest text-charcoal mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-blush fill-blush'}
                  />
                ))}
              </div>
              <span className="text-xs font-manrope text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-manrope font-medium text-charcoal mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="text-sm font-manrope text-stone leading-relaxed mb-6 border-b border-blush pb-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-manrope uppercase tracking-widest text-charcoal mb-3">
                  Finish: <span className="text-stone normal-case tracking-normal">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 text-xs font-manrope border transition-colors ${
                        selectedVariant === v
                          ? 'border-charcoal bg-charcoal text-parchment'
                          : 'border-blush text-stone hover:border-charcoal hover:text-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xs font-manrope uppercase tracking-widest text-charcoal">Qty</p>
              <div className="flex items-center border border-blush">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center text-sm font-manrope text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs font-manrope uppercase tracking-widest font-medium transition-colors duration-300 mb-3 ${
                added
                  ? 'bg-charcoal text-parchment'
                  : 'bg-gold text-obsidian hover:bg-gold-dark'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full py-4 text-xs font-manrope uppercase tracking-widest border border-blush text-stone hover:border-charcoal hover:text-charcoal transition-colors">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-6 pt-6 border-t border-blush grid grid-cols-2 gap-3">
              {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-[10px] font-manrope text-stone uppercase tracking-widest">{t}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To care for your piece: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <p className="text-xs font-manrope uppercase tracking-widest text-gold mb-3">You May Also Like</p>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl text-charcoal">
              Complete the Look
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

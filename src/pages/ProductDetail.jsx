import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-mist/60">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-charcoal group-hover:text-gold transition-colors">
          {title}
        </span>
        <ChevronDown className={`w-4 h-4 text-taupe transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-taupe leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      if (relatedRef.current) ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <main className="min-h-screen bg-ivory pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const fallbackRelated = products.filter(p => p.id !== product.id).slice(0, 4);
  const relatedProducts = related.length >= 2 ? related : fallbackRelated;

  const galleryImages = [
    { id: `${product.imgId}-g1`, query: `[${product.descId}] [${product.titleId}]` },
    { id: `${product.img2Id}-g2`, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.imgId}-g3`, query: `[${product.titleId}] jewelry detail close up` },
    { id: `${product.img2Id}-g4`, query: `[${product.descId}] gold jewelry flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-ivory pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-mist/40">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-xs text-taupe hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>
          <span className="text-mist">/</span>
          <Link to="/shop" className="font-inter text-xs text-taupe hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-mist">/</span>
          <span className="font-inter text-xs text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-mist'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
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
            <div className="flex-1 aspect-square overflow-hidden bg-parchment relative">
              {galleryImages.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-charcoal leading-tight mb-4"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-mist'}`}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-taupe">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Short description */}
            <p id={product.descId} className="font-inter text-sm text-taupe leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="w-full h-px bg-mist/60 mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-3">
                Finish: <span className="text-charcoal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold text-gold bg-gold/5'
                        : 'border-mist text-taupe hover:border-charcoal hover:text-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-[10px] uppercase tracking-widest text-taupe mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-mist w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-charcoal hover:bg-parchment transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-inter text-sm text-charcoal border-x border-mist">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-taupe hover:text-charcoal hover:bg-parchment transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-white font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold-dark transition-colors duration-200 mb-3"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full border border-charcoal text-charcoal font-inter text-xs uppercase tracking-widest py-4 hover:bg-charcoal hover:text-ivory transition-colors duration-200">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-[10px] uppercase tracking-widest text-taupe flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-mist/60">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials} {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="bg-parchment py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="font-inter text-[10px] uppercase tracking-widest text-gold mb-3">
                You May Also Like
              </p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal tracking-wide">
                Complete the Look
              </h2>
              <div className="w-10 h-px bg-gold mx-auto mt-4" />
            </div>
            <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            size={12}
            className={i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-warm-stone/30'}
            strokeWidth={0.5}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-warm-stone">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-obsidian/10">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian group-hover:text-gold transition-colors">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-warm-stone" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-warm-stone" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-manrope text-sm text-charcoal leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentId).slice(0, 4);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-obsidian/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="font-cormorant text-2xl md:text-3xl text-obsidian font-light mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {related.map(product => (
            <article key={product.id} className="group">
              <Link to={`/product/${product.slug}`}>
                <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-3">
                  <img
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product); }}
                      className="w-full bg-obsidian text-ivory font-manrope text-xs tracking-[0.12em] uppercase py-3 flex items-center justify-center gap-1.5 hover:bg-obsidian-light transition-colors"
                    >
                      <ShoppingBag size={11} strokeWidth={1.5} />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3
                  id={`related-title-${product.id}`}
                  className="font-cormorant text-sm tracking-widest uppercase text-obsidian hover:text-gold transition-colors leading-tight"
                >
                  {product.name}
                </h3>
                <p id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
                <p className="font-manrope text-sm font-medium text-obsidian mt-1">${product.price}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc] [pdp-title]`, ratio: '3x4', label: 'Main view' },
    { id: `pdp-detail-${product.imgId2}`, query: `[pdp-title] gold jewelry detail close-up`, ratio: '3x4', label: 'Detail view' },
    { id: `pdp-worn-${product.id}-c3`, query: `[pdp-title] worn on model editorial`, ratio: '3x4', label: 'Worn view' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    console.log('[PDP] Added to cart:', product.name, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-manrope text-xs text-warm-stone hover:text-obsidian transition-colors"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back
          </button>
          <span className="text-warm-stone/40 text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-warm-stone hover:text-obsidian transition-colors capitalize">
            {product.category}
          </Link>
          <span className="text-warm-stone/40 text-xs">/</span>
          <span className="font-manrope text-xs text-obsidian truncate">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImages.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-16 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-ivory-dark aspect-[3/4]">
              {galleryImages.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={img.label}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="font-manrope text-[9px] tracking-[0.15em] uppercase bg-obsidian text-ivory px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="font-manrope text-[9px] tracking-[0.15em] uppercase bg-gold text-obsidian px-2.5 py-1">
                  New
                </span>
              )}
            </div>

            {/* Product name */}
            <h1
              id="pdp-title"
              className="font-cormorant text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase text-obsidian font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p className="font-manrope text-2xl font-medium text-obsidian mt-4 mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p id="pdp-desc" className="font-manrope text-sm text-charcoal leading-relaxed mb-6 border-b border-obsidian/10 pb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-3">
                  Tone: <span className="text-gold capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2 font-manrope text-xs tracking-wider capitalize border transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-obsidian'
                          : 'border-obsidian/20 text-charcoal hover:border-gold'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-obsidian/20 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-obsidian hover:bg-ivory-dark transition-colors"
                >
                  <ChevronDown size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-obsidian hover:bg-ivory-dark transition-colors"
                >
                  <ChevronUp size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gold text-obsidian font-manrope text-xs tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors duration-300"
              >
                <ShoppingBag size={14} strokeWidth={1.5} />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
              <button className="w-full border border-obsidian/20 text-charcoal font-manrope text-xs tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-2 hover:border-obsidian hover:text-obsidian transition-all duration-300">
                <Heart size={14} strokeWidth={1.5} />
                Save to Wishlist
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 py-4 border-y border-obsidian/10">
              {['Free Worldwide Shipping', '30-Day Returns', 'Secure Checkout'].map(item => (
                <span key={item} className="font-manrope text-xs text-warm-stone flex items-center gap-1.5">
                  <span className="text-gold">✦</span> {item}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>{product.details}</span>
                <br /><br />
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts currentId={product.id} />
    </div>
  );
}

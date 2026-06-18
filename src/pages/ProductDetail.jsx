import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={13}
            className={i <= Math.round(rating) ? 'text-gold fill-gold' : 'text-stone'}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-muted">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone/30">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-[0.12em] uppercase text-ink">{title}</span>
        {open ? <ChevronUp size={16} className="text-muted" /> : <ChevronDown size={16} className="text-muted" />}
      </button>
      {open && (
        <div className="pb-5 font-manrope text-sm text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={product.shortDescription + ' ' + product.name}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-velvet/90 text-cream font-manrope text-[10px] tracking-[0.15em] uppercase py-3 flex items-center justify-center gap-2 hover:bg-velvet transition-colors"
          >
            <ShoppingBag size={12} />
            Quick Add
          </button>
        </div>
      </div>
      <span id={`related-${product.titleId}`} className="sr-only">{product.name}</span>
      <span id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</span>
      <Link to={`/product/${product.slug}`}>
        <h4 className="font-cormorant text-sm uppercase tracking-[0.1em] text-ink hover:text-gold transition-colors mb-1">
          {product.name}
        </h4>
      </Link>
      <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedMsg, setAddedMsg] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2000);
  };

  const images = [
    { id: product.imgId, query: product.shortDescription + ' ' + product.name },
    { id: product.img2Id, query: product.name + ' gold jewelry worn model' },
    { id: `${product.imgId}-3`, query: product.name + ' jewelry detail close up' },
  ];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <nav className="flex items-center gap-2 font-manrope text-xs text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image — render all, show active */}
            <div className="relative overflow-hidden bg-linen aspect-square md:aspect-[4/5]">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${i === activeImg ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                />
              ))}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-linen aspect-square w-20 flex-shrink-0 border-2 transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-stone'
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

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-ink font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-ink mb-4">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="font-manrope text-sm text-muted leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="h-px bg-stone/30 mb-6" />

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-manrope text-xs tracking-[0.12em] uppercase text-muted mb-3">
                  Tone: <span className="text-ink capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs tracking-[0.1em] uppercase px-5 py-2 border transition-colors capitalize ${
                        selectedVariant === v
                          ? 'border-gold bg-gold text-velvet'
                          : 'border-stone text-muted hover:border-ink hover:text-ink'
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
              <p className="font-manrope text-xs tracking-[0.12em] uppercase text-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-stone/50 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gold text-velvet font-manrope text-xs tracking-[0.2em] uppercase py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors"
              >
                <ShoppingBag size={15} />
                {addedMsg ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
              <button
                onClick={() => setWishlisted((v) => !v)}
                aria-label="Add to wishlist"
                className={`w-12 h-12 border flex items-center justify-center transition-colors ${
                  wishlisted
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-stone text-muted hover:border-gold hover:text-gold'
                }`}
              >
                <Heart size={16} className={wishlisted ? 'fill-gold' : ''} />
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-6">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-manrope text-[10px] tracking-[0.1em] uppercase text-muted flex items-center gap-1">
                  <span className="text-gold">✦</span> {t}
                </span>
              ))}
            </div>

            <div className="h-px bg-stone/30 mb-0" />

            {/* Accordions */}
            <Accordion title="Description">
              <p>{product.description}</p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {product.details.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">✦</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="bg-linen py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            className="w-3.5 h-3.5"
            style={{
              fill: i <= Math.round(rating) ? '#C9A96E' : 'none',
              color: i <= Math.round(rating) ? '#C9A96E' : '#C4B8A8',
            }}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-mist">{rating} ({count} reviews)</span>
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs font-semibold tracking-widest uppercase text-ink">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-mist flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-mist flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-6 font-manrope text-sm text-mist leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <Link to={`/product/${product.slug}`} className="group block">
        <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
          <span id={product.titleId} className="sr-only">{product.name}</span>
          <span id={product.descId} className="sr-only">{product.shortDescription}</span>
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <p className="font-cormorant text-sm font-medium tracking-widest uppercase text-ink group-hover:text-gold transition-colors duration-300">
          {product.name}
        </p>
        <p className="font-cormorant text-lg font-medium text-ink mt-1">${product.price}</p>
      </Link>
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

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
          <p className="font-cormorant text-3xl text-ink mb-4">Product not found</p>
          <button
            onClick={() => navigate('/shop')}
            className="font-manrope text-xs font-medium tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-velvet transition-all duration-300"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.imgId}` },
    { id: product.imgId2, id2: `pdp-alt-${product.imgId2}` },
  ];

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-24 md:pt-28 pb-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-manrope text-xs text-mist hover:text-gold transition-colors duration-300">Home</Link>
          <span className="text-stone/40 text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-mist hover:text-gold transition-colors duration-300">Shop</Link>
          <span className="text-stone/40 text-xs">/</span>
          <span className="font-manrope text-xs text-ink capitalize">{product.category}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Image Gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-linen aspect-square">
              <span id={product.titleId} className="sr-only">{product.name}</span>
              <span id={product.descId} className="sr-only">{product.description}</span>
              {activeImg === 0 ? (
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  data-strk-img-id={product.imgId2}
                  data-strk-img={`[${product.titleId}] gold jewelry detail close up`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} detail`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted(v => !v)}
                className="absolute top-4 right-4 w-9 h-9 bg-parchment/80 backdrop-blur-sm flex items-center justify-center hover:bg-parchment transition-colors duration-200"
                aria-label="Add to wishlist"
              >
                <Heart className={`w-4 h-4 transition-colors duration-200 ${wishlisted ? 'fill-gold text-gold' : 'text-mist'}`} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-linen aspect-square border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-gold' : 'border-transparent hover:border-stone/40'
                  }`}
                >
                  {i === 0 ? (
                    <img
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      data-strk-img-id={product.imgId2}
                      data-strk-img={`[${product.titleId}] detail`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} detail`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="lg:pt-4">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-velvet font-manrope text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="border border-ink text-ink font-manrope text-[9px] font-semibold tracking-widest uppercase px-2.5 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-cormorant text-3xl md:text-4xl font-medium tracking-widest uppercase text-ink leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <div className="mt-5 mb-6">
              <span className="font-cormorant text-4xl font-medium text-ink">${product.price}</span>
            </div>

            {/* Short description */}
            <p className="font-manrope text-sm text-mist leading-relaxed mb-8 border-b border-stone/20 pb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs font-semibold tracking-widest uppercase text-ink mb-3">
                Tone: <span className="text-gold capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 font-manrope text-xs font-medium tracking-widest uppercase transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-ink text-parchment'
                        : 'border border-stone/40 text-mist hover:border-ink hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs font-semibold tracking-widest uppercase text-ink mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-stone/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors duration-200"
                  aria-label="Decrease"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-manrope text-sm font-medium text-ink">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors duration-200"
                  aria-label="Increase"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-velvet font-manrope text-xs font-semibold tracking-widest uppercase py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2 mb-3"
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button className="w-full border border-stone/40 text-ink font-manrope text-xs font-medium tracking-widest uppercase py-4 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              Save to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-manrope text-xs text-mist">{t}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.details}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-linen py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink tracking-wide">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="font-manrope text-xs font-medium tracking-widest uppercase text-mist hover:text-gold transition-colors duration-300 hidden md:flex items-center gap-2"
            >
              View All <span className="w-6 h-px bg-current inline-block" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

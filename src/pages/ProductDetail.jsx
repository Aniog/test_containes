import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

const StarRating = ({ rating, count }) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < Math.floor(rating) ? 'text-gold fill-gold' : 'text-gold/30'}
          strokeWidth={0}
          fill="currentColor"
        />
      ))}
    </div>
    <span className="text-xs font-sans text-stone">{rating} ({count} reviews)</span>
  </div>
);

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gold/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-sans uppercase tracking-widest text-charcoal">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="text-sm font-sans text-charcoal-soft leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const RelatedProductCard = ({ product }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <Link to={`/product/${product.slug}`} className="group block" ref={cardRef}>
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <p id={`related-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-charcoal group-hover:text-gold-dark transition-colors">
          {product.name}
        </p>
        <p id={`related-desc-${product.id}`} className="text-xs font-sans text-stone mt-0.5">{product.shortDescription}</p>
        <p className="font-sans text-sm font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </Link>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product.id, 4) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImage(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-4">
        <p className="font-serif text-2xl text-charcoal">Product not found</p>
        <Link to="/shop" className="text-xs font-sans uppercase tracking-widest text-gold hover:text-gold-dark">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [
    { imgId: product.imgId, titleId: product.titleId, descId: product.descId },
    { imgId: product.imgId2, titleId: product.titleId, descId: product.descId },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-[10px] font-sans uppercase tracking-widest text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${idx}-${img.imgId}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-cream aspect-[3/4]">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  data-strk-img-id={`main-${idx}-${img.imgId}`}
                  data-strk-img={`[${img.descId}] [${img.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImage === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="text-[9px] font-sans uppercase tracking-widest bg-charcoal text-ivory px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="text-[9px] font-sans uppercase tracking-widest bg-gold text-charcoal px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-charcoal font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <div className="mt-4 mb-6">
              <span className="font-sans text-2xl font-medium text-charcoal">${product.price}</span>
              <span className="text-xs font-sans text-stone ml-2">Free shipping</span>
            </div>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-sans text-sm text-charcoal-soft leading-relaxed mb-8 border-t border-gold/20 pt-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-widest text-stone mb-3">
                Finish: <span className="text-charcoal">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-xs font-sans uppercase tracking-widest border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-charcoal bg-charcoal text-ivory'
                        : 'border-gold/30 text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs font-sans uppercase tracking-widest text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-gold/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-cream transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-sans text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:bg-cream transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-widest font-sans flex items-center justify-center gap-3 transition-colors duration-300 ${
                added
                  ? 'bg-gold text-charcoal'
                  : 'bg-charcoal text-ivory hover:bg-gold-dark'
              }`}
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="text-[10px] font-sans uppercase tracking-widest text-stone">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="font-medium text-charcoal">Material:</strong> {product.material}</p>
                <p className="mb-2">To keep your Velmora jewelry looking its best:</p>
                <ul className="list-disc list-inside space-y-1 text-charcoal-soft">
                  <li>Remove before swimming, showering, or exercising</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Clean gently with a soft, dry cloth</li>
                  <li>Avoid contact with perfume and lotions</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-3">Free worldwide shipping on all orders. Estimated delivery:</p>
                <ul className="list-disc list-inside space-y-1 text-charcoal-soft mb-3">
                  <li>US & Canada: 3–5 business days</li>
                  <li>Europe: 5–8 business days</li>
                  <li>Rest of World: 7–14 business days</li>
                </ul>
                <p>We offer hassle-free 30-day returns on all unworn items in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-gold/20 py-16 md:py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-2">Discover More</p>
            <h2 className="font-serif text-3xl text-charcoal font-light">You May Also Like</h2>
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
};

export default ProductDetail;

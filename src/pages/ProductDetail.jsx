import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone-light">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-widest text-espresso">{title}</span>
        {open ? (
          <ChevronUp size={14} className="text-stone flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-stone flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
};

const Stars = ({ rating, count }) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={i < Math.round(rating) ? '#B8935A' : 'none'}
          className={i < Math.round(rating) ? 'text-gold' : 'text-stone-light'}
        />
      ))}
    </div>
    <span className="font-inter text-xs text-stone">{rating} ({count} reviews)</span>
  </div>
);

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const product = getProductById(slug);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveThumb(0);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
      if (relatedRef.current) {
        ImageHelper.loadImages(strkImgConfig, relatedRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-cormorant text-2xl text-espresso">Product not found</p>
        <Link to="/shop" className="font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-colors duration-300">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.relatedIds);

  // Build gallery images: main + 3 alternates
  const galleryImages = [
    { id: `${product.imgId}-g0`, query: `[${product.descId}] [${product.titleId}]`, label: 'Main' },
    { id: `${product.imgId}-g1`, query: `[${product.titleId}] gold jewelry close up detail`, label: 'Detail' },
    { id: `${product.imgId}-g2`, query: `[${product.titleId}] gold jewelry worn model lifestyle`, label: 'Worn' },
    { id: `${product.imgId}-g3`, query: `[${product.titleId}] gold jewelry flat lay packaging`, label: 'Packaging' },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-ivory min-h-screen pt-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-xs text-stone hover:text-espresso transition-colors duration-300"
          >
            <ArrowLeft size={13} />
            Back
          </button>
          <span className="text-stone-light">/</span>
          <Link to="/shop" className="font-inter text-xs text-stone hover:text-espresso transition-colors duration-300">
            Shop
          </Link>
          <span className="text-stone-light">/</span>
          <span className="font-inter text-xs text-espresso">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveThumb(idx)}
                  className={`flex-shrink-0 w-16 h-20 md:w-14 md:h-18 overflow-hidden border transition-colors duration-300 ${
                    activeThumb === idx ? 'border-espresso' : 'border-stone-light hover:border-stone'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} ${img.label}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-stone-pale" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={galleryImages[activeThumb].id}
                data-strk-img={galleryImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="font-inter text-[9px] uppercase tracking-widest text-gold border border-gold px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="font-inter text-[9px] uppercase tracking-widest text-espresso border border-espresso px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-espresso font-medium mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <Stars rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Price */}
            <p className="font-inter text-2xl font-medium text-espresso mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-stone leading-relaxed mb-7"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-stone mb-3">
                Finish: <span className="text-espresso">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs px-4 py-2 border transition-colors duration-300 ${
                      selectedVariant === v
                        ? 'border-espresso bg-espresso text-ivory'
                        : 'border-stone-light text-stone hover:border-espresso hover:text-espresso'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="font-inter text-xs uppercase tracking-widest text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-stone-light w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} />
                </button>
                <span className="w-10 text-center font-inter text-sm text-espresso">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-espresso text-ivory font-inter text-xs uppercase tracking-[0.2em] py-4 hover:bg-espresso-light transition-colors duration-300 mb-3"
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>
            <button className="w-full border border-stone-light text-stone font-inter text-xs uppercase tracking-widest py-4 hover:border-espresso hover:text-espresso transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-stone-light">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-inter text-[10px] uppercase tracking-widest text-stone">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <AccordionItem title="Description">
                {product.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                {product.materials} {product.care}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div ref={relatedRef} className="mt-20 md:mt-28 pt-12 border-t border-stone-light">
            <div className="mb-10">
              <p className="font-inter text-xs uppercase tracking-[0.25em] text-gold mb-3">
                You May Also Like
              </p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
                Complete the Look
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

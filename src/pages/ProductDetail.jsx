import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gold/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs tracking-[0.12em] uppercase text-charcoal">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-warm-gray flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-warm-gray flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-inter text-sm text-charcoal leading-relaxed">{children}</p>
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
          fill={i < Math.floor(rating) ? '#C9A96E' : 'none'}
          className={i < Math.floor(rating) ? 'text-gold' : 'text-gold/30'}
        />
      ))}
    </div>
    <span className="font-inter text-xs text-warm-gray">
      {rating} ({count} reviews)
    </span>
  </div>
);

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs tracking-[0.1em] uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.img2Id, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.id}-img3-detail`, query: `[${product.titleId}] gold jewelry detail close-up` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-ivory pt-20" ref={containerRef}>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-inter text-xs text-warm-gray hover:text-gold transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back
        </button>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-gold' : 'border-transparent'
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
            <div className="flex-1 aspect-square md:aspect-[4/5] overflow-hidden bg-cream">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
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
              {product.tags?.includes('bestseller') && (
                <span className="bg-obsidian text-ivory font-inter text-[9px] tracking-[0.1em] uppercase px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="bg-gold text-obsidian font-inter text-[9px] tracking-[0.1em] uppercase px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest2 text-obsidian font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-inter text-2xl text-charcoal mb-3">${product.price}</p>

            {/* Rating */}
            <Stars rating={product.rating} count={product.reviewCount} />

            {/* Divider */}
            <div className="w-full h-px bg-gold/20 my-6" />

            {/* Short description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-charcoal leading-relaxed mb-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-3">
                Finish: <span className="text-charcoal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs tracking-[0.08em] px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian text-ivory border-obsidian'
                        : 'border-gold/40 text-charcoal hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-inter text-[10px] tracking-[0.15em] uppercase text-warm-gray mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-gold/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-inter text-sm text-charcoal">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-obsidian font-inter text-xs tracking-[0.15em] uppercase py-4 hover:bg-gold-light transition-colors duration-300 mb-3"
            >
              {added ? '✓ Added to Bag' : 'Add to Bag'}
            </button>
            <button className="w-full border border-obsidian text-obsidian font-inter text-xs tracking-[0.15em] uppercase py-4 hover:bg-obsidian hover:text-ivory transition-all duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gold/15">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-[10px] tracking-[0.1em] uppercase text-warm-gray">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>{product.materials}</span>
                <br /><br />
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRef} className="mt-20 md:mt-28 pt-12 border-t border-gold/15">
          <div className="text-center mb-10">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-gold mb-3">
              You May Also Like
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian tracking-wide">
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
};

export default ProductDetail;

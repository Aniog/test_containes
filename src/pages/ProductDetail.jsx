import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const StarRating = ({ rating, count }) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-gold/30'}`}
          strokeWidth={1}
        />
      ))}
    </div>
    <span className="font-inter text-xs text-velmora-muted">{rating} ({count} reviews)</span>
  </div>
);

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-gold/20">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs tracking-[0.12em] uppercase text-velmora-ink">{title}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-muted flex-shrink-0" strokeWidth={1.5} />
          : <ChevronDown className="w-4 h-4 text-velmora-muted flex-shrink-0" strokeWidth={1.5} />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-inter text-sm text-velmora-charcoal leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
};

const RelatedProductCard = ({ product }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Link ref={containerRef} to={`/product/${product.id}`} className="group block">
      <div className="aspect-product overflow-hidden bg-velmora-stone mb-3">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.titleId}] [related-${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p id={`related-${product.titleId}`} className="font-cormorant text-sm font-medium tracking-[0.1em] uppercase text-velmora-ink">
        {product.name}
      </p>
      <p id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</p>
      <p className="font-inter text-sm text-velmora-charcoal mt-0.5">${product.price}</p>
    </Link>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveThumb(0);
      setQuantity(1);
      setAdded(false);
    }
  }, [id, product]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [id, activeThumb]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-velmora-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs tracking-[0.12em] uppercase text-velmora-gold underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const thumbImages = [
    { imgId: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { imgId: `pdp-alt1-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry detail close up` },
    { imgId: `pdp-alt2-${product.imgId}b`, query: `[pdp-title-${product.id}] jewelry worn on model` },
    { imgId: `pdp-alt3-${product.imgId2}b`, query: `[pdp-title-${product.id}] jewelry flat lay` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 font-inter text-xs tracking-[0.08em] uppercase text-velmora-muted hover:text-velmora-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
            Back
          </button>
          <span className="text-velmora-gold/40">/</span>
          <Link to="/shop" className="font-inter text-xs tracking-[0.08em] uppercase text-velmora-muted hover:text-velmora-ink transition-colors">
            Shop
          </Link>
          <span className="text-velmora-gold/40">/</span>
          <span className="font-inter text-xs tracking-[0.08em] uppercase text-velmora-ink truncate max-w-[150px]">
            {product.name}
          </span>
        </nav>

        {/* Main product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-all duration-200 ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-velmora-gold/20 hover:border-velmora-gold/50'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${i}-${thumb.imgId}`}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-velmora-stone">
              <img
                data-strk-img-id={`pdp-active-${thumbImages[activeThumb].imgId}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category tag */}
            <p className="font-inter text-[11px] tracking-[0.15em] uppercase text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Product name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-3xl md:text-4xl font-medium tracking-[0.12em] uppercase text-velmora-ink leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating rating={product.rating} count={product.reviewCount} />

            {/* Price */}
            <p className="font-cormorant text-3xl font-light text-velmora-ink mt-5 mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-inter text-sm text-velmora-charcoal leading-relaxed mb-8 border-t border-velmora-gold/20 pt-6"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-[11px] tracking-[0.12em] uppercase text-velmora-muted mb-3">
                Finish: <span className="text-velmora-ink">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs tracking-[0.08em] px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                        : 'border-velmora-gold/30 text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-[11px] tracking-[0.12em] uppercase text-velmora-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-velmora-gold/30 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-ink hover:bg-velmora-stone transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-inter text-sm text-velmora-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-ink hover:bg-velmora-stone transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-inter text-xs tracking-[0.15em] uppercase py-4 transition-all duration-300 ${
                added
                  ? 'bg-velmora-gold text-velmora-ink'
                  : 'bg-velmora-ink text-velmora-cream hover:bg-velmora-charcoal'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-inter text-[10px] tracking-[0.08em] uppercase text-velmora-muted">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span className="block mb-2">{product.materials}</span>
                <span className="block">{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-velmora-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-cormorant text-4xl font-light text-velmora-ink tracking-wide">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

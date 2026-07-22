import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/home/Bestsellers';

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-inter text-xs uppercase tracking-[0.12em] text-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone flex-shrink-0" strokeWidth={1.5} />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone flex-shrink-0" strokeWidth={1.5} />
        )}
      </button>
      {open && (
        <div className="pb-5 font-inter text-sm text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const related = getRelatedProducts(id, 4);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-stone">Product not found</p>
          <Link to="/shop" className="font-inter text-xs uppercase tracking-[0.12em] text-champagne mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.img2Id, query: `[${product.titleId}] gold jewelry worn model` },
    { id: `${product.imgId}-detail`, query: `[${product.titleId}] jewelry detail close-up` },
  ];

  return (
    <div className="bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-inter text-[11px] text-stone hover:text-champagne transition-colors">
            Home
          </Link>
          <span className="text-stone/40 text-[11px]">/</span>
          <Link to="/shop" className="font-inter text-[11px] text-stone hover:text-champagne transition-colors">
            Shop
          </Link>
          <span className="text-stone/40 text-[11px]">/</span>
          <span className="font-inter text-[11px] text-obsidian">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border transition-colors ${
                    activeImg === i ? 'border-champagne' : 'border-linen hover:border-stone'
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

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-linen relative">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-champagne text-ivory font-inter text-[9px] uppercase tracking-[0.12em] px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Name & price */}
            <div className="mb-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-champagne mb-2">
                {product.category}
              </p>
              <h1
                id={product.titleId}
                className="font-cormorant text-3xl md:text-4xl uppercase tracking-[0.12em] text-obsidian font-medium leading-tight mb-2"
              >
                {product.name}
              </h1>
              <p className="font-inter text-sm text-stone mb-4">{product.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-champagne text-champagne'
                          : 'text-linen fill-linen'
                      }`}
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="font-inter text-xs text-stone">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-cormorant text-3xl font-light text-obsidian">
                ${product.price}
              </p>
            </div>

            <div className="w-full h-px bg-linen mb-6" />

            {/* Description */}
            <p
              id={product.descId}
              className="font-inter text-sm text-stone leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-[10px] uppercase tracking-[0.12em] text-obsidian mb-3">
                Finish: <span className="text-stone font-normal normal-case tracking-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-linen text-stone hover:border-obsidian hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-[10px] uppercase tracking-[0.12em] text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-inter text-sm text-obsidian border-x border-linen">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-inter text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                added
                  ? 'bg-champagne-dark text-ivory'
                  : 'bg-champagne text-ivory hover:bg-champagne-dark'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            <button className="w-full mt-3 py-4 border border-linen text-obsidian font-inter text-xs uppercase tracking-[0.15em] hover:border-obsidian transition-colors duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-inter text-[10px] text-stone uppercase tracking-[0.08em] flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-champagne inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <ul className="mt-3 space-y-1.5">
                  {product.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-champagne mt-2 flex-shrink-0" />
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
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="border-t border-linen bg-blush py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">
              You May Also Like
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian tracking-wide">
              Complete Your Look
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

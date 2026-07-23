import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-mink/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velvet">{title}</span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-stone" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-stone" />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-sans text-sm text-stone leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function RelatedProductCard({ product }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Link ref={containerRef} to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-3">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p id={`related-${product.titleId}`} className="font-sans text-[10px] tracking-widest uppercase text-velvet mb-1">
        {product.name}
      </p>
      <p className="font-serif text-base text-velvet">${product.price}</p>
    </Link>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-velvet mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase text-champagne border-b border-champagne pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, altId: product.imgId2 },
    { id: product.imgId2, altId: product.imgId },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-stone hover:text-velvet transition-colors"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back
        </button>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    activeImg === i ? 'border-champagne' : 'border-mink/20 hover:border-mink/50'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${i}-${img.id}`}
                    data-strk-img={`[${product.titleId}]`}
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
            <div className="flex-1 relative overflow-hidden bg-parchment aspect-[3/4]">
              <img
                data-strk-img-id={`main-${images[activeImg].id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1 id={product.titleId} className="font-serif text-3xl md:text-4xl text-velvet font-light tracking-wide uppercase mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < Math.floor(product.rating) ? 'text-champagne fill-champagne' : 'text-blush fill-blush'}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velvet mb-5">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="font-sans text-sm text-stone leading-relaxed mb-7 border-b border-mink/20 pb-7">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-velvet mb-3">
                Finish: <span className="text-stone">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-[10px] tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'border-champagne bg-champagne text-velvet'
                        : 'border-mink/40 text-stone hover:border-champagne hover:text-velvet'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-velvet mb-3">Quantity</p>
              <div className="flex items-center border border-mink/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-stone hover:text-velvet transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} strokeWidth={2} />
                </button>
                <span className="font-sans text-sm text-velvet w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-stone hover:text-velvet transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-champagne text-velvet font-sans text-xs tracking-widest uppercase font-semibold py-4 hover:bg-gold transition-colors duration-300 mb-3"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-velvet text-velvet font-sans text-xs tracking-widest uppercase py-4 hover:bg-velvet hover:text-ivory transition-colors duration-300 mb-7">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-7 pb-7 border-b border-mink/20">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] text-stone flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-champagne inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">{product.materials} Clean gently with a soft cloth. Avoid contact with water, perfume, and chemicals. Store in the provided pouch when not wearing.</Accordion>
              <Accordion title="Shipping & Returns">Free worldwide shipping on all orders. Delivered in 3–7 business days. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="text-center mb-10">
              <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-3">
                You May Also Like
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light">
                Complete the Look
              </h2>
              <div className="w-10 h-px bg-champagne mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {related.map(p => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

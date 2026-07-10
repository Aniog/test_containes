import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductById, getRelatedProducts } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const StarRating = ({ rating, count }) => (
  <div className="flex items-center gap-2">
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-ivory-300'}
          strokeWidth={1}
        />
      ))}
    </div>
    <span className="font-sans text-xs text-stone-warm">{rating} ({count} reviews)</span>
  </div>
);

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ivory-300">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest2 uppercase text-velvet-900 font-medium">{title}</span>
        {open ? <ChevronUp size={14} className="text-stone-warm" /> : <ChevronDown size={14} className="text-stone-warm" />}
      </button>
      <div className={`accordion-content ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-5 font-sans text-sm text-velvet-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const RelatedCard = ({ product }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-ivory-200 aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.descId}] [related-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span id={`related-${product.titleId}`} className="sr-only">{product.name}</span>
        <span id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</span>
      </Link>
      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h4 className="font-serif text-sm font-medium tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors">
            {product.name}
          </h4>
        </Link>
        <p className="font-sans text-sm font-medium text-velvet-900 mt-1">${product.price}</p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductById(slug);
  const related = getRelatedProducts(slug, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold Tone');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeThumb]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-serif text-2xl text-velvet-700">Product not found</p>
        <Link to="/shop" className="font-sans text-xs tracking-widest2 uppercase text-gold border-b border-gold pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [
    { id: product.imgId, titleId: product.titleId, descId: product.descId },
    { id: product.imgId2, titleId: `${product.titleId}-2`, descId: `${product.descId}-2` },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory-100 pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-sans text-xs text-stone-warm hover:text-velvet-900 transition-colors">
            <ArrowLeft size={12} />
            Shop
          </Link>
          <span className="text-stone-warm text-xs">/</span>
          <span className="font-sans text-xs text-velvet-900 capitalize">{product.category}</span>
          <span className="text-stone-warm text-xs">/</span>
          <span className="font-sans text-xs text-velvet-700">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-ivory-200 aspect-[3/4]">
              <img
                data-strk-img-id={images[activeThumb].id}
                data-strk-img={`[${images[activeThumb].descId}] [${images[activeThumb].titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span id={images[activeThumb].titleId} className="sr-only">{product.name}</span>
              <span id={images[activeThumb].descId} className="sr-only">{product.shortDescription}</span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`relative w-20 h-24 overflow-hidden bg-ivory-200 border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent hover:border-ivory-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <span id={`thumb-${img.titleId}`} className="sr-only">{product.name} view {i + 1}</span>
                  <span id={`thumb-${img.descId}`} className="sr-only">{product.shortDescription}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2 capitalize">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl font-medium tracking-widest2 uppercase text-velvet-900 mb-3 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="font-sans text-2xl font-medium text-velvet-900 mb-5">${product.price}</p>

            <div className="hairline mb-5" />

            <p className="font-sans text-sm text-velvet-700 leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velvet-900 mb-3">
                Tone: <span className="text-stone-warm font-normal">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 font-sans text-xs tracking-widest uppercase border transition-colors ${
                      selectedVariant === v
                        ? 'bg-velvet-900 text-ivory-100 border-velvet-900'
                        : 'bg-transparent text-velvet-900 border-ivory-300 hover:border-velvet-900'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-velvet-900 mb-3">Quantity</p>
              <div className="flex items-center border border-ivory-300 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velvet-700 hover:text-velvet-900 hover:bg-ivory-200 transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center font-sans text-sm text-velvet-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velvet-700 hover:text-velvet-900 hover:bg-ivory-200 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velvet-900 text-ivory-100 py-4 font-sans text-xs tracking-widest2 uppercase font-medium hover:bg-velvet-800 transition-colors mb-3"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
            <button className="w-full border border-gold text-gold py-4 font-sans text-xs tracking-widest2 uppercase hover:bg-gold hover:text-velvet-900 transition-colors">
              Buy It Now
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-sans text-[10px] tracking-widest uppercase text-stone-warm flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="font-medium text-velvet-900">Materials:</strong> {product.materials}</p>
                <p><strong className="font-medium text-velvet-900">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="hairline mb-10" />
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">You May Also Like</p>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-velvet-900">Complete the Look</h2>
            </div>
            <Link
              to="/shop"
              className="font-sans text-xs tracking-widest2 uppercase text-velvet-900 border-b border-velvet-900 pb-0.5 hover:text-gold hover:border-gold transition-colors hidden md:block"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

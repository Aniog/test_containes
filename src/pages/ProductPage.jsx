import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts, products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-velmora-stone/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.18em] uppercase font-medium text-velmora-obsidian">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-mist" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-mist" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="text-sm text-velmora-mist font-light leading-relaxed">{children}</p>
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
    <div ref={containerRef} className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <p id={`related-${product.descId}`} className="hidden">{product.shortDescription}</p>
      <Link to={`/product/${product.slug}`}>
        <h4 id={`related-${product.titleId}`} className="text-xs tracking-[0.15em] uppercase font-medium text-velmora-obsidian hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </h4>
      </Link>
      <p className="text-sm font-medium text-velmora-obsidian mt-1">${product.price}</p>
    </div>
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
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImg(0);
      setAdded(false);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-linen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const imgIds = [product.imgId, product.imgId2];
  const titleIds = [product.titleId, product.titleId];
  const descIds = [product.descId, product.descId];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="bg-velmora-linen min-h-screen pt-20">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-velmora-mist">
          <Link to="/" className="hover:text-velmora-gold transition-colors duration-200">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors duration-200">Shop</Link>
          <span>/</span>
          <span className="text-velmora-obsidian">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {imgIds.map((imgId, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-200 ${activeImg === i ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'}`}
                >
                  <img
                    data-strk-img-id={`thumb-${imgId}-${i}`}
                    data-strk-img={`[${descIds[i]}] [${titleIds[i]}] gold jewelry`}
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
            <div className="flex-1 relative overflow-hidden bg-velmora-cream aspect-[3/4]">
              <img
                data-strk-img-id={`main-${imgIds[activeImg]}-active`}
                data-strk-img={`[${descIds[activeImg]}] [${titleIds[activeImg]}] gold jewelry close up`}
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

            {/* Category */}
            <p className="text-[10px] tracking-[0.25em] uppercase text-velmora-gold font-medium mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl font-light text-velmora-obsidian tracking-[0.15em] uppercase mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}
                    strokeWidth={1}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-mist font-light">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-velmora-obsidian mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p id={product.descId} className="text-sm text-velmora-mist font-light leading-relaxed mb-7 border-t border-velmora-stone/20 pt-5">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-velmora-obsidian mb-3">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2 text-xs tracking-[0.12em] uppercase font-medium border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone/40 text-velmora-obsidian hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-7">
              <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-velmora-obsidian mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-stone/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-obsidian transition-colors duration-200"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-mist hover:text-velmora-obsidian transition-colors duration-200"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                added
                  ? 'bg-velmora-obsidian text-velmora-gold border border-velmora-gold'
                  : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5 py-4 border-t border-velmora-stone/20">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(item => (
                <span key={item} className="text-[9px] tracking-[0.15em] uppercase text-velmora-mist font-medium">
                  {item}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <strong className="text-velmora-obsidian font-medium">Materials:</strong> {product.materials}
                <br /><br />
                <strong className="text-velmora-obsidian font-medium">Care:</strong> {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
                <br /><br />
                We offer free returns within 30 days of delivery. Items must be unworn and in original packaging.
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-velmora-stone/20 bg-velmora-cream py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-obsidian tracking-wide">
                You May Also Like
              </h2>
              <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {related.map(p => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

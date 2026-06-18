import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-stone group-hover:text-obsidian transition-colors">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-mist transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <div className="font-manrope text-sm text-stone leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function RelatedCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.id}-desc] [related-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-obsidian/90 text-ivory font-manrope text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h4
            id={`related-${product.id}-title`}
            className="font-cormorant text-sm uppercase tracking-widest text-obsidian hover:text-gold transition-colors"
          >
            {product.name}
          </h4>
        </Link>
        <p id={`related-${product.id}-desc`} className="hidden">{product.shortDescription}</p>
        <p className="font-manrope text-sm font-medium text-obsidian mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product, 4) : [];

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveThumb(0);
    setSelectedVariant(0);
    setQuantity(1);
  }, [slug]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug, activeThumb]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex flex-col items-center justify-center gap-4 pt-20">
        <p className="font-cormorant text-2xl italic text-mist">Product not found</p>
        <Link to="/shop" className="font-manrope text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [
    { id: product.imgId, queryId: `pdp-img1-${product.id}`, altId: `pdp-img1-alt-${product.id}` },
    { id: product.img2Id, queryId: `pdp-img2-${product.id}`, altId: `pdp-img2-alt-${product.id}` },
  ];

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
  };

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-manrope text-xs text-mist hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back
          </button>
          <span className="text-mist/40 text-xs">/</span>
          <Link to="/shop" className="font-manrope text-xs text-mist hover:text-gold transition-colors">
            Shop
          </Link>
          <span className="text-mist/40 text-xs">/</span>
          <span className="font-manrope text-xs text-stone">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-16 md:h-20 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="150"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-linen aspect-[3/4]">
              <img
                data-strk-img-id={images[activeThumb].id}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-obsidian leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'}`}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-mist">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-obsidian mt-4">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="font-manrope text-sm text-stone leading-relaxed mt-4">
              {product.description}
            </p>

            <div className="w-full h-px bg-linen my-6" />

            {/* Variant selector */}
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-stone mb-3">
                Finish: <span className="text-obsidian">{product.variants[selectedVariant]}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`font-manrope text-xs px-5 py-2 border transition-colors ${
                      selectedVariant === i
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-linen text-stone hover:border-gold hover:text-obsidian'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-5">
              <p className="font-manrope text-xs uppercase tracking-widest text-stone mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-linen w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-gold hover:bg-linen transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-manrope text-sm text-obsidian border-x border-linen">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-gold hover:bg-linen transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-gold text-obsidian font-manrope text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-manrope text-[10px] uppercase tracking-widest text-mist flex items-center gap-1">
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
                <p className="mb-2"><strong className="text-obsidian">Materials:</strong> {product.materials}</p>
                <p><strong className="text-obsidian">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-linen bg-cream py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-cormorant text-2xl md:text-3xl font-light text-obsidian mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

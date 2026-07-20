import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, Minus, Plus, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductById(slug);

  useEffect(() => {
    if (!product) navigate('/shop');
  }, [product, navigate]);

  if (!product) return null;

  return <ProductDetailContent product={product} />;
}

function ProductDetailContent({ product }) {
  const containerRef = useRef(null);
  const relatedRef = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const { addItem } = useCart();
  const related = getRelatedProducts(product.id, 4);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [product.id]);

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.imgId}` },
    { id: product.imgId2, id2: `pdp-alt-${product.imgId2}` },
  ];

  const accordions = [
    { id: 'description', label: 'Description', content: product.longDescription },
    { id: 'materials', label: 'Materials & Care', content: product.materials },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ];

  return (
    <div className="min-h-screen bg-parchment pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 border-b border-divider">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="font-manrope text-xs text-mist hover:text-gold transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-3 h-3" />
            Shop
          </Link>
          <span className="text-whisper text-xs">/</span>
          <span className="font-manrope text-xs text-ink uppercase tracking-widest">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-square bg-linen overflow-hidden">
              <img
                data-strk-img-id={`pdp-active-${product.imgId}-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-20 bg-linen overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-divider'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.id2}`}
                    data-strk-img={`[${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-ink font-light mb-3 leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'
                    }`}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-mist">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-ink font-light mb-6">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="font-manrope text-sm text-mist leading-relaxed mb-8 border-b border-divider pb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-xs uppercase tracking-widest text-ink mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-cream'
                        : 'border-divider text-mist hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-xs uppercase tracking-widest text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-mist hover:text-ink transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-gold text-cream font-manrope text-xs uppercase tracking-widest py-4 hover:bg-gold-dark transition-colors mb-3"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
            <button className="w-full border border-stone text-mist font-manrope text-xs uppercase tracking-widest py-4 hover:border-gold hover:text-gold transition-colors">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 pt-8 border-t border-divider flex flex-wrap gap-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-manrope text-xs text-mist flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-divider">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-divider">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-manrope text-xs uppercase tracking-widest text-ink">
                      {acc.label}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4 text-mist" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-mist" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-5">
                      <p className="font-manrope text-sm text-mist leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-divider bg-linen py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink mb-10">
            You May Also Like
          </h2>
          <div ref={relatedRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <RelatedProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RelatedProductCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group">
      <div className="relative aspect-square bg-parchment overflow-hidden mb-4">
        <img
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3
        id={`related-title-${product.id}`}
        className="font-cormorant text-sm uppercase tracking-widest text-ink group-hover:text-gold transition-colors mb-1"
      >
        {product.name}
      </h3>
      <p className="font-manrope text-sm text-mist">${product.price}</p>
    </Link>
  );
}

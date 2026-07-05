import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-ink">{title}</span>
        {open ? <ChevronUp size={14} className="text-muted" /> : <ChevronDown size={14} className="text-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="font-manrope text-sm text-muted leading-relaxed">{children}</p>
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
    <Link ref={containerRef} to={`/product/${product.slug}`} className="group flex flex-col">
      <div className="relative overflow-hidden bg-parchment aspect-portrait">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span id={`related-title-${product.id}`} className="sr-only">{product.name}</span>
        <span id={`related-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
      </div>
      <div className="pt-3">
        <span className="font-cormorant text-sm uppercase tracking-widest2 text-ink block">{product.name}</span>
        <span className="font-manrope text-sm font-medium text-ink mt-1 block">${product.price}</span>
      </div>
    </Link>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const related = product ? getRelatedProducts(product) : [];
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-muted italic mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-widest uppercase text-gold hover:text-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, id2: product.imgId2, titleId: product.titleId, descId: product.descId },
    { id: product.imgId2, id2: product.imgId, titleId: `${product.titleId}-2`, descId: `${product.descId}-2` },
  ];

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-manrope text-xs tracking-wider uppercase text-muted hover:text-gold transition-colors duration-300 mb-10"
        >
          <ArrowLeft size={12} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-cream aspect-portrait">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                data-strk-img-id={activeImg === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span id={`pdp-title-${product.id}`} className="sr-only">{product.name}</span>
              <span id={`pdp-desc-${product.id}`} className="sr-only">{product.description}</span>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative w-20 h-24 overflow-hidden bg-cream flex-shrink-0 transition-all duration-200 ${
                    activeImg === idx ? 'ring-1 ring-gold' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`View ${idx + 1}`}
                    data-strk-img-id={idx === 0 ? `thumb-${product.imgId}` : `thumb-${product.imgId2}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="font-manrope text-[10px] tracking-widest uppercase text-gold mb-3">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <h1 className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest2 text-ink font-medium leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                    stroke={i < Math.floor(product.rating) ? 'none' : '#C9A96E'}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-cormorant text-3xl text-ink mb-6">${product.price}</p>

            <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] tracking-widest uppercase text-muted mb-3">
                Finish: <span className="text-ink">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-wider px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-divider text-muted hover:border-gold hover:text-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-[10px] tracking-widest uppercase text-muted mb-3">Quantity</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors duration-200"
                >
                  −
                </button>
                <span className="w-10 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-ink transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase py-4 hover:bg-gold-dark transition-colors duration-300 mb-3"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>
            <button className="w-full border border-ink text-ink font-manrope text-xs tracking-widest uppercase py-4 hover:bg-ink hover:text-parchment transition-all duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="flex gap-6 mt-6 pt-6 border-t border-divider">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map((t) => (
                <span key={t} className="font-manrope text-[10px] tracking-wider text-muted">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <AccordionItem title="Description">{product.description}</AccordionItem>
              <AccordionItem title="Materials & Care">{product.materials} Clean gently with a soft cloth. Avoid contact with water, perfume, and harsh chemicals.</AccordionItem>
              <AccordionItem title="Shipping & Returns">
                Free worldwide shipping on all orders. Standard delivery 5–7 business days. Express available at checkout. Returns accepted within 30 days of delivery — items must be unworn and in original packaging.
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-divider">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

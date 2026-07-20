import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/shop/ProductCard';
import { ProductDetailMainImage, ProductDetailThumbs } from '@/components/shop/ProductImages';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-stone">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-inter text-xs tracking-widest uppercase text-charcoal">{title}</span>
        {open ? (
          <ChevronUp size={14} className="text-warm-gray flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-warm-gray flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="pb-6">
          <p className="font-inter text-sm text-warm-gray leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  );
}

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          className={i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-stone fill-stone'}
        />
      ))}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const related = product ? getRelatedProducts(product) : [];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product?.variants?.[0] || 'Gold');
    setActiveImg(0);
    setQuantity(1);
    setAdded(false);
  }, [id, product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-inter text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = [
    {
      imgId: `pdp-main-${product.imgId}`,
      imgQuery: 'gold jewelry demi-fine close up product detail woman wearing earrings necklace',
    },
    {
      imgId: `pdp-alt-${product.img2Id}`,
      imgQuery: 'gold jewelry worn model alternate view demi-fine earrings necklace portrait',
    },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <Link
          to="/shop"
          className="flex items-center gap-2 font-inter text-xs tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors"
        >
          <ArrowLeft size={12} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-3">
            {/* Main image */}
            <div className="relative overflow-hidden bg-cream aspect-[4/5]">
              <ProductDetailMainImage productId={product.id} activeImg={activeImg} />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-cream flex-shrink-0 transition-all duration-300 ${
                    activeImg === i ? 'ring-1 ring-charcoal' : 'ring-1 ring-transparent hover:ring-stone'
                  }`}
                  style={{ width: 72, height: 90 }}
                >
                  <ProductDetailThumbs productId={product.id} thumbIndex={i} />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags?.includes('bestseller') && (
                <span className="font-inter text-[9px] tracking-widest uppercase bg-gold text-ivory px-2 py-1">
                  Bestseller
                </span>
              )}
              {product.tags?.includes('new') && (
                <span className="font-inter text-[9px] tracking-widest uppercase bg-charcoal text-ivory px-2 py-1">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="font-inter text-sm tracking-widest2 uppercase text-charcoal mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-cormorant text-3xl text-charcoal mb-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <Stars rating={product.rating} />
              <span className="font-inter text-xs text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Short description */}
            <p className="font-inter text-sm text-warm-gray leading-relaxed mb-8 border-b border-stone pb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-3">
                  Finish: <span className="text-charcoal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-inter text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors duration-300 ${
                        selectedVariant === v
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'bg-transparent text-charcoal border-stone hover:border-charcoal'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-[10px] tracking-widest uppercase text-warm-gray mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-stone w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={12} />
                </button>
                <span className="font-inter text-sm text-charcoal w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-charcoal hover:text-gold transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-inter text-xs tracking-widest uppercase py-5 transition-colors duration-300 ${
                added
                  ? 'bg-gold-dark text-ivory'
                  : 'bg-charcoal text-ivory hover:bg-gold'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map((t) => (
                <span key={t} className="font-inter text-[10px] tracking-widest uppercase text-warm-gray flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
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
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div ref={relatedRef} className="border-t border-stone bg-cream py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

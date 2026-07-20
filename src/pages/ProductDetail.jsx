import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts, formatPrice, generateStars } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velvet-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-overline text-velvet-800">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velvet-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velvet-500" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-velvet-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

function ProductImageGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-[4/5] bg-velvet-100 overflow-hidden">
        <img
          data-strk-img-id={`${images[activeIndex].id}-detail`}
          data-strk-img={`[pdp-name] [pdp-desc] gold jewelry product photography`}
          data-strk-img-ratio={images[activeIndex].ratio}
          data-strk-img-width={images[activeIndex].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 aspect-square overflow-hidden border-2 transition-colors ${
              activeIndex === index ? 'border-gilded-600' : 'border-transparent hover:border-velvet-300'
            }`}
          >
            <img
              data-strk-img-id={`${img.id}-thumb`}
              data-strk-img={`[pdp-name] gold jewelry thumbnail ${index + 1}`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function RelatedProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block overflow-hidden bg-velvet-100 aspect-[4/5]">
        <img
          data-strk-img-id={`related-${product.id}`}
          data-strk-img={`[related-name-${product.id}] gold jewelry product`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.slug}`}>
          <h4 className="text-product-name text-sm text-velvet-900">
            <span id={`related-name-${product.id}`}>{product.name}</span>
          </h4>
        </Link>
        <p className="font-serif text-base text-velvet-950 mt-1">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
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
  }, [slug, selectedVariant]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-heading text-velvet-950 mb-4">Product Not Found</h1>
          <p className="text-body text-velvet-500 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const stars = generateStars(product.rating);

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div className="flex items-center gap-2 text-xs text-velvet-500">
          <Link to="/" className="hover:text-velvet-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-velvet-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velvet-900">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div>
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 text-xs text-velvet-500 hover:text-velvet-900 transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>

            <p className="text-overline text-gilded-600 mb-2">{product.material}</p>
            <h1 id="pdp-name" className="font-serif text-3xl lg:text-4xl tracking-wider text-velvet-950 uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(stars.full)].map((_, i) => (
                  <Star key={`full-${i}`} className="w-4 h-4 fill-gilded-500 text-gilded-500" />
                ))}
                {[...Array(stars.half)].map((_, i) => (
                  <Star key={`half-${i}`} className="w-4 h-4 fill-gilded-500/50 text-gilded-500" />
                ))}
              </div>
              <span className="text-sm text-velvet-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velvet-950 mt-4">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p id="pdp-desc" className="text-body text-velvet-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-overline text-velvet-700 mb-3">
                Tone: <span className="text-velvet-950 font-medium normal-case tracking-normal">
                  {product.variants[selectedVariant].name}
                </span>
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(index)}
                    disabled={!variant.inStock}
                    className={`px-5 py-2.5 text-sm border transition-all duration-200 ${
                      selectedVariant === index
                        ? 'border-velvet-950 bg-velvet-950 text-white'
                        : variant.inStock
                          ? 'border-velvet-300 text-velvet-700 hover:border-velvet-900'
                          : 'border-velvet-200 text-velvet-400 cursor-not-allowed line-through'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-overline text-velvet-700 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-velvet-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velvet-500 hover:text-velvet-900 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-medium text-velvet-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velvet-500 hover:text-velvet-900 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, product.variants[selectedVariant].value, quantity)}
              className="btn-primary w-full mt-8 text-base py-4"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.material}</p>
                <p>{product.careInstructions}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">
                  <strong>Free worldwide shipping</strong> on all orders. Estimated delivery: 5-10 business days.
                </p>
                <p>
                  <strong>30-day returns</strong> — if you're not completely in love with your purchase, 
                  return it within 30 days for a full refund. Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 lg:mt-28 pt-16 border-t border-velvet-200">
            <h2 className="text-heading text-velvet-950 text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

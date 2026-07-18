import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/product/StarRating';
import Accordion from '@/components/product/Accordion';
import ProductCard from '@/components/product/ProductCard';
import { Minus, Plus, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      const firstAvailable = product.variants.find((v) => v.available);
      setSelectedVariant(firstAvailable || product.variants[0]);
      setSelectedImage(0);
      setQuantity(1);
      setAdded(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [slug, selectedImage]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-accent text-sm underline">
            Browse our collection
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    if (!selectedVariant || !selectedVariant.available) return;
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ];

  const currentImage = product.images[selectedImage];

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 pb-4 md:pb-6 bg-background">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-muted">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[3/4] bg-border overflow-hidden mb-3">
              <img
                data-strk-img-id={currentImage.id}
                data-strk-img={`[product-detail-name] [product-detail-desc]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={currentImage.alt}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedImage((i) => (i === 0 ? product.images.length - 1 : i - 1))
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedImage((i) => (i === product.images.length - 1 ? 0 : i + 1))
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-16 md:w-20 md:h-20 border overflow-hidden transition-colors ${
                      selectedImage === idx ? 'border-foreground' : 'border-border'
                    }`}
                  >
                    <img
                      data-strk-img-id={`${img.id}-thumb`}
                      data-strk-img={`[product-detail-name]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="150"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:pt-4">
            <p
              id="product-detail-name"
              className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide"
            >
              {product.name}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="font-serif text-xl md:text-2xl">${product.price}</span>
              {product.compareAtPrice && (
                <span className="text-muted-light line-through text-sm">${product.compareAtPrice}</span>
              )}
            </div>
            <div className="mt-3">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p
              id="product-detail-desc"
              className="mt-6 text-sm text-muted leading-relaxed"
            >
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wide text-muted mb-2">
                Color: {selectedVariant?.label}
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant)}
                    disabled={!variant.available}
                    className={`px-4 py-2 text-xs uppercase tracking-wide border transition-all duration-200 ${
                      selectedVariant?.id === variant.id
                        ? 'border-foreground bg-foreground text-background'
                        : variant.available
                        ? 'border-border hover:border-foreground'
                        : 'border-border text-muted-light line-through cursor-not-allowed'
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wide text-muted mb-2">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 hover:bg-border transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm min-w-[40px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 hover:bg-border transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`mt-6 w-full py-4 text-sm font-medium uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-accent text-white hover:bg-accent-hover'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-border py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10 md:mb-14">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} showQuickAdd={false} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ChevronDown, Heart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import ProductCard from '@/components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-medium tracking-widest uppercase text-velmora-base">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-muted transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (product?.variants?.length) {
      setSelectedVariant(product.variants[0]);
    }
    setSelectedImage(0);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-base mb-2">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-velmora-gold hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant);
  };

  return (
    <div ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
              <img
                data-strk-img-id={`product-${product.id}-img-${selectedImage}`}
                data-strk-img={`[pd-name] [pd-desc]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {[0, 1].map(i => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${i}`}
                    data-strk-img={`[pd-name] [pd-desc]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-4">
            <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-2">
              {product.category}
            </p>
            <h1
              id="pd-name"
              className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-widest-xl uppercase text-velmora-base mb-3"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} size={14} showValue />
              <span className="text-xs text-velmora-muted">({product.reviews} reviews)</span>
            </div>
            <p className="text-xl font-medium text-velmora-base mb-6">
              ${product.price}
            </p>
            <p id="pd-desc" className="text-sm text-velmora-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-medium tracking-widest uppercase text-velmora-base mb-3">
                  Color
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 text-xs font-medium tracking-wider uppercase border transition-colors ${
                        selectedVariant === v
                          ? 'border-velmora-base bg-velmora-base text-white'
                          : 'border-velmora-border text-velmora-base hover:border-velmora-base'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-medium tracking-widest uppercase text-velmora-base mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-base transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-10 border-t border-b border-velmora-border flex items-center justify-center text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-border flex items-center justify-center hover:border-velmora-base transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-10">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-gold text-white py-4 text-xs font-medium tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-300"
              >
                Add to Bag
              </button>
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-14 h-14 border flex items-center justify-center transition-colors ${
                  wishlisted
                    ? 'border-red-400 text-red-400'
                    : 'border-velmora-border text-velmora-base hover:border-velmora-base'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Accordions */}
            <Accordion title="Description">
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns">
              {product.shipping}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="border-t border-velmora-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-base text-center mb-10 md:mb-14">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} showQuickAdd={false} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

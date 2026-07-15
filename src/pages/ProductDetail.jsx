import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import StarRating from '@/components/ui/StarRating';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/shop/ProductCard';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-[var(--color-text-muted)] mb-4">Product not found.</p>
        <Link to="/shop" className="text-[var(--color-gold)] underline">Return to Shop</Link>
      </div>
    );
  }

  // Filter images by selected variant tone
  const variantImages = product.images.filter((img) => img.tone === selectedVariant?.tone);
  const displayImages = variantImages.length > 0 ? variantImages : product.images;
  const currentImage = displayImages[selectedImageIndex] || displayImages[0];

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setSelectedImageIndex(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
      {/* Back Link */}
      <Link 
        to="/shop" 
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <div className="gallery-main mb-3">
            <img 
              src={currentImage.url} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {displayImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`gallery-thumb ${selectedImageIndex === index ? 'active' : ''}`}
              >
                <img src={img.url} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-2">
          <h1 className="product-name text-3xl md:text-4xl tracking-[0.06em] mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
            <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          </div>

          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-6">
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-3">Tone</div>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => handleVariantChange(variant)}
                  className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <div className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-3">Quantity</div>
            <div className="qty-selector inline-flex">
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="qty-value">{quantity}</span>
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button onClick={handleAddToCart} className="w-full mb-4">
            Add to Cart
          </Button>
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            Ships in 1–2 business days
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              {product.description} Each piece is hand-finished in our atelier and inspected for quality before shipping.
            </Accordion>
            <Accordion title="Materials & Care">
              {product.material}. To care for your jewelry, avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place. Clean gently with a soft cloth.
            </Accordion>
            <Accordion title="Shipping & Returns">
              Complimentary worldwide shipping on all orders. Returns accepted within 30 days of delivery for unworn items in original packaging. See our full policy for details.
            </Accordion>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-12 border-t border-[var(--color-border)]">
          <h3 className="heading-display text-2xl mb-8">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

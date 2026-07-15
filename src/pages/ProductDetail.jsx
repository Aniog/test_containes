import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ChevronLeft, Heart } from 'lucide-react';
import { getProductById, getRelatedProducts, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductImage from '@/components/ui/ProductImage';
import StarRating from '@/components/ui/StarRating';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const mainImageRef = useRef(null);

  useEffect(() => {
    if (product) {
      const inStock = product.variants.find((v) => v.inStock);
      setSelectedVariant(inStock || product.variants[0]);
      setSelectedImage(0);
      setQuantity(1);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center pt-24">
        <p className="font-serif text-3xl text-base mb-4">Product not found</p>
        <Link
          to="/shop"
          className="bg-base text-ivory px-6 py-3 text-xs uppercase tracking-[0.16em] font-medium"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    if (selectedVariant?.inStock) {
      addItem(product, selectedVariant.id, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ];

  return (
    <div className="bg-ivory min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-6 md:py-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted hover:text-gold transition-colors mb-6 md:mb-8"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24">
          {/* Gallery */}
          <div className="space-y-4">
            <div
              ref={mainImageRef}
              className="aspect-[4/5] bg-cream overflow-hidden relative"
            >
              <ProductImage
                image={product.images[selectedImage]}
                alt={product.name}
                containerClassName="w-full h-full"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-ivory/90 backdrop-blur-sm text-base text-[10px] uppercase tracking-widest px-2.5 py-1 font-sans font-medium">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 md:w-24 md:h-24 bg-cream overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-gold' : 'border-transparent'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <ProductImage
                    image={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    containerClassName="w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:pt-8">
            <StarRating
              rating={product.rating}
              showValue
              reviewCount={product.reviewCount}
              size={14}
            />
            <h1 className="product-name text-2xl md:text-3xl lg:text-4xl text-base mt-4 mb-3">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl font-sans font-medium text-base mb-6">
              {formatPrice(product.price)}
            </p>
            <p className="text-muted leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.14em] text-muted font-medium block mb-3">
                Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    disabled={!variant.inStock}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.12em] font-medium border transition-all ${
                      selectedVariant?.id === variant.id
                        ? 'bg-base text-ivory border-base'
                        : 'bg-transparent text-base border-linen hover:border-gold'
                    } ${
                      !variant.inStock
                        ? 'opacity-50 cursor-not-allowed line-through decoration-muted'
                        : ''
                    }`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
              {selectedVariant && !selectedVariant.inStock && (
                <p className="text-xs text-red-600 mt-2">Selected tone is out of stock</p>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-xs uppercase tracking-[0.14em] text-muted font-medium block mb-3">
                Quantity
              </span>
              <div className="inline-flex items-center border border-linen">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-base font-medium">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-10">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.inStock}
                className={`flex-1 py-4 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                  added
                    ? 'bg-base-soft text-ivory'
                    : 'bg-gold text-ivory hover:bg-gold-light'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
              <button
                type="button"
                className="w-14 h-14 flex items-center justify-center border border-linen hover:border-gold hover:text-gold transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-linen pt-12 md:pt-16">
            <h2 className="font-serif text-2xl md:text-3xl text-base mb-8 md:mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} showQuickAdd={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

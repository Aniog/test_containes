import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Accordion } from '../ui/Accordion';
import { QuantitySelector } from '../ui/QuantitySelector';
import { Rating } from '../ui/Rating';
import { ProductImagePlaceholder } from '../ui/ProductImagePlaceholder';
import { Button } from '../ui/Button';
import { ProductCard } from '../home/ProductCard';
import { getProductBySlug, getRelatedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';

export function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const relatedProducts = getRelatedProducts(product?.id, 4);
  const { addToCart, isLoading } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-warm-gray-900 mb-4">Product not found</h1>
          <Link to="/shop" className="btn-secondary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const imageType = product.category === 'necklaces' ? 'necklace' 
    : product.category === 'huggies' ? 'huggie'
    : product.category === 'sets' ? 'set'
    : 'earring';

  return (
    <div className="min-h-screen bg-warm-ivory">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-warm-gray-400">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-champagne transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-warm-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[4/5] bg-warm-gray-50 overflow-hidden">
              <ProductImagePlaceholder 
                type={imageType}
                className="absolute inset-0 w-full h-full"
              />
              
              {/* Navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-24 border-2 transition-colors ${
                      selectedImage === index ? 'border-champagne' : 'border-transparent'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <ProductImagePlaceholder 
                      type={imageType}
                      className="w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Title & Price */}
            <div className="mb-6">
              <h1 className="product-name text-warm-gray-900 text-lg mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-medium text-warm-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <Rating value={Math.round(product.rating)} />
              <span className="text-sm text-warm-gray-600">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-warm-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-xs font-medium tracking-wider uppercase text-warm-gray-900 mb-3">
                  Finish: <span className="text-warm-gray-600">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 text-xs font-medium tracking-wider uppercase border transition-all ${
                        selectedVariant === variant
                          ? 'border-warm-gray-900 bg-warm-gray-900 text-warm-ivory'
                          : 'border-warm-gray-200 text-warm-gray-600 hover:border-warm-gray-900'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity selector */}
            <div className="mb-8">
              <p className="text-xs font-medium tracking-wider uppercase text-warm-gray-900 mb-3">
                Quantity
              </p>
              <QuantitySelector 
                value={quantity} 
                onChange={setQuantity} 
                min={1} 
                max={10}
              />
            </div>

            {/* Add to cart */}
            <div className="flex gap-4 mb-6">
              <Button
                variant="primary"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                loading={isLoading}
              >
                Add to Bag — ${(product.price * quantity).toFixed(2)}
              </Button>
              <button
                type="button"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-14 h-14 border flex items-center justify-center transition-colors ${
                  isWishlisted
                    ? 'border-champagne bg-champagne/10 text-champagne'
                    : 'border-warm-gray-200 text-warm-gray-600 hover:border-warm-gray-900'
                }`}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
              </button>
              <button
                type="button"
                className="w-14 h-14 border border-warm-gray-200 flex items-center justify-center text-warm-gray-600 hover:border-warm-gray-900 transition-colors"
                aria-label="Share"
              >
                <Share2 size={20} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 py-4 border-t border-b border-warm-gray-100 mb-8">
              <span className="text-xs text-warm-gray-600">✓ Free Shipping</span>
              <span className="text-xs text-warm-gray-600">✓ 30-Day Returns</span>
              <span className="text-xs text-warm-gray-600">✓ Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="divide-y divide-warm-gray-100">
              <Accordion title="Description" defaultOpen>
                <p className="mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.details?.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-champagne mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>

              <Accordion title="Materials & Care">
                <p className="mb-4">
                  <strong>Materials:</strong> Our jewelry is crafted with a stainless 
                  steel or brass base and finished with 18K gold plating.
                </p>
                <p className="mb-4">
                  <strong>Care Instructions:</strong>
                </p>
                <p>{product.care}</p>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <p className="mb-4">
                  <strong>Shipping:</strong> We offer free worldwide shipping on all 
                  orders over $50. Standard shipping takes 5-7 business days.
                </p>
                <p>
                  <strong>Returns:</strong> We accept returns within 30 days of purchase. 
                  Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 bg-warm-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-warm-gray-900 text-center mb-12">
            You May Also Love
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;

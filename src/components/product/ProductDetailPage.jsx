import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, Truck, RotateCcw, Shield } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductGallery from './ProductGallery';
import ProductAccordion from './ProductAccordion';
import ProductCard from '../shared/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || null
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1
            className="text-2xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="text-[var(--champagne-gold)] hover:underline"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'fill-[var(--champagne-gold)] text-[var(--champagne-gold)]'
                : i === fullStars && hasHalf
                ? 'fill-[var(--champagne-gold)]/50 text-[var(--champagne-gold)]'
                : 'text-[var(--light-warm-gray)]'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Materials</p>
            <p>{product.materials}</p>
          </div>
          <div>
            <p className="font-medium mb-2">Care Instructions</p>
            <p>{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[var(--champagne-gold)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Free Shipping</p>
              <p className="text-sm text-[var(--soft-gray)]">
                On all orders over $50. Standard delivery 5-7 business days.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <RotateCcw className="w-5 h-5 text-[var(--champagne-gold)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Easy Returns</p>
              <p className="text-sm text-[var(--soft-gray)]">
                30-day return policy. Items must be unworn and in original packaging.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[var(--champagne-gold)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Quality Guarantee</p>
              <p className="text-sm text-[var(--soft-gray)]">
                All pieces are quality-checked before shipping. 1-year warranty included.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="pt-20 md:pt-24">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[var(--soft-gray)]">
            <li>
              <Link to="/" className="hover:text-[var(--champagne-gold)]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/shop" className="hover:text-[var(--champagne-gold)]">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--deep-espresso)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] text-xs tracking-wider mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1
              className="product-name text-2xl md:text-3xl text-[var(--deep-espresso)] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              {renderStars(product.rating)}
              <span className="text-sm text-[var(--soft-gray)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-medium text-[var(--deep-espresso)] mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Divider */}
            <div className="divider mb-6" />

            {/* Description */}
            <p className="text-[var(--charcoal)] leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-[var(--deep-espresso)] mb-3">
                  Finish: <span className="font-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 text-sm border transition-all ${
                        selectedVariant === variant
                          ? 'border-[var(--champagne-gold)] bg-[var(--champagne-gold)] text-[var(--deep-espresso)]'
                          : 'border-[var(--light-warm-gray)] text-[var(--charcoal)] hover:border-[var(--champagne-gold)]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm font-medium text-[var(--deep-espresso)] mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-[var(--light-warm-gray)] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-[var(--champagne-gold)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-[var(--champagne-gold)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 font-medium text-sm tracking-wider transition-all ${
                  isAdded
                    ? 'bg-[var(--success)] text-white'
                    : 'bg-[var(--champagne-gold)] text-[var(--deep-espresso)] hover:bg-[var(--rose-gold)]'
                }`}
              >
                {isAdded ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button
                className="p-4 border border-[var(--light-warm-gray)] hover:border-[var(--champagne-gold)] transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 text-sm text-[var(--soft-gray)]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="max-w-2xl mx-auto mb-20">
          <ProductAccordion items={accordionItems} />
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-12 border-t border-[var(--light-warm-gray)]">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl text-[var(--deep-espresso)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetailPage;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/data/products';
import { formatPrice, generateStars, cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import ProductGallery from '@/components/product/ProductGallery';
import VariantSelector from '@/components/product/VariantSelector';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showAdded, setShowAdded] = useState(false);

  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariant(product.variants[0].value);
    }
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">Product not found</h1>
          <Link to="/collection" className="text-champagne underline underline-offset-4">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    addItem(product, selectedVariant, quantity);
    setIsAdding(false);
    setShowAdded(true);
    
    setTimeout(() => setShowAdded(false), 2000);
  };

  const stars = generateStars(product.rating);

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
            <h4 className="font-medium text-espresso mb-2">Materials</h4>
            <p>{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-espresso mb-2">Care Instructions</h4>
            <p>{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <p>{product.shipping}</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Orders are processed within 1-2 business days</li>
            <li>Standard shipping: 5-7 business days</li>
            <li>Express shipping: 2-3 business days</li>
            <li>Free returns within 30 days of delivery</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      <div className="container-main py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-silk">
            <li>
              <Link to="/" className="hover:text-espresso transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/collection" className="hover:text-espresso transition-colors">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-espresso capitalize">{product.name}</li>
          </ol>
        </nav>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <p className="text-champagne text-xs tracking-[0.2em] uppercase">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl text-espresso uppercase tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(stars.fullStars)].map((_, i) => (
                  <Star key={`full-${i}`} className="w-4 h-4 fill-champagne text-champagne" />
                ))}
                {stars.hasHalfStar && (
                  <Star className="w-4 h-4 fill-champagne text-champagne opacity-50" />
                )}
                {[...Array(stars.emptyStars)].map((_, i) => (
                  <Star key={`empty-${i}`} className="w-4 h-4 text-goldLight" />
                ))}
              </div>
              <span className="text-sm text-cocoa">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-espresso">
              {formatPrice(product.price)}
            </p>

            {/* Short Description */}
            <p className="text-cocoa leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Hairline */}
            <div className="hairline-divider" />

            {/* Variant Selector */}
            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onSelect={setSelectedVariant}
            />

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 pt-4">
              {/* Quantity */}
              <div className="flex items-center gap-4">
                <label className="text-sm text-cocoa">Quantity:</label>
                <div className="flex items-center border border-silk/40">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-cocoa hover:text-espresso transition-colors"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-cocoa hover:text-espresso transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={cn(
                  'w-full text-lg',
                  showAdded && 'bg-green-700 hover:bg-green-700'
                )}
              >
                {showAdded ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Added to Bag
                  </span>
                ) : (
                  'Add to Bag'
                )}
              </Button>
            </div>

            {/* Hairline */}
            <div className="hairline-divider" />

            {/* Accordions */}
            <ProductAccordion items={accordionItems} />
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-cream">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso text-center mb-10">
              You May Also Like
            </h2>
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

export default ProductDetail;

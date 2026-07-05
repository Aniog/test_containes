import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductById, products } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/product/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const product = getProductById(id);

  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedVariant(0);
    setQuantity(1);
    setCurrentImageIndex(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/collection" className="text-accent hover:underline">
            Back to collection
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addItem(product, 1, product.variants[selectedVariant]);
    }
    
    setTimeout(() => {
      setIsAdding(false);
      openCart();
    }, 500);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <div>
            <strong className="font-medium">Materials:</strong>
            <p className="mt-1">{product.materials}</p>
          </div>
          <div>
            <strong className="font-medium">Care Instructions:</strong>
            <p className="mt-1">{product.care}</p>
          </div>
        </div>
      )
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p><strong>Free Shipping:</strong> On all orders over $50</p>
          <p><strong>Standard Delivery:</strong> 5-7 business days</p>
          <p><strong>Express Delivery:</strong> 2-3 business days (additional $10)</p>
          <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
        </div>
      )
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === (product.images.length - 1) ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center gap-2 text-sm font-sans text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-primary transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-content mx-auto px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-surface rounded-lg overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${product.imageIds[currentImageIndex]}/800/800`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-soft hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-soft hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                    currentImageIndex === index
                      ? 'border-accent'
                      : 'border-transparent hover:border-surface-dark'
                  )}
                >
                  <img
                    src={`https://picsum.photos/seed/${product.imageIds[index]}/160/160`}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'text-surface-dark'
                    )}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="block font-sans text-sm font-medium mb-3">
                  Finish
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(index)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-sans border transition-all',
                        selectedVariant === index
                          ? 'border-primary bg-primary text-white'
                          : 'border-surface-dark hover:border-primary'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-sans text-sm font-medium mb-3">
                Quantity
              </label>
              <div className="flex items-center border border-surface-dark rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-surface transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-sans">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="p-3 hover:bg-surface transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
              isLoading={isAdding}
              className="mb-4 h-13 text-base"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-surface-dark">
              <div className="flex items-center gap-2 text-xs text-text-muted">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                In Stock
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-xs text-text-muted">
                30-Day Returns
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-12 max-w-2xl">
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-surface section-padding">
          <div className="max-w-content mx-auto px-4 md:px-6">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

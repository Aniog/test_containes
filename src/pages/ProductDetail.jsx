import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Check, Star, ArrowLeft, Minus, Plus } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, generateStars } from '@/lib/utils';
import ProductGallery from '@/components/product/ProductGallery';
import VariantSelector from '@/components/product/VariantSelector';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  
  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
    // Scroll to top on product change
    window.scrollTo(0, 0);
  }, [product]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Product not found</h1>
          <Link to="/shop" className="text-[var(--color-accent)] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }
  
  const stars = generateStars(product.rating);
  const relatedProducts = getRelatedProducts(product, 4);
  
  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `Materials: ${product.materials}\n\nCare: ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ];
  
  const handleAddToCart = () => {
    if (isAdding || justAdded) return;
    
    setIsAdding(true);
    
    setTimeout(() => {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant: selectedVariant,
        quantity: quantity,
      });
      
      setIsAdding(false);
      setJustAdded(true);
      
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    }, 300);
  };
  
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));
  
  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container py-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-secondary)] hover:text-[var(--color-accent)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>
      
      {/* Product Section */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Gallery */}
            <div>
              <ProductGallery images={product.images} productName={product.name} />
            </div>
            
            {/* Product Info */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              {/* Category */}
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-secondary)] mb-2">
                {product.category}
              </p>
              
              {/* Name */}
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.1em] mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  {[...Array(stars.full)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <span className="text-sm text-[var(--color-secondary)]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              {/* Price */}
              <p className="font-serif text-2xl md:text-3xl mb-6">
                {formatPrice(product.price)}
              </p>
              
              {/* Short Description */}
              <p className="text-[var(--color-secondary)] mb-8 leading-relaxed">
                {product.shortDescription}
              </p>
              
              {/* Variant Selector */}
              {product.variants?.length > 0 && (
                <div className="mb-6">
                  <VariantSelector
                    variants={product.variants}
                    selected={selectedVariant}
                    onSelect={setSelectedVariant}
                  />
                </div>
              )}
              
              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-3">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-[var(--color-border)] rounded-[var(--radius-md)]">
                  <button
                    onClick={decrementQuantity}
                    className="p-3 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 min-w-[3rem] text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="p-3 text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button
                variant="accent"
                size="full"
                onClick={handleAddToCart}
                disabled={isAdding || justAdded}
                className={`py-4 mb-8 transition-all ${justAdded ? 'bg-green-500 hover:bg-green-500' : ''}`}
              >
                {justAdded ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    Added to Cart
                  </span>
                ) : isAdding ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adding...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </span>
                )}
              </Button>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 text-xs text-[var(--color-secondary)]">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Free Shipping
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  30-Day Returns
                </span>
              </div>
              
              {/* Accordions */}
              <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
                <Accordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <div className="container">
          <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={false} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

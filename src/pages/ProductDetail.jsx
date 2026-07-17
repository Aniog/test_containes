import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import Rating from '@/components/ui/Rating';
import Accordion from '@/components/ui/Accordion';
import ProductCard from '@/components/ui/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem, openCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(0);
      setQuantity(1);
      setSelectedImage(0);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[var(--color-dark)] mb-4">
            Product Not Found
          </h1>
          <Link to="/shop" className="text-[var(--color-accent)] hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);
    // Simulate brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 300));
    addItem(product, product.variants[selectedVariant]?.name || 'Default', quantity);
    openCart();
    setIsAdding(false);
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const accordionItems = [
    {
      title: 'Description',
      defaultOpen: true,
      content: (
        <p className="leading-relaxed">{product.description}</p>
      )
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-[var(--color-dark)] mb-1">Materials:</p>
            <p>{product.materials}</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-dark)] mb-1">Care Instructions:</p>
            <p>{product.care}</p>
          </div>
        </div>
      )
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <div>
            <p className="font-medium text-[var(--color-dark)] mb-1">Shipping:</p>
            <p>Free standard shipping on orders over $75. Express shipping available at checkout. International shipping available to select countries.</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-dark)] mb-1">Returns:</p>
            <p>We accept returns within 30 days of delivery. Items must be unworn and in original packaging. Free return shipping on all US orders.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="container py-4">
        <Link 
          to="/shop"
          className="inline-flex items-center gap-1 text-sm text-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-colors"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="container pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[var(--color-surface)] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'w-20 h-20 bg-[var(--color-surface)] overflow-hidden border-2 transition-all',
                      selectedImage === index 
                        ? 'border-[var(--color-accent)]' 
                        : 'border-transparent hover:border-[var(--color-border)]'
                    )}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-6">
              {product.badge && (
                <span className="inline-block bg-[var(--color-accent)] text-white text-xs font-sans font-medium px-3 py-1 tracking-wider uppercase mb-3">
                  {product.badge}
                </span>
              )}
              <h1 className="product-name text-2xl md:text-3xl text-[var(--color-dark)] mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="font-sans text-2xl font-medium text-[var(--color-dark)]">
                  ${product.price}
                </span>
                <Rating rating={product.rating} reviewCount={product.reviewCount} />
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-[var(--color-secondary)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.length > 0 && (
              <div className="mb-6">
                <p className="font-sans text-sm font-medium text-[var(--color-dark)] mb-3">
                  Finish: <span className="font-normal text-[var(--color-secondary)]">{product.variants[selectedVariant]?.name}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant, index) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(index)}
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 border-2 transition-all font-sans text-sm',
                        selectedVariant === index
                          ? 'border-[var(--color-dark)] bg-[var(--color-dark)] text-white'
                          : 'border-[var(--color-border)] hover:border-[var(--color-dark)]'
                      )}
                    >
                      <span 
                        className="w-4 h-4 rounded-full border border-white/30"
                        style={{ backgroundColor: variant.color }}
                      />
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-sm font-medium text-[var(--color-dark)] mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-[var(--color-border)] w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="p-3 text-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-colors disabled:opacity-50"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-sans text-base">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-3 text-[var(--color-secondary)] hover:text-[var(--color-dark)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              variant="primary"
              size="xl"
              fullWidth
              loading={isAdding}
              className="mb-4"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag size={20} />
                Add to Cart
              </span>
            </Button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-b border-[var(--color-border)]">
              <span className="flex items-center gap-2 text-xs text-[var(--color-secondary)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                Free Shipping
              </span>
              <span className="flex items-center gap-2 text-xs text-[var(--color-secondary)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                30-Day Returns
              </span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-2xl">
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-[var(--color-surface)] py-16">
          <div className="container">
            <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-dark)] text-center mb-12">
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
};

export default ProductDetail;

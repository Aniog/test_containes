import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Minus, Plus, ChevronLeft } from 'lucide-react';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import StarRating from '@/components/ui/StarRating';
import ProductGallery from '@/components/product/ProductGallery';
import RelatedProducts from '@/components/product/RelatedProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
    }
    // Scroll to top on product change
    window.scrollTo(0, 0);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/collection" className="text-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    addItem(product, selectedVariant, quantity);
    setIsAdding(false);
  };

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
            <p className="text-cocoa">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-espresso mb-2">Care Instructions</h4>
            <p className="text-cocoa">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-espresso mb-2">Shipping</h4>
            <p className="text-cocoa">
              Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. 
              Express shipping available at checkout for an additional fee.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-espresso mb-2">Returns</h4>
            <p className="text-cocoa">
              We offer a 30-day return policy for unworn items in original packaging. 
              Contact us at returns@velmora.com to initiate a return.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/collection"
          className="inline-flex items-center gap-1 text-sm text-cocoa hover:text-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {/* Product Name */}
            <h1 className="product-name text-xl md:text-2xl text-espresso mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-xl md:text-2xl text-espresso font-medium mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Rating */}
            <div className="mb-6">
              <StarRating
                rating={product.rating}
                reviewCount={product.reviewCount}
                size="md"
              />
            </div>

            {/* Short Description */}
            <p className="text-cocoa leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="mb-8">
                <p className="text-sm font-medium text-espresso mb-3">
                  Finish: <span className="font-normal text-cocoa">{selectedVariant?.name}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 text-sm border transition-all duration-200 ${
                        selectedVariant?.name === variant.name
                          ? 'border-gold bg-gold/5 text-espresso'
                          : 'border-silk text-cocoa hover:border-espresso'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium text-espresso mb-3">Quantity</p>
              <div className="flex items-center border border-silk w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-cocoa hover:text-espresso transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-12 flex items-center justify-center text-espresso font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-cocoa hover:text-espresso transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="primary"
              size="full"
              onClick={handleAddToCart}
              disabled={isAdding}
              className="mb-4"
            >
              {isAdding ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Adding to Bag...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Bag — {formatPrice(product.price * quantity)}
                </span>
              )}
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 py-6 border-y border-silk">
              <div className="flex items-center gap-2 text-xs text-cocoa">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-xs text-cocoa">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-xs text-cocoa">
                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hypoallergenic
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts products={products} currentProductId={product.id} />
    </main>
  );
}

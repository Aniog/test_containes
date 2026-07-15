import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft, Check } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice, cn } from '../lib/utils';
import ProductGallery from '../components/product/ProductGallery';
import ProductAccordion from '../components/product/ProductAccordion';
import ProductCard from '../components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">Product not found</h1>
          <Link to="/collection" className="text-gold hover:underline">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images[selectedVariant] || product.images['Gold'];

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p><strong>Materials:</strong> {product.materials}</p>
          <p><strong>Care:</strong> {product.care}</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-2">
          <p>Free worldwide shipping on all orders over $50.</p>
          <p>Standard delivery: 5-7 business days.</p>
          <p>Express delivery: 2-3 business days.</p>
          <p className="pt-2">30-day returns for unworn items in original packaging.</p>
        </div>
      ),
    },
  ];

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      variant: selectedVariant,
      quantity: quantity,
      image: images[0],
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cream animate-fade-in">
      {/* Breadcrumb */}
      <div className="container-luxury py-6">
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 text-sm text-taupe hover:text-gold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Collection
        </Link>
      </div>

      {/* Product Section */}
      <section className="container-luxury pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="animate-fade-up">
            <ProductGallery images={images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start animate-fade-up" style={{ animationDelay: '150ms' }}>
            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-espresso uppercase mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-linen text-linen'
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl text-espresso mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Short Description */}
            <p className="text-taupe leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-espresso mb-3">
                  Finish: <span className="font-normal text-taupe">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={cn(
                        'px-5 py-2.5 text-sm border rounded-sm transition-all duration-200',
                        selectedVariant === variant
                          ? 'border-gold bg-gold text-white'
                          : 'border-linen text-espresso hover:border-gold'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-espresso mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-linen rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-16 h-12 flex items-center justify-center text-sm font-medium text-espresso border-x border-linen">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-taupe hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={cn(
                'w-full py-4 font-medium text-sm tracking-wide transition-all duration-300',
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-gold text-white hover:bg-gold-dark'
              )}
            >
              <span className="flex items-center justify-center gap-2">
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Bag
                  </>
                ) : (
                  'Add to Bag'
                )}
              </span>
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-linen text-xs text-taupe">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                30-Day Returns
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Hypoallergenic
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="container-luxury pb-16">
        <div className="max-w-2xl">
          <ProductAccordion items={accordionItems} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-luxury">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;

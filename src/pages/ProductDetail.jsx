import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft } from 'lucide-react';
import ProductGallery from '../components/product/ProductGallery';
import ProductAccordion from '../components/product/ProductAccordion';
import ProductCard from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, isLoading } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal-800 mb-4">Product not found</p>
          <Link to="/collection" className="text-charcoal-600 underline">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(product, quantity, selectedVariant);
    setIsAdding(false);
  };

  const accordionItems = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: `${product.materials}\n\nCare Instructions: ${product.care}`
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.\n\nWe offer free 30-day returns for all orders. Items must be unworn and in original packaging. Contact our customer service team to initiate a return.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/collection"
          className="inline-flex items-center text-sm text-charcoal-500 hover:text-charcoal-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
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
          <div className="lg:pt-4">
            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl text-charcoal-800 uppercase tracking-wide mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl text-charcoal-800 mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-200'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants?.length > 0 && (
              <div className="mb-8">
                <p className="font-sans text-xs text-charcoal-500 uppercase tracking-wide mb-3">
                  Finish: <span className="text-charcoal-800">{selectedVariant}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 border text-sm font-sans transition-all ${
                        selectedVariant === variant
                          ? 'border-charcoal-800 bg-charcoal-800 text-cream-50'
                          : 'border-charcoal-300 text-charcoal-700 hover:border-charcoal-600'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <p className="font-sans text-xs text-charcoal-500 uppercase tracking-wide mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-charcoal-300">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              disabled={isAdding || isLoading}
              className="w-full btn-primary text-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAdding ? 'ADDING TO BAG...' : 'ADD TO BAG'}
            </button>

            {/* Product Details Accordion */}
            <div className="mt-12 pt-8 border-t border-charcoal-200">
              <ProductAccordion items={accordionItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-cream-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-ultra-wide text-gold-600 uppercase mb-3">
              Complete Your Look
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800">
              You May Also Like
            </h2>
            <div className="hairline-divider w-16 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} showQuickAdd={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

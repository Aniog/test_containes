import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductGallery from '../components/product/ProductGallery';
import ProductAccordion from '../components/product/ProductAccordion';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-charcoal-600 hover:text-espresso transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="font-sans text-sm">Back to Shop</span>
        </Link>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* Title & Price */}
            <h1 className="product-name text-xl mb-2">{product.name}</h1>
            <p className="font-sans text-2xl font-medium text-espresso mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-charcoal-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-charcoal-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Short Description */}
            <p className="font-sans text-charcoal-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-8">
                <label className="block font-sans text-sm font-medium text-charcoal-700 mb-3">
                  Finish: <span className="font-normal">{selectedVariant}</span>
                </label>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 rounded-full border transition-all ${
                        selectedVariant === variant
                          ? 'border-espresso bg-espresso text-ivory-100'
                          : 'border-charcoal-300 text-charcoal-700 hover:border-espresso'
                      }`}
                    >
                      <span className="font-sans text-sm">{variant}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block font-sans text-sm font-medium text-charcoal-700 mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-charcoal-300 rounded-lg">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-charcoal-600 hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-14 text-center font-sans font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-charcoal-600 hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mb-4 flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" />
              {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-4 border-t border-charcoal-200">
              <span className="font-sans text-xs text-charcoal-500">
                Free Shipping
              </span>
              <span className="w-1 h-1 bg-charcoal-300 rounded-full" />
              <span className="font-sans text-xs text-charcoal-500">
                30-Day Returns
              </span>
              <span className="w-1 h-1 bg-charcoal-300 rounded-full" />
              <span className="font-sans text-xs text-charcoal-500">
                Gift Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ProductAccordion product={product} />
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-ivory-100 section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-serif text-2xl md:text-3xl text-center mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  showQuickAdd={false}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

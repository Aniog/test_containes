import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductBySlug, products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart, isLoading } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">Product not found</h1>
          <Link to="/shop" className="text-gold-600 hover:text-gold-700">
            Return to Shop
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
    addToCart(product, quantity, selectedVariant);
  };

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-espresso mb-2">Materials</h4>
            <p className="text-charcoal/70">{product.materials}</p>
          </div>
          <div>
            <h4 className="font-medium text-espresso mb-2">Care Instructions</h4>
            <p className="text-charcoal/70">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3 text-charcoal/70">
          <p><strong className="text-espresso">Free Shipping:</strong> On orders over $50</p>
          <p><strong className="text-espresso">Standard Delivery:</strong> 5-7 business days</p>
          <p><strong className="text-espresso">Express Delivery:</strong> 2-3 business days</p>
          <p><strong className="text-espresso">Returns:</strong> 30-day hassle-free returns on all orders</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-sm text-taupe">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-cream rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-espresso'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Product Name */}
            <h1 className="font-serif text-2xl md:text-3xl text-espresso uppercase tracking-wide mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-body text-xl text-charcoal font-medium mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal/60">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Short Description */}
            <p className="text-charcoal/70 font-body mb-6 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-espresso mb-3">Finish: {selectedVariant}</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-5 py-2.5 rounded-full text-sm font-body transition-all ${
                        selectedVariant === variant
                          ? 'bg-espresso text-ivory'
                          : 'bg-cream text-charcoal hover:bg-sand'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium text-espresso mb-3">Quantity</p>
              <div className="flex items-center border border-sand rounded w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-charcoal font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="w-full py-4 bg-espresso text-ivory font-body font-medium text-sm tracking-wide hover:bg-charcoal transition-colors flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag className="w-5 h-5" />
              {isLoading ? 'Adding...' : 'Add to Bag'}
            </button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-b border-sand">
              <span className="text-xs text-charcoal/60">Free shipping over $50</span>
              <span className="text-xs text-charcoal/60">•</span>
              <span className="text-xs text-charcoal/60">30-day returns</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-12 max-w-2xl">
          <div className="space-y-0">
            {accordions.map((accordion) => (
              <div key={accordion.id} className="border-b border-sand">
                <button
                  onClick={() => setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="font-serif text-lg text-espresso">{accordion.title}</span>
                  {openAccordion === accordion.id ? (
                    <ChevronUp className="w-5 h-5 text-taupe" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-taupe" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <div className="text-charcoal/70 font-body leading-relaxed">
                    {accordion.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso text-center mb-10">
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
    </div>
  );
}

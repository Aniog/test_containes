import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react';
import products from '../../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="min-h-screen bg-velmora-cream pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 font-sans text-sm text-velmora-text-secondary mb-8">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden bg-velmora-sand rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="product-name text-2xl lg:text-3xl mb-2">{product.name}</h1>
              <p className="font-sans text-velmora-text-secondary">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="font-serif text-3xl font-medium">${product.price}</span>
              {product.material && (
                <span className="font-sans text-sm text-velmora-text-secondary">{product.material}</span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-velmora-gold">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div className="space-y-3">
                <h3 className="font-sans text-sm font-medium uppercase tracking-wider">Tone</h3>
                <div className="flex space-x-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-6 py-2 font-sans text-sm border transition-all duration-300 ${
                        selectedVariant === variant
                          ? 'bg-velmora-charcoal text-velmora-cream border-velmora-charcoal'
                          : 'border-velmora-border hover:border-velmora-charcoal'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-sans text-sm font-medium uppercase tracking-wider">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-velmora-border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-velmora-sand transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-2 font-sans text-sm min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-velmora-sand transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="font-sans text-sm text-velmora-text-muted">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full btn-primary flex items-center justify-center space-x-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{product.inStock ? 'Add to Cart' : 'Sold Out'}</span>
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-6 border-t border-velmora-border">
              {[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: `Materials: ${product.materials}\n\nCare: ${product.care}` },
                { title: 'Shipping & Returns', content: 'Free shipping on orders over $75. 30-day return policy. See our returns page for full details.' },
              ].map((accordion, index) => (
                <div key={index} className="border-b border-velmora-border pb-4">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="flex items-center justify-between w-full font-sans text-sm font-medium uppercase tracking-wider py-2"
                  >
                    {accordion.title}
                    <span className="text-velmora-gold">{activeAccordion === index ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === index && (
                    <div className="pt-2 pb-2">
                      <p className="font-sans text-sm text-velmora-text-secondary leading-relaxed whitespace-pre-line">
                        {accordion.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 lg:mt-32 pt-12 border-t border-velmora-border">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Product Card Component for Related Products
function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card group cursor-pointer">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-velmora-sand mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="space-y-2">
        <h3 className="product-name text-sm">
          <Link to={`/product/${product.id}`} className="hover:text-velmora-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-serif text-base font-medium">${product.price}</span>
          <div className="flex items-center space-x-1">
            <span className="text-velmora-gold text-sm">★</span>
            <span className="font-sans text-sm text-velmora-text-secondary">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

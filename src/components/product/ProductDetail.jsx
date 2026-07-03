// Product Detail Page Component
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import products from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/shop');
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-velmora-text-secondary">Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    openCart();
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-velmora-text-secondary">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-velmora-cream mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-premium hover:bg-velmora-cream transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-premium hover:bg-velmora-cream transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 bg-velmora-cream border-2 transition-colors ${
                      selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Product Name */}
            <h1 className="product-name text-3xl md:text-4xl mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl mb-6">${product.price}.00</p>

            {/* Short Description */}
            <p className="text-velmora-text-secondary mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Material</label>
              <div className="flex space-x-3">
                {['Gold', 'Silver'].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border-2 transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                        : 'border-velmora-border hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-10 border border-velmora-border rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-10 border border-velmora-border rounded flex items-center justify-center hover:border-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-premium btn-premium-solid mb-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {/* Description Accordion */}
              <div className="border-t border-velmora-border">
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium">Description</span>
                  <span className={`transform transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {isDescriptionOpen && (
                  <div className="pb-4 text-velmora-text-secondary leading-relaxed">
                    <p>{product.details}</p>
                  </div>
                )}
              </div>

              {/* Materials & Care Accordion */}
              <div className="border-t border-velmora-border">
                <button
                  onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium">Materials & Care</span>
                  <span className={`transform transition-transform ${isMaterialsOpen ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {isMaterialsOpen && (
                  <div className="pb-4 text-velmora-text-secondary leading-relaxed">
                    <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                    <p><strong>Care:</strong> {product.care}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns Accordion */}
              <div className="border-t border-b border-velmora-border">
                <button
                  onClick={() => setIsShippingOpen(!isShippingOpen)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-medium">Shipping & Returns</span>
                  <span className={`transform transition-transform ${isShippingOpen ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {isShippingOpen && (
                  <div className="pb-4 text-velmora-text-secondary leading-relaxed">
                    <p className="mb-2">Free worldwide shipping on all orders.</p>
                    <p className="mb-2">Standard delivery: 5-7 business days</p>
                    <p className="mb-2">Express delivery: 2-3 business days (additional fee)</p>
                    <p>30-day return policy. Items must be unworn and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-velmora-cream aspect-square mb-4">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                  </div>
                  <h3 className="product-name text-lg mb-2">{relatedProduct.name}</h3>
                  <p className="font-serif text-lg">${relatedProduct.price}.00</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

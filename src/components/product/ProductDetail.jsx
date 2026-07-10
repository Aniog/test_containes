import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Minus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import products from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setSelectedImageIndex(0);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-serif text-2xl">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product, quantity, selectedVariant);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="container-custom py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 font-sans text-sm text-gray-warm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-light overflow-hidden">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 bg-gray-light overflow-hidden border-2 transition-colors duration-300 ${
                      selectedImageIndex === index ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="space-y-8">
            {/* Product Name */}
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-wide uppercase mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-border'}
                    />
                  ))}
                </div>
                <span className="font-sans text-sm text-gray-warm">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-serif text-2xl font-medium mb-8">
                ${product.price}
              </p>
            </div>

            {/* Short Description */}
            <p className="font-sans text-gray-warm leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            <div className="space-y-4">
              <h3 className="font-sans text-sm font-medium tracking-wider uppercase">
                Tone
              </h3>
              <div className="flex space-x-4">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 font-sans text-sm tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-gray-border hover:border-gold/50'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <h3 className="font-sans text-sm font-medium tracking-wider uppercase">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-border flex items-center justify-center hover:border-gold transition-colors duration-300"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-lg w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-border flex items-center justify-center hover:border-gold transition-colors duration-300"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <ShoppingBag size={20} />
              <span>
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </span>
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-8 border-t border-gray-border">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between py-4 font-serif text-lg"
                >
                  <span>Description</span>
                  {expandedAccordion === 'description' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedAccordion === 'description' && (
                  <div className="pb-4 font-sans text-gray-warm leading-relaxed">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex items-center justify-between py-4 font-serif text-lg"
                >
                  <span>Materials & Care</span>
                  {expandedAccordion === 'materials' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedAccordion === 'materials' && (
                  <div className="pb-4 font-sans text-gray-warm leading-relaxed">
                    <p>{product.materials}</p>
                    <p className="mt-4">{product.care}</p>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between py-4 font-serif text-lg"
                >
                  <span>Shipping & Returns</span>
                  {expandedAccordion === 'shipping' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedAccordion === 'shipping' && (
                  <div className="pb-4 font-sans text-gray-warm leading-relaxed">
                    <p>{product.shipping}</p>
                    <p className="mt-4">{product.returns}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-32 pt-16 border-t border-gray-border">
            <h2 className="section-title text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square bg-gray-light overflow-hidden mb-4 img-hover-zoom">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="product-name text-sm mb-2">{relatedProduct.name}</h3>
                  <p className="font-serif text-base font-medium">
                    ${relatedProduct.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
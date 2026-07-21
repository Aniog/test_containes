import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ChevronLeft } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setSelectedImage(0);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-velmora-text-light">Loading...</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center text-sm text-velmora-text-light hover:text-velmora-gold transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Shop
          </Link>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative overflow-hidden bg-velmora-warm-gray aspect-square mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-gold-light'
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

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Product Name */}
            <h1 className="font-serif text-3xl md:text-4xl mb-4 tracking-wider uppercase">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-serif text-2xl mb-4">${product.price}.00</p>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-velmora-text-light">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-velmora-text-light mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-sm tracking-wider uppercase mb-3">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-border hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm tracking-wider uppercase mb-3">Quantity</p>
              <div className="quantity-input inline-flex">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover:bg-velmora-warm-gray"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover:bg-velmora-warm-gray"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-premium w-full mb-12"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-0">
              {/* Description Accordion */}
              <div className="accordion-item">
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="accordion-trigger"
                >
                  <span>Description</span>
                  <span className={`transform transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`accordion-content ${isDescriptionOpen ? 'open' : ''}`}>
                  <div className="pb-6 pt-2">
                    <p className="text-velmora-text-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Materials & Care Accordion */}
              <div className="accordion-item">
                <button
                  onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
                  className="accordion-trigger"
                >
                  <span>Materials & Care</span>
                  <span className={`transform transition-transform ${isMaterialsOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`accordion-content ${isMaterialsOpen ? 'open' : ''}`}>
                  <div className="pb-6 pt-2">
                    <ul className="text-velmora-text-light leading-relaxed space-y-2">
                      <li>• 18K Gold Plated over brass</li>
                      <li>• Hypoallergenic and nickel-free</li>
                      <li>• Avoid contact with water, perfume, and lotions</li>
                      <li>• Store in provided jewelry pouch when not in use</li>
                      <li>• Clean gently with a soft jewelry cloth</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns Accordion */}
              <div className="accordion-item">
                <button
                  onClick={() => setIsShippingOpen(!isShippingOpen)}
                  className="accordion-trigger"
                >
                  <span>Shipping & Returns</span>
                  <span className={`transform transition-transform ${isShippingOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`accordion-content ${isShippingOpen ? 'open' : ''}`}>
                  <div className="pb-6 pt-2">
                    <ul className="text-velmora-text-light leading-relaxed space-y-2">
                      <li>• Free worldwide shipping on all orders</li>
                      <li>• Standard shipping: 5-7 business days</li>
                      <li>• Express shipping available at checkout</li>
                      <li>• 30-day return policy for unworn items</li>
                      <li>• Return shipping is free for US orders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-velmora-border">
            <h2 className="font-serif text-3xl mb-8 text-center tracking-wide">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

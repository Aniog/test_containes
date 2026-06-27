import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const { addToCart } = useCart();

  // Find product
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="pt-20 pb-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="btn-premium btn-premium-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const materials = ['Gold', 'Silver'];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedMaterial);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-velmora-gray-500">
        <Link to="/" className="hover:text-velmora-black">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-black">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left: Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="relative aspect-square overflow-hidden bg-velmora-gray-100 mb-4">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 hover:bg-velmora-gray-100 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 hover:bg-velmora-gray-100 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Row */}
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index
                      ? 'border-velmora-gold'
                      : 'border-transparent'
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
          )}
        </div>

        {/* Right: Product Info */}
        <div>
          {/* Product Name */}
          <h1 className="product-name text-2xl md:text-3xl mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <p className="font-serif text-2xl mb-4">${product.price}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-velmora-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-velmora-gray-500">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Short Description */}
          <p className="text-velmora-gray-600 mb-8 leading-relaxed">
            {product.description}. Crafted with meticulous attention to detail,
            this piece embodies the Velmora commitment to quality and timeless design.
          </p>

          {/* Variant Selector - Material */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3 uppercase tracking-wide">
              Material
            </label>
            <div className="flex gap-3">
              {materials.map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-3 border transition-all ${
                    selectedMaterial === material
                      ? 'border-velmora-black bg-velmora-black text-white'
                      : 'border-velmora-gray-300 hover:border-velmora-black'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-3 uppercase tracking-wide">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-velmora-gray-300 flex items-center justify-center hover:border-velmora-black transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-velmora-gray-300 flex items-center justify-center hover:border-velmora-black transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full btn-premium btn-premium-solid mb-8 py-4 text-base"
          >
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="space-y-4">
            {/* Description */}
            <div className="border-t border-velmora-gray-200">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium uppercase tracking-wide text-sm">
                  Description
                </span>
                <span className="text-velmora-gray-400">
                  {expandedAccordion === 'description' ? '−' : '+'}
                </span>
              </button>
              {expandedAccordion === 'description' && (
                <div className="pb-4 text-velmora-gray-600 leading-relaxed">
                  <p>
                    Each Velmora piece is thoughtfully designed and carefully crafted.
                    This {product.name.toLowerCase()} features premium 18K gold plating
                    on a hypoallergenic base, ensuring both beauty and comfort for
                    sensitive skin. The meticulous attention to detail ensures each piece
                    meets our exacting standards.
                  </p>
                </div>
              )}
            </div>

            {/* Materials & Care */}
            <div className="border-t border-velmora-gray-200">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium uppercase tracking-wide text-sm">
                  Materials & Care
                </span>
                <span className="text-velmora-gray-400">
                  {expandedAccordion === 'materials' ? '−' : '+'}
                </span>
              </button>
              {expandedAccordion === 'materials' && (
                <div className="pb-4 text-velmora-gray-600 leading-relaxed">
                  <h4 className="font-medium mb-2">Materials</h4>
                  <ul className="list-disc pl-5 mb-4">
                    <li>18K Gold Plated</li>
                    <li>Hypoallergenic base metal</li>
                    <li>Nickel-free and lead-free</li>
                  </ul>
                  <h4 className="font-medium mb-2">Care Instructions</h4>
                  <ul className="list-disc pl-5">
                    <li>Remove before showering or swimming</li>
                    <li>Avoid contact with perfumes and lotions</li>
                    <li>Store in a cool, dry place</li>
                    <li>Clean gently with a soft cloth</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Shipping & Returns */}
            <div className="border-t border-b border-velmora-gray-200">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium uppercase tracking-wide text-sm">
                  Shipping & Returns
                </span>
                <span className="text-velmora-gray-400">
                  {expandedAccordion === 'shipping' ? '−' : '+'}
                </span>
              </button>
              {expandedAccordion === 'shipping' && (
                <div className="pb-4 text-velmora-gray-600 leading-relaxed">
                  <h4 className="font-medium mb-2">Shipping</h4>
                  <p className="mb-4">
                    Free worldwide shipping on all orders. Standard delivery takes
                    5-7 business days. Express options available at checkout.
                  </p>
                  <h4 className="font-medium mb-2">Returns</h4>
                  <p>
                    We offer a 30-day return policy. Items must be returned in
                    original packaging, unworn and in resalable condition.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="font-serif text-3xl mb-8 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              to={`/product/${related.id}`}
              className="group"
            >
              <div className="aspect-square overflow-hidden bg-velmora-gray-100 mb-4">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="product-name text-sm mb-2">{related.name}</h3>
              <p className="font-serif text-lg">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

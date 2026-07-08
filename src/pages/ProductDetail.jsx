import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addItem } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-sm tracking-widest underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ ...product, quantity });
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:text-black">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left: Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 overflow-hidden border-2 ${
                  selectedImage === index ? 'border-black' : 'border-transparent'
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
        </div>

        {/* Right: Product Info */}
        <div>
          {/* Product Name */}
          <h1 className="font-serif text-2xl md:text-3xl mb-2 tracking-wider uppercase">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-xl mb-4">${product.price}</p>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Short Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Variant Selector - Material */}
          <div className="mb-6">
            <label className="block text-sm tracking-wider mb-3">MATERIAL</label>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 border text-sm tracking-wider transition-colors ${
                    selectedMaterial === material
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm tracking-wider mb-3">QUANTITY</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 hover:border-black transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 hover:border-black transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 text-sm tracking-widest hover:bg-gray-800 transition-colors mb-8"
          >
            ADD TO CART
          </button>

          {/* Accordions */}
          <div className="border-t">
            {/* Description Accordion */}
            <div className="border-b">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full flex justify-between items-center py-4 text-sm tracking-wider"
              >
                <span>DESCRIPTION</span>
                {expandedAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expandedAccordion === 'description' && (
                <div className="pb-4 text-sm text-gray-700 leading-relaxed">
                  <p>Each {product.name} is crafted with meticulous attention to detail. 
                  Made with 18K gold plating over a durable base, this piece is designed 
                  for everyday wear while maintaining its luxurious appearance.</p>
                </div>
              )}
            </div>

            {/* Materials & Care Accordion */}
            <div className="border-b">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full flex justify-between items-center py-4 text-sm tracking-wider"
              >
                <span>MATERIALS & CARE</span>
                {expandedAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expandedAccordion === 'materials' && (
                <div className="pb-4 text-sm text-gray-700 leading-relaxed">
                  <p className="mb-2"><strong>Materials:</strong> 18K Gold Plated, Hypoallergenic</p>
                  <p className="mb-2"><strong>Care:</strong> Avoid contact with water, perfume, and cosmetics. 
                  Store in a cool, dry place. Clean with a soft jewelry cloth.</p>
                </div>
              )}
            </div>

            {/* Shipping & Returns Accordion */}
            <div className="border-b">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex justify-between items-center py-4 text-sm tracking-wider"
              >
                <span>SHIPPING & RETURNS</span>
                {expandedAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {expandedAccordion === 'shipping' && (
                <div className="pb-4 text-sm text-gray-700 leading-relaxed">
                  <p className="mb-2">Free worldwide shipping on all orders.</p>
                  <p>30-day return policy. Items must be returned in original packaging 
                  and unused condition.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="aspect-square overflow-hidden mb-3">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xs tracking-wider uppercase mb-1">{related.name}</h3>
                <p className="text-sm">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { addToCart, items } = useCart();

  // Find product by ID (in real app, this would be an API call)
  const product = {
    id: parseInt(id),
    name: 'VIVID AURA JEWELS',
    description: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    material: 'Gold',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80'
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    materials: ['Gold', 'Silver'],
    descriptionLong: 'Elevate your everyday style with our Vivid Aura Jewels ear cuff. Featuring a delicate crystal accent, this piece catches the light beautifully with every turn of your head. Perfect for stacking or wearing alone for a minimalist look.',
    materialsCare: '18K Gold Plated over premium brass. Hypoallergenic and nickel-free. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place.',
    shippingInfo: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Your order will be carefully packaged in our signature Velmora box, perfect for gifting.'
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      material: selectedMaterial,
      quantity
    });
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-600">
        <Link to="/" className="hover:text-gray-900">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-gray-900">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                  selectedImageIndex === index
                    ? 'border-amber-700'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-light tracking-[0.15em] text-gray-900 font-['Cormorant_Garamond']">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-700 fill-amber-700'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-6 text-2xl font-light text-gray-900 font-['Cormorant_Garamond']">
              ${product.price}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.descriptionLong}
          </p>

          {/* Material Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Material
            </label>
            <div className="flex space-x-3">
              {product.materials.map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-2 border text-sm tracking-wider transition-all ${
                    selectedMaterial === material
                      ? 'border-amber-700 bg-amber-700 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-gray-900'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-amber-800 text-white py-4 hover:bg-amber-900 transition-colors text-sm tracking-[0.2em] font-medium flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>ADD TO CART</span>
          </button>

          {/* Accordions */}
          <div className="space-y-4 pt-6 border-t">
            {[
              { title: 'Description', content: product.descriptionLong },
              { title: 'Materials & Care', content: product.materialsCare },
              { title: 'Shipping & Returns', content: product.shippingInfo }
            ].map(({ title, content }) => (
              <div key={title} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleAccordion(title)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-sm font-medium tracking-wider text-gray-900">
                    {title}
                  </span>
                  <span className="text-amber-700">
                    {activeAccordion === title ? '−' : '+'}
                  </span>
                </button>
                {activeAccordion === title && (
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-20 pt-12 border-t">
        <h2 className="text-2xl font-light tracking-[0.1em] text-gray-900 font-['Cormorant_Garamond'] text-center mb-12">
          You May Also Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Link
              key={item}
              to={`/product/${item}`}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={`https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80`}
                  alt="Related product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-sm tracking-[0.15em] text-gray-900 font-['Cormorant_Garamond']">
                  RELATED PRODUCT
                </h3>
                <p className="text-sm text-gray-600">$48</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

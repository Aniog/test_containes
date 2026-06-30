import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-velmora-gold hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      <nav className="mb-8 text-sm text-velmora-gray-500">
        <Link to="/" className="hover:text-velmora-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-charcoal">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        <div>
          <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                  selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl lg:text-4xl font-serif mb-2 tracking-widest uppercase">
            {product.name}
          </h1>
          <p className="text-2xl mb-4">${product.price}</p>

          <div className="flex items-center space-x-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-velmora-gold fill-velmora-gold'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-velmora-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-velmora-gray-600 leading-relaxed mb-8">
            {product.details}
          </p>

          <div className="mb-8">
            <label className="block text-sm tracking-wider uppercase mb-4">
              Material
            </label>
            <div className="flex gap-4">
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`px-6 py-3 border text-sm tracking-wider uppercase transition-all ${
                    selectedMaterial === material
                      ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                      : 'border-velmora-gray-300 hover:border-velmora-charcoal'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm tracking-wider uppercase mb-4">
              Quantity
            </label>
            <div className="flex items-center space-x-4 border border-velmora-gray-300 w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:text-velmora-gold transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 hover:text-velmora-gold transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          <button
            className="w-full bg-velmora-charcoal text-white py-4 text-sm tracking-widest uppercase hover:bg-black transition-colors duration-300 flex items-center justify-center space-x-2 mb-8"
          >
            <span>Add to Cart</span>
          </button>

          <div className="space-y-0">
            <div className="border-t">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full py-4 flex justify-between items-center text-sm tracking-wider uppercase"
              >
                <span>Description</span>
                {expandedAccordion === 'description' ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedAccordion === 'description' && (
                <div className="pb-4 text-sm text-velmora-gray-600 leading-relaxed">
                  {product.details}
                </div>
              )}
            </div>

            <div className="border-t">
              <button
                onClick={() => toggleAccordion('materials')}
                className="w-full py-4 flex justify-between items-center text-sm tracking-wider uppercase"
              >
                <span>Materials & Care</span>
                {expandedAccordion === 'materials' ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedAccordion === 'materials' && (
                <div className="pb-4 text-sm text-velmora-gray-600 leading-relaxed">
                  <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                  <p>
                    <strong>Care:</strong> To maintain the beauty of your Velmora jewelry,
                    avoid contact with water, perfumes, and lotions. Store in a cool, dry place
                    when not wearing.
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-b">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full py-4 flex justify-between items-center text-sm tracking-wider uppercase"
              >
                <span>Shipping & Returns</span>
                {expandedAccordion === 'shipping' ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {expandedAccordion === 'shipping' && (
                <div className="pb-4 text-sm text-velmora-gray-600 leading-relaxed">
                  <p className="mb-2">
                    <strong>Shipping:</strong> Free worldwide shipping on all orders.
                    Delivery within 3-7 business days.
                  </p>
                  <p>
                    <strong>Returns:</strong> 30-day hassle-free returns.
                    Item must be in original packaging and unused condition.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-serif mb-12 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="group">
              <div className="aspect-square bg-velmora-cream mb-4 overflow-hidden">
                <img
                  src={related.images[0]}
                  alt={related.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-sm tracking-wider uppercase mb-1">{related.name}</h3>
              <p className="text-velmora-gray-500 text-sm">${related.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

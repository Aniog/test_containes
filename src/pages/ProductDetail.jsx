import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Product Not Found
          </h2>
          <Link to="/collection" className="text-gray-600 hover:text-gray-900">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const variants = ['Gold', 'Silver'];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight size={14} />
          <Link to="/collection" className="hover:text-gray-900">Collection</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">{product.title}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-gray-900' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1
              className="text-3xl md:text-4xl mb-4 font-light"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              ${product.price}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm tracking-wider uppercase mb-3">
                Material
              </label>
              <div className="flex gap-3">
                {variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm tracking-wider uppercase ${
                      selectedVariant === variant
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    } transition-colors`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm tracking-wider uppercase mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 hover:border-gray-900 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white py-4 tracking-wider uppercase text-sm hover:bg-gray-800 transition-colors mb-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {[
                { title: 'Description', content: product.description },
                { title: 'Materials & Care', content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain plating, avoid contact with water, perfume, and cosmetics. Store in provided pouch.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be returned in original packaging with tags attached.' }
              ].map((section, index) => (
                <div key={section.title} className="border-t border-gray-200">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-sm tracking-wider uppercase"
                  >
                    {section.title}
                    <span className="text-xl">
                      {activeAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <p className="pb-4 text-sm text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2
            className="text-3xl md:text-4xl text-center mb-12 font-light"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="relative overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3
                  className="text-sm tracking-wider uppercase mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {related.name}
                </h3>
                <p className="text-gray-900">${related.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

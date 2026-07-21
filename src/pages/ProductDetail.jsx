import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Minus, Plus, ChevronLeft } from 'lucide-react';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-[#C9A96E] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordionItems = [
    {
      title: 'Description',
      content: product.description || 'Beautifully crafted demi-fine jewelry piece designed for everyday wear.'
    },
    {
      title: 'Materials & Care',
      content: '18K gold plated over brass. Hypoallergenic and nickel-free. To care for your jewelry, avoid contact with water, perfume, and lotions. Store in a cool, dry place.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day returns. See our full shipping and returns policy for more details.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container-luxury py-12">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#C9A96E] mb-8"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square overflow-hidden bg-[#FAF7F2] mb-4">
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
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#C9A96E]' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif uppercase tracking-[0.2em] text-2xl mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? 'text-[#C9A96E] fill-[#C9A96E]'
                        : 'text-gray-300'
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif mb-6">${product.price}</p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wider mb-3">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border text-sm uppercase tracking-wider transition-all ${
                      selectedVariant === variant
                        ? 'border-[#C9A96E] bg-[#C9A96E] text-white'
                        : 'border-gray-300 hover:border-[#C9A96E]'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 hover:border-[#C9A96E] transition"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 hover:border-[#C9A96E] transition"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, quantity, selectedVariant)}
              className="w-full bg-[#C9A96E] text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#A8843E] transition-all duration-300 mb-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div key={item.title} className="border-t border-[#C9A96E]/20">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === index ? null : index)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-serif text-sm uppercase tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-[#C9A96E]">
                      {activeAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <p className="pb-4 text-sm text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl text-center mb-12">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(related => (
                <Link key={related.id} to={`/product/${related.id}`}>
                  <div className="group">
                    <div className="aspect-square overflow-hidden bg-[#FAF7F2] mb-4">
                      <img
                        src={related.images[0]}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-serif uppercase tracking-[0.2em] text-sm">
                      {related.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{related.description}</p>
                    <p className="font-serif text-lg mt-2">${related.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

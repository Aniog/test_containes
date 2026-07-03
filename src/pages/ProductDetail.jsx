import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-[#c9a96e] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, material: selectedMaterial });
  };

  const accordions = [
    {
      title: 'Description',
      content: product.description
    },
    {
      title: 'Materials & Care',
      content: '18K gold plated over high-quality brass. Hypoallergenic and nickel-free. To maintain plating, avoid contact with water, perfumes, and lotions. Store in provided pouch.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be unworn and in original packaging.'
    }
  ];

  return (
    <div className="min-h-screen py-32 md:py-40">
      <div className="container-luxury">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-[#8a8a8a] hover:text-[#c9a96e] mb-8"
        >
          <ChevronLeft size={16} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left - Image Gallery */}
          <div>
            <div className="aspect-square overflow-hidden bg-[#faf9f6] mb-4">
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
                    selectedImage === index
                      ? 'border-[#c9a96e]'
                      : 'border-transparent'
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

          {/* Right - Product Info */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-wider mb-4">
              {product.name}
            </h1>
            <p className="font-serif text-2xl mb-6">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? 'fill-[#c9a96e] text-[#c9a96e]'
                        : 'text-[#e8e3dd]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#8a8a8a]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-light text-[#2d2d2d] mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider mb-4">Material</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-3 border text-sm uppercase tracking-wider transition-colors ${
                      selectedMaterial === material
                        ? 'border-[#c9a96e] bg-[#c9a96e] text-white'
                        : 'border-[#e8e3dd] hover:border-[#c9a96e]'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider mb-4">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[#e8e3dd] hover:border-[#c9a96e] transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[#e8e3dd] hover:border-[#c9a96e] transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#c9a96e] text-white py-4 text-sm uppercase tracking-wider hover:bg-[#b8945a] transition-colors mb-12"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {accordions.map((accordion, index) => (
                <div key={accordion.title} className="border-t border-[#e8e3dd]">
                  <button
                    onClick={() =>
                      setActiveAccordion(activeAccordion === index ? null : index)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-serif text-lg">{accordion.title}</span>
                    <span className="text-[#c9a96e]">
                      {activeAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <p className="pb-4 font-light text-[#2d2d2d] leading-relaxed">
                      {accordion.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden bg-[#faf9f6] mb-4">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="font-serif text-lg">${relatedProduct.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

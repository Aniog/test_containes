import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Plus, Minus, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Find product by ID
  const product = products.find(p => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-[#8B7355] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-32 lg:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-[#6B5E54] hover:text-[#2A2520] transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-[#F5F0EB] overflow-hidden">
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
                  className={`w-20 h-20 bg-[#F5F0EB] overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-[#8B7355]' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-3xl lg:text-4xl tracking-[0.15em] uppercase mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-[#8B7355] fill-[#8B7355]' : 'text-[#E8E0D8]'}
                    />
                  ))}
                </div>
                <span className="text-sm text-[#6B5E54]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-2xl font-serif mb-8">${product.price}</p>
            </div>

            <p className="text-[#6B5E54] leading-relaxed">{product.description}</p>

            {/* Variant Selector */}
            <div>
              <label className="block text-sm tracking-wider uppercase mb-4">
                Tone
              </label>
              <div className="flex gap-4">
                {['Gold', 'Silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedVariant(tone)}
                    className={`px-6 py-3 border text-sm tracking-wider uppercase transition-colors ${
                      selectedVariant === tone
                        ? 'bg-[#2A2520] text-[#FAF8F5] border-[#2A2520]'
                        : 'bg-transparent text-[#2A2520] border-[#E8E0D8] hover:border-[#8B7355]'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm tracking-wider uppercase mb-4">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-[#E8E0D8] flex items-center justify-center hover:border-[#8B7355] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-[#E8E0D8] flex items-center justify-center hover:border-[#8B7355] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#2A2520] text-[#FAF8F5] py-4 text-sm tracking-wider uppercase hover:bg-[#8B7355] transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="space-y-4 pt-8 border-t border-[#E8E0D8]">
              {[
                { title: 'Description', content: product.description },
                {
                  title: 'Materials & Care',
                  content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain plating, avoid contact with water, perfumes, and lotions. Store in provided pouch.'
                },
                {
                  title: 'Shipping & Returns',
                  content: 'Free worldwide shipping on all orders. 30-day return policy. Items must be returned in original packaging.'
                },
              ].map((accordion, index) => (
                <div key={accordion.title} className="border-b border-[#E8E0D8] pb-4">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="flex items-center justify-between w-full py-2 text-sm tracking-wider uppercase"
                  >
                    {accordion.title}
                    <span className="text-[#8B7355]">
                      {activeAccordion === index ? '−' : '+'}
                    </span>
                  </button>
                  {activeAccordion === index && (
                    <p className="text-sm text-[#6B5E54] leading-relaxed pt-2 pb-4">
                      {accordion.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl lg:text-3xl mb-12 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square bg-[#F5F0EB] overflow-hidden mb-4">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-sm tracking-[0.15em] uppercase mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-[#6B5E54]">${relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

// Import products data
import products from '../../data/products';
